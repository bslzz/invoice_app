import { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'

const ClientDetails: FC = () => {
  const {
    receiver_firstName,
    receiver_lastName,
    receiver_address,
    receiver_postCode,
    receiver_city,
    receiver_country
  } = useAppSelector((state) => state.invoiceForm.data)

  return (
    <section className='mt-5'>
      <h3 className='uppercase'>Receiver : </h3>
      <h2 className='text-xl uppercase font-bold'>
        {receiver_firstName} {receiver_lastName}
      </h2>
      <p>{receiver_address}</p>
      <p>
        {receiver_postCode && receiver_postCode + ','} {receiver_city}
      </p>
      <p>{receiver_country}</p>
    </section>
  )
}

export default ClientDetails
