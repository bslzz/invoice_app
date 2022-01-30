import { MdDelete } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { Ilists } from '../../helpers/types'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  editTableLists,
  tableLists,
  totalSum
} from '../../redux/features/invoiceForm/invoiceForm.slice'
import { useEffect, useState } from 'react'

const InvoiceDetailsTable = () => {
  const dispatch = useAppDispatch()
  const [editable, setEditable] = useState<boolean>(false)

  console.log('editable', editable)

  const lists = useAppSelector((state) => state.invoiceForm.tableLists)
  const totalAmt = useAppSelector((state) => state.invoiceForm.totalSum)
  const showTableActions = useAppSelector(
    (state) => state.invoiceForm.showTableActions
  )

  console.log('showTableActions', showTableActions)

  const deleteInvoiceRow = (id: string) => {
    const newLists = lists.filter((list) => list.id !== id)
    dispatch(tableLists(newLists))
  }
  const editInvoiceRow = (id: string) => {
    const editItem = lists.find((list) => list.id === id)
    // setLists(lists.filter((list) => list.id !== id))
    if (editItem) {
      setEditable(true)
      dispatch(editTableLists(editItem))
    }
  }

  useEffect(() => {
    if (lists.length > 0) {
      const totalAmt = lists.reduce(
        (accumulatedTotal, list) =>
          list.amount ? accumulatedTotal + list.amount : 0,
        0 //0 is the start point of accumulatedTotal
      )
      dispatch(totalSum(totalAmt))
    } else {
      dispatch(totalSum(0))
    }
  }, [lists, dispatch])
  return (
    <>
      <table width='100%' className='mb-10'>
        <thead>
          <tr className='bg-gray-100'>
            <td className='font-bold'>Description</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Price</td>
            <td className='font-bold'>Amount</td>
            {showTableActions && <td className='font-bold'>Actions</td>}
          </tr>
        </thead>
        {lists.map(
          ({ id, description, quantity, price, amount }: Ilists, index) => (
            <tbody key={id} className={index % 2 ? 'bg-gray-100' : ''}>
              <tr className='h-10'>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount ? amount.toFixed(2) : null}</td>
                {showTableActions && (
                  <td>
                    <button onClick={() => deleteInvoiceRow(id)}>
                      <MdDelete className='text-red-400 hover:text-red-500 font-bold text-xl mr-5' />
                    </button>
                    <button onClick={() => editInvoiceRow(id)}>
                      <FiEdit className='text-blue-400 hover:text-blue-600 font-bold text-lg' />
                    </button>
                  </td>
                )}
              </tr>
            </tbody>
          )
        )}
      </table>
      <div className='text-gray-600 text-sm flex justify-end'>
        <p>Total: {totalAmt && totalAmt.toFixed(2)}</p>
      </div>
    </>
  )
}

export default InvoiceDetailsTable
