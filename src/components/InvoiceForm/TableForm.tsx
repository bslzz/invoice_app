import { FC, useCallback, useState } from 'react'
import { FieldError, FormState, UseFormRegister } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { ChangeEventType, IFormValues } from '../../helpers/types'
import { useAppSelector } from '../../redux/hooks'

interface Props {
  description: string
  quantity: number
  price: number
  changeHandler: (e: ChangeEventType) => void
  register: UseFormRegister<IFormValues>
  errors: any
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
  changeHandler,
  register,
  errors
}) => {
  const [list, setList] = useState<Ilists[]>([])

  const amount = useAppSelector((state) => state.invoiceForm.totalAmount)

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
          {errors.description && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='text'
            {...register('description', { required: true })}
            placeholder='Description'
            value={description}
            onChange={changeHandler}
          />
        </div>
      </article>
      <article className='md:grid grid-cols-3 gap-10 '>
        <div className='flex flex-col'>
          <label htmlFor='quantity'>Quantity</label>
          {errors.quantity && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='number'
            {...register('quantity', { required: true })}
            placeholder='Quantity'
            value={quantity}
            onChange={changeHandler}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='price'>Price</label>
          {errors.price && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='number'
            {...register('price', { required: true })}
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
