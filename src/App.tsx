import { useState } from 'react'
import ClientDetails from './components/InvoicePreview/ClientDetails'
import Dates from './components/InvoicePreview/Dates'
import Header from './components/InvoicePreview/Header'
import OwnerDetails from './components/InvoicePreview/OwnerDetails'
import InvoiceTable from './components/InvoicePreview/InvoiceTable'
import Notes from './components/InvoiceForm/Notes'
import Footer from './components/InvoicePreview/Footer'
import InvoiceDetailsForm from './components/InvoiceForm/InvoiceDetailsForm'
import { MouseEventType } from './helpers/types'

const App = () => {
  const [showInvoice, setShowInvoice] = useState(false)

  const editInvoiceInfo = (e: MouseEventType) => {
    setShowInvoice(false)
  }

  return (
    <main className='m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow'>
      {showInvoice ? (
        <div>
          <Header />
          <OwnerDetails />
          <ClientDetails />
          <Dates />
          <InvoiceTable />
          <Notes />
          <Footer />
          <button
            className='bg-blue-500 text-white font-bold py-2 px-8 rounded-shadow border-2 border-blue-500 rounded hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5'
            onClick={editInvoiceInfo}
          >
            Edit Information
          </button>
        </div>
      ) : (
        <InvoiceDetailsForm setShowInvoice={setShowInvoice} />
      )}
    </main>
  )
}

export default App
