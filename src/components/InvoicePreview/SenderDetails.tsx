import { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'

const SenderDetails: FC = () => {
  const {
    sender_firstName,
    sender_lastName,
    sender_address,
    sender_postCode,
    sender_city,
    sender_country,
    sender_companyName,
    customerType
  } = useAppSelector((state) => state.invoiceForm.data)
  return (
    <section className='flex flex-col items-end justify-end'>
      <h3 className='uppercase'>From : </h3>
      <h2 className='font-bold text-xl uppercase md:text-2xl'>
        {customerType === 'person' &&
        (sender_firstName !== undefined || sender_lastName !== undefined)
          ? sender_firstName + sender_lastName
          : sender_companyName}
      </h2>
      <p>{sender_address}</p>
      <p>
        {sender_postCode && sender_postCode + ','} {sender_city}
      </p>
      <p>{sender_country}</p>
    </section>
  )
}

export default SenderDetails
