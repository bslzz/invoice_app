import { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'

const ClientDetails: FC = () => {
  const { name, address } = useAppSelector((state) => state.invoiceForm.data)

  return (
    <section className='mt-5'>
      <h2 className='text-xl uppercase'>{name}</h2>
      <p>{address}</p>
    </section>
  )
}

export default ClientDetails
