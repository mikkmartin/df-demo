export const getRootUrl = (req): string => {
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
  return `${protocol}://${req.headers.host}`
}
