import { IInvoiceInfo } from '../types'

const MainDetails = ({ name, address }: IInvoiceInfo) => {
  return (
    <section className='flex flex-col items-end justify-end'>
      <h2 className='font-bold text-xl uppercase md:text-4xl'>{name}</h2>
      <p>{address}</p>
    </section>
  )
}

export default MainDetails
