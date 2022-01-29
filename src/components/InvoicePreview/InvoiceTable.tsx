import { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'

const InvoiceTable: FC = () => {
  const { description, quantity, price, amount } = useAppSelector(
    (state) => state.invoiceForm.data
  )
  return (
    <table width='100%'>
      <thead>
        <tr className='bg-gray-100'>
          <td className='font-bold'>Description</td>
          <td className='font-bold'>Quantity</td>
          <td className='font-bold'>Price</td>
          <td className='font-bold'>Amount</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{description}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{amount ? amount.toFixed(2) : null}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default InvoiceTable
