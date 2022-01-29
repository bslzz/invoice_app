import { FC, useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ChangeEventType } from '../../helpers/types'

interface Props {
  description: string
  quantity: number
  price: number
  amount: number | null
  changeHandler: (e: ChangeEventType) => void
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
  changeHandler
}) => {
  const [list, setList] = useState<Ilists[]>([])

  const submitForm = useCallback(() => {
    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount
    }

    setList([...list, newItems])
  }, [description, quantity, price, amount, list])

  console.log('list', list)

  return (
    <div>
      <article className='md:mt-16'>
        <div className='flex flex-col'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={description}
            onChange={changeHandler}
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
            onChange={changeHandler}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='number'>Price</label>
          <input
            type='number'
            name='price'
            placeholder='Price'
            value={price}
            onChange={changeHandler}
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
        onSubmit={submitForm}
      >
        Add New Item
      </button>
    </div>
  )
}

export default TableForm
