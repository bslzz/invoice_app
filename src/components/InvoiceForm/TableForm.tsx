import { FC, MouseEvent, useEffect, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { ChangeEventType, IFormValues, Ilists } from '../../helpers/types'
import { tableLists } from '../../redux/features/invoiceForm/invoiceForm.slice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

interface Props {
  description: string
  quantity: number
  price: number
  changeHandler: (e: ChangeEventType) => void
  register: UseFormRegister<IFormValues>
  errors: any
}

const TableForm: FC<Props> = ({
  description,
  quantity,
  price,
  changeHandler,
  register,
  errors
}) => {
  const dispatch = useAppDispatch()
  const [lists, setLists] = useState<Ilists[]>([])

  const amount = useAppSelector((state) => state.invoiceForm.totalAmount)

  const addItemHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (description && quantity && price) {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount
      }
      setLists([...lists, newItems])
    }
  }

  useEffect(() => {
    dispatch(tableLists(lists))
  }, [lists, dispatch])

  return (
    <>
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
          className='my-5 bg-blue-500 text-white font-bold py-2 px-8 rounded-shadow border-2 border-blue-500 rounded hover:bg-transparent hover:text-blue-500 transition-all duration-300'
          onClick={addItemHandler}
        >
          Add New Item
        </button>
      </div>
      {lists.length > 0 && (
        <table width='100%' className='mb-10'>
          <thead>
            <tr className='bg-gray-100'>
              <td className='font-bold'>Description</td>
              <td className='font-bold'>Quantity</td>
              <td className='font-bold'>Price</td>
              <td className='font-bold'>Amount</td>
            </tr>
          </thead>
          {lists.map(
            ({ id, description, quantity, price, amount }: Ilists, index) => (
              <tbody key={id} className={index % 2 ? 'bg-gray-100' : ''}>
                <tr>
                  <td>{description}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td>{amount ? amount.toFixed(2) : null}</td>
                </tr>
              </tbody>
            )
          )}
        </table>
      )}
    </>
  )
}

export default TableForm
