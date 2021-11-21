import { IInvoiceInfo } from '../types'

const ClientDetails = ({ name, address }: IInvoiceInfo) => {
  return (
    <section className='mt-5'>
      <h2 className='text-xl uppercase'>{name}</h2>
      <p>{address}</p>
    </section>
  )
}

export default ClientDetails
