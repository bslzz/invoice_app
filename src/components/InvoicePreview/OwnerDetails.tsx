import { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'

const OwnerDetails: FC = () => {
  const { name, address } = useAppSelector((state) => state.invoiceForm.data)
  return (
    <section className='flex flex-col items-end justify-end'>
      <h2 className='font-bold text-xl uppercase md:text-4xl'>{name}</h2>
      <p>{address}</p>
    </section>
  )
}

export default OwnerDetails
