import { IInvoiceInfo } from '../types'

const Notes = ({ notes }: IInvoiceInfo) => {
  return (
    <section className='mb-5'>
      {/* Textarea */}
      <p className='lg:w-1/2 text-justify'>{notes}</p>
    </section>
  )
}

export default Notes
