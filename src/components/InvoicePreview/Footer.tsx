import { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'

const Footer: FC = () => {
  const { email, website, phone, account_number, bank } = useAppSelector(
    (state) => state.invoiceForm.data
  )
  return (
    <footer className='footer border-t-2 border-gray-300 pt-5'>
      <ul className='flex flex-wrap items-center justify-center'>
        {/* <li>
          <span className='font-bold'>Name:</span>
          {name}
        </li> */}
        <li>
          <span className='font-bold'>Email:</span>
          {email}
        </li>
        <li>
          <span className='font-bold'>Phone:</span>
          {phone}
        </li>
        <li>
          <span className='font-bold'>Bank:</span>
          {bank}
        </li>
        {/* <li>
          <span className='font-bold'>Account holder:</span>
          {name}
        </li> */}
        <li>
          <span className='font-bold'>Account Number:</span>
          {account_number}
        </li>
        <li>
          <span className='font-bold'>Website:</span>
          <a href={website} target='_blank' rel='noopenner noreferrer'>
            {website}
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
