import InvoiceDetailsForm from './components/InvoiceForm/InvoiceDetailsForm'
import InvoicePreview from './components/InvoicePreview'

const App = () => {
  // const [showInvoice, setShowInvoice] = useState(false)

  return (
    <main className='m-5 p-5 xl:grid grid-cols-2 gap-5 xl:items-start'>
      <InvoiceDetailsForm />
      <InvoicePreview />
    </main>
  )
}

export default App
