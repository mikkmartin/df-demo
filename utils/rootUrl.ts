export const getRootUrl = (req): string => {
  const protocol = req.headers['x-forwarded-proto'] || req.connection.encrypted ? 'https' : 'http'
  const host = req.headers['x-forwarded-host'] || req.headers.host
  return `${protocol}://${host}`
}
