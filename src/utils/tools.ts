export function trimUrl(url: string): string {
  url = url.trim()
  while (url.endsWith('/')) {
    url = url.slice(0, -1)
  }

  return url
}

export function getBaseUrl() {
  const url = window.location.origin

  return trimUrl(url)
}
