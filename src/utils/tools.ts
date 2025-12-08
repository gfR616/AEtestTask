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

export const monthIndexMap: Record<string, number> = {
  января: 0,
  февраля: 1,
  марта: 2,
  апреля: 3,
  мая: 4,
  июня: 5,
  июля: 6,
  августа: 7,
  сентября: 8,
  октября: 9,
  ноября: 10,
  декабря: 11,
}

export const toTimestamp = (dateStr: string): number => {
  const [dayRaw, monthRaw, yearRaw] = dateStr.split(' ')
  const day = Number(dayRaw)
  const year = Number(yearRaw)
  const monthName = monthRaw as keyof typeof monthIndexMap | undefined
  const month = monthName ? monthIndexMap[monthName] : undefined
  if (Number.isNaN(day) || Number.isNaN(year) || month === undefined)
    return Number.NEGATIVE_INFINITY

  return new Date(year, month, day).getTime()
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const randomDelay = () => 300 + Math.random() * 200
