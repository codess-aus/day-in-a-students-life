import tempfile
import unittest
from pathlib import Path

from scripts.check_links import check_links


class CheckLinksTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.site = Path(self.temp.name)

    def write(self, name, content):
        path = self.site / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")

    def test_valid_local_and_external_links(self):
        self.write(
            "index.html",
            '<a id="top"></a><a href="#top"></a>'
            '<a href="other/?query=1#hello%20world"></a>'
            '<a href="/other/#legacy"></a><img src="image.png">'
            '<a href="https://example.com/missing"></a>'
            '<a href="//example.com/missing"></a><a href="mailto:a@example.com"></a>',
        )
        self.write("other/index.html", '<h1 id="hello world"></h1><a name="legacy"></a>')
        self.write("image.png", "")
        self.assertEqual(check_links(self.site), [])

    def test_reports_missing_targets_and_fragments(self):
        self.write(
            "index.html",
            '<a href="missing/"></a><a href="other/#absent"></a>'
            '<img src="missing.png"><a href="../outside"></a>',
        )
        self.write("other/index.html", '<h1 id="present"></h1>')
        errors = check_links(self.site)
        self.assertEqual(len(errors), 4)
        self.assertTrue(any("missing target 'missing/'" in error for error in errors))
        self.assertTrue(any("missing fragment 'other/#absent'" in error for error in errors))
        self.assertTrue(any("missing target 'missing.png'" in error for error in errors))
        self.assertTrue(any("link outside site '../outside'" in error for error in errors))

    def test_missing_site_is_an_error(self):
        self.assertTrue(check_links(self.site / "missing"))

    def test_missing_site_index_is_an_error(self):
        self.assertTrue(check_links(self.site))


if __name__ == "__main__":
    unittest.main()
