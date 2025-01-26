export function titleToUrl(title: string) {
  return "/".concat(title.toLowerCase().replace(" ", "-"));
}
