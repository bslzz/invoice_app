import { FC } from 'react'
import { IProps } from '../../helpers/types'

const OwnerDetails: FC<IProps> = ({ name, address }) => {
  return (
    <section className='flex flex-col items-end justify-end'>
      <h2 className='font-bold text-xl uppercase md:text-4xl'>{name}</h2>
      <p>{address}</p>
    </section>
  )
}

export default OwnerDetails