import { FC } from 'react'
import { IProps } from '../../helpers/types'

const ClientDetails: FC<IProps> = ({ name, address }) => {
  return (
    <section className='mt-5'>
      <h2 className='text-xl uppercase'>{name}</h2>
      <p>{address}</p>
    </section>
  )
}

export default ClientDetails
