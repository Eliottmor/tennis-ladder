export const toCamelCase = (text) => {
  text = text.replace(/[-_\s.]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
  return text.substring(0, 1).toLowerCase() + text.substring(1)
}
