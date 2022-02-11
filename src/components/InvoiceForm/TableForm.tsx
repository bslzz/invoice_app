import { FC, MouseEvent } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { ChangeEventType, IFormValues } from '../../helpers/types'
import { tableLists } from '../../redux/features/invoiceForm/invoiceForm.slice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import InvoiceDetailsTable from '../common/InvoiceDetails.table'

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
  const lists = useAppSelector((state) => state.invoiceForm.tableLists)
  const amount = useAppSelector((state) => state.invoiceForm.totalAmount)
  const edit = useAppSelector((state) => state.invoiceForm.edit)
  const editedItem = useAppSelector((state) => state.invoiceForm.editTableLists)

  const addItemHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!description || !quantity || !price) {
      alert('Please fill all the fields')
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount
      }
      dispatch(tableLists([...lists, newItems]))
    }
  }

  return (
    <>
      <div>
        <article className='w-full'>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-description'
              >
                Description
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-description'
                {...register('description')}
                placeholder='Description'
                value={edit ? editedItem.description : description}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-2'>
            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-quantity'
              >
                Quantity
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='number'
                id='grid-quantity'
                {...register('quantity')}
                placeholder='Quantity'
                value={edit ? editedItem.quantity : quantity}
                onChange={changeHandler}
              />
            </div>

            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-price'
              >
                Price
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='number'
                id='grid-price'
                {...register('price')}
                placeholder='Price'
                value={edit ? editedItem.price : price}
                onChange={changeHandler}
              />
            </div>

            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-amount'
              >
                Amount
              </label>
              {/* <p className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'> */}
              <p className={amount ? 'p-3 bg-gray-200' : 'p-6 bg-gray-100'}>
                {edit ? editedItem.amount : amount ? amount.toFixed(2) : null}
              </p>
            </div>
          </div>
        </article>

        <button
          className='mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded-shadow border-2 border-blue-500 rounded hover:bg-transparent hover:text-blue-500 transition-all duration-300'
          onClick={addItemHandler}
        >
          {edit ? 'Edit Item' : 'Add New Item'}
        </button>
      </div>
      {lists.length > 0 && <InvoiceDetailsTable show={true} />}
    </>
  )
}

export default TableForm
