import { FC, useEffect, useRef } from 'react'
import { MouseEventType } from '../../helpers/types'
import { showTableActions } from '../../redux/features/invoiceForm/invoiceForm.slice'
import { useAppDispatch } from '../../redux/hooks'
import InvoiceDetailsTable from '../common/InvoiceDetails.table'
import ClientDetails from './ClientDetails'
import Dates from './Dates'
import Footer from './Footer'
import Header from './Header'
import Notes from './Notes'
import OwnerDetails from './OwnerDetails'
import ReactToPrint from 'react-to-print'

const InvoicePreview: FC = () => {
  const componentRef = useRef(null)

  const dispatch = useAppDispatch()
  const editInvoiceInfo = (e: MouseEventType) => {
    // setShowInvoice(false)
  }

  useEffect(() => {
    dispatch(showTableActions(false))
  })

  return (
    <div className='invoice_preview bg-white p-5 rounded shadow-2xl'>
      <ReactToPrint
        trigger={() => (
          <button className='bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded-shadow border-2 border-blue-500 rounded hover:bg-transparent hover:text-blue-500 transition-all duration-300'>
            Save/Print
          </button>
        )}
        content={() => componentRef.current}
      />

      <div ref={componentRef} className='p-5'>
        <Header />
        <OwnerDetails />
        <ClientDetails />
        <Dates />
        <InvoiceDetailsTable />
        <Notes />
        <Footer />
      </div>
      <button
        className='bg-blue-500 text-white font-bold py-2 px-8 rounded-shadow border-2 border-blue-500 rounded hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5'
        onClick={editInvoiceInfo}
      >
        Edit Information
      </button>
    </div>
  )
}

export default InvoicePreview
