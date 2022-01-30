import { FC } from 'react'
import { ISetShow, MouseEventType } from '../../helpers/types'
import InvoiceDetailsTable from '../common/InvoiceDetails.table'
import ClientDetails from './ClientDetails'
import Dates from './Dates'
import Footer from './Footer'
import Header from './Header'
import Notes from './Notes'
import OwnerDetails from './OwnerDetails'

const InvoicePreview: FC<ISetShow> = ({ setShowInvoice }) => {
  const editInvoiceInfo = (e: MouseEventType) => {
    setShowInvoice(false)
  }
  return (
    <>
      <Header />
      <OwnerDetails />
      <ClientDetails />
      <Dates />
      <InvoiceDetailsTable />
      <Notes />
      <Footer />
      <button
        className='bg-blue-500 text-white font-bold py-2 px-8 rounded-shadow border-2 border-blue-500 rounded hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5'
        onClick={editInvoiceInfo}
      >
        Edit Information
      </button>
    </>
  )
}

export default InvoicePreview
