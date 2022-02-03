import { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'

const ClientDetails: FC = () => {
  const { client_name, client_address } = useAppSelector(
    (state) => state.invoiceForm.data
  )

  return (
    <section className='mt-5'>
      <h2 className='text-xl uppercase font-bold'>{client_name}</h2>
      <p>{client_address}</p>
    </section>
  )
}

export default ClientDetails
