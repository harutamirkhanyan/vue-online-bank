
const formatter= new Intl.NumberFormat('en-En', { currency: 'rub', stylecurrency})
export function currency (value){
  return formatter.format(value)
}