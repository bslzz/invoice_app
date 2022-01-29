import { FC, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ChangeEventType } from '../../helpers/types'

interface Props {
  description: string
  quantity: number
  price: number
  amount: number | null
  invoiceInfoChangeHandler: (e: ChangeEventType) => void
}

interface Ilists {
  id: string
  description: string
  quantity: number
  price: number
  amount: number | null
}

const TableForm: FC<Props> = ({
  description,
  quantity,
  price,
  amount,
  invoiceInfoChangeHandler
}) => {
  const [list, setList] = useState<Ilists[]>([])

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount
    }

    setList([...list, newItems])
  }

  console.log('list', list)

  return (
    <form onSubmit={submitForm}>
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
      <button
        className='mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded-shadow border-2 border-blue-500 rounded hover:bg-transparent hover:text-blue-500 transition-all duration-300'
        type='submit'
      >
        Add New Item
      </button>
    </form>
  )
}

export default TableForm
