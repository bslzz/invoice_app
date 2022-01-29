import { useState } from 'react'
import InvoiceDetailsForm from './components/InvoiceForm/InvoiceDetailsForm'
import InvoicePreview from './components/InvoicePreview'

const App = () => {
  const [showInvoice, setShowInvoice] = useState(false)

  return (
    <main className='m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow'>
      {showInvoice ? (
        <InvoicePreview setShowInvoice={setShowInvoice} />
      ) : (
        <InvoiceDetailsForm setShowInvoice={setShowInvoice} />
      )}
    </main>
  )
}

export default App
