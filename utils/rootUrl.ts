export const getRootUrl = (req): string => {
  const protocol = req.headers['x-forwarded-proto'] || req.connection.encrypted ? 'https' : 'http'
  return `${protocol}://${req.headers.host}`
}
