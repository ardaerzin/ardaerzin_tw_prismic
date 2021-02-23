export const parseDateString = (date, options) => {
  return new Date(date).toLocaleDateString(
    'en-US',
    options || {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'utc'
    }
  )
}
