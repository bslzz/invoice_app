import { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'

const InvoiceTable: FC = () => {
  const tableLists = useAppSelector((state) => state.invoiceForm.tableLists)

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
      {tableLists.map(({ id, description, quantity, price, amount }, index) => (
        <tbody key={id} className={index % 2 ? 'bg-gray-100' : ''}>
          <tr>
            <td>{description}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{amount ? amount.toFixed(2) : null}</td>
          </tr>
        </tbody>
      ))}
    </table>
  )
}

export default InvoiceTable
