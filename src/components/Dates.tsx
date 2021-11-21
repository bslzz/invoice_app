import { IInvoiceInfo } from '../types'

const Dates = ({ invoice_number, invoice_date, due_date }: IInvoiceInfo) => {
  return (
    <article className='my-5 flex items-end justify-end'>
      <ul>
        <li className='p-1'>
          <span className='font-bold'>Invoice number:</span>
          {invoice_number}
        </li>
        <li className='p-1 bg-gray-100'>
          <span className='font-bold'>Invoice Date</span>
          {invoice_date}
        </li>
        <li className='p-1'>
          <span className='font-bold'>Due Date</span>
          {due_date}
        </li>
      </ul>
    </article>
  )
}

export default Dates
