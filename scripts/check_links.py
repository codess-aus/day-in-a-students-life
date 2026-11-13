from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.anchors = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.anchors.add(attrs["id"])
        if tag == "a" and attrs.get("name"):
            self.anchors.add(attrs["name"])
        for attribute in ("href", "src"):
            if attrs.get(attribute):
                self.links.append(attrs[attribute])


def check_links(site):
    site = Path(site).resolve()
    if not site.is_dir():
        return [f"Site directory does not exist: {site}"]
    if not (site / "index.html").is_file():
        return [f"Site index does not exist: {site / 'index.html'}"]

    pages = {}
    for path in site.rglob("*.html"):
        parser = PageParser()
        parser.feed(path.read_text(encoding="utf-8"))
        pages[path.resolve()] = parser

    errors = []
    for page, parser in pages.items():
        for link in parser.links:
            try:
                url = urlsplit(link)
            except ValueError:
                errors.append(f"{page.relative_to(site)}: invalid URL {link!r}")
                continue
            if url.scheme or url.netloc:
                continue
            path = unquote(url.path)
            if not path:
                target = page
            elif path.startswith("/"):
                target = site / path.lstrip("/")
            else:
                target = page.parent / path
            target = target.resolve()
            if not target.is_relative_to(site):
                errors.append(f"{page.relative_to(site)}: link outside site {link!r}")
                continue
            if target.is_dir():
                target = target / "index.html"
            if not target.is_file():
                errors.append(f"{page.relative_to(site)}: missing target {link!r}")
            elif url.fragment and target in pages:
                if unquote(url.fragment) not in pages[target].anchors:
                    errors.append(f"{page.relative_to(site)}: missing fragment {link!r}")
    return errors


if __name__ == "__main__":
    errors = check_links("site")
    if errors:
        print("\n".join(errors))
        raise SystemExit(1)
    print("Generated site paths and fragments are valid; deployment base paths are not checked.")
