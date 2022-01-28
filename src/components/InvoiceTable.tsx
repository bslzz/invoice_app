import { FC } from 'react'

interface Props {
  description: string
  quantity: number
  price: number
  amount: number | null
}

const InvoiceTable: FC<Props> = ({ description, quantity, price, amount }) => {
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
