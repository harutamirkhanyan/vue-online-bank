
const formatter= new Intl.NumberFormat('ru-RU', { currency: 'rub', style: 'currency'})
export function currency (value){
  return formatter.format(value)
}