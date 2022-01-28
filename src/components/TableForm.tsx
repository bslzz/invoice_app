import { FC } from 'react'
import { ChangeEventType } from '../types'

interface Props {
  description: string
  quantity: number
  price: number
  amount: number | null
  invoiceInfoChangeHandler: (e: ChangeEventType) => void
}

const TableForm: FC<Props> = ({
  description,
  quantity,
  price,
  amount,
  invoiceInfoChangeHandler
}) => {
  return (
    <>
      <article className='md:mt-16'>
        <div className='flex flex-col'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={description}
            onChange={invoiceInfoChangeHandler}
          />
        </div>
      </article>
      <article className='md:grid grid-cols-3 gap-10 '>
        <div className='flex flex-col'>
          <label htmlFor='quantity'>Quantity</label>
          <input
            type='number'
            name='quantity'
            placeholder='Quantity'
            value={quantity}
            onChange={invoiceInfoChangeHandler}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='number'>Price</label>
          <input
            type='number'
            name='price'
            placeholder='Price'
            value={price}
            onChange={invoiceInfoChangeHandler}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='amount'>Amount</label>
          <p className={amount ? 'p-1 bg-gray-100' : 'p-4 bg-gray-100'}>
            {amount ? amount.toFixed(2) : null}
          </p>
        </div>
      </article>
    </>
  )
}

export default TableForm
