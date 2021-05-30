import { format } from 'date-fns'

const formatDate = (date: Date) => {
  let day: string = format(new Date(date), 'dd/MM/yyyy HH:MM');
  return `${day} EST`;
}

export {formatDate};
