export const convertDate = (val: string) =>
  val &&
  new Intl.DateTimeFormat('fi-FI', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(val))
