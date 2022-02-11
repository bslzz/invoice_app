import { FC, useRef } from 'react'
import InvoiceDetailsTable from '../common/InvoiceDetails.table'
import ClientDetails from './ClientDetails'
import Dates from './Dates'
import Footer from './Footer'
import Header from './Header'
import Notes from './Notes'
import SenderDetails from './SenderDetails'
import ReactToPrint from 'react-to-print'

const InvoicePreview: FC = () => {
  const componentRef = useRef(null)

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
        <SenderDetails />
        <ClientDetails />
        <Dates />
        <InvoiceDetailsTable show={false} />
        <Notes />
        <Footer />
      </div>
    </div>
  )
}

export default InvoicePreview
