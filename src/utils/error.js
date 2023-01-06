
const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'This emeil was not found',
  EMAIL_EXISTS: 'ЭЛЕКТРОННАЯ ПОЧТА СУЩЕСТВУЕТ'
}
export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Undefined error'
}