import { FC } from 'react'
import { IDates } from '../types'

const Dates: FC<IDates> = ({ invoice_number, invoice_date, due_date }) => {
  const convertDate = (val: string) =>
    new Intl.DateTimeFormat('fi-FI', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(new Date(val))

  return (
    <article className='my-5 flex items-end justify-end'>
      <ul>
        <li className='p-1'>
          <span className='font-bold'>Invoice number: </span>
          {invoice_number}
        </li>
        <li className='p-1 bg-gray-100'>
          <span className='font-bold'>Invoice Date </span>
          {convertDate(invoice_date)}
        </li>
        <li className='p-1'>
          <span className='font-bold'>Due Date </span>
          {convertDate(due_date)}
        </li>
      </ul>
    </article>
  )
}

export default Dates
