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

export function formatCustomDate(date: Date) {
  const day = date.getDate()
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]
  const monthName = months[date.getMonth()]
  const year = date.getFullYear()

  return `${day} ${monthName} ${year}`
}
