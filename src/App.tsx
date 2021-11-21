import { MouseEvent, useState } from 'react'
import ClientDetails from './components/ClientDetails'
import Dates from './components/Dates'
import Header from './components/Header'
import MainDetails from './components/MainDetails'
import InvoiceTable from './components/InvoiceTable'
import Notes from './components/Notes'
import Footer from './components/Footer'
import InvoiceDetailsForm from './components/InvoiceDetailsForm'
import { IInvoiceInfo } from './types'

const App = () => {
  const [showInvoice, setShowInvoice] = useState(false)

  const [invoiceInfo, setInvoiceInfo] = useState<IInvoiceInfo>({
    name: '',
    address: '',
    email: '',
    phone: '',
    bank: '',
    account_number: '',
    website: '',
    client_name: '',
    client_address: '',
    invoice_number: '',
    invoice_date: '',
    due_date: '',
    notes: ''
  })

  const {
    name,
    address,
    email,
    phone,
    bank,
    account_number,
    website,
    client_name,
    client_address,
    invoice_number,
    invoice_date,
    due_date,
    notes
  }: IInvoiceInfo = invoiceInfo

  const editInvoiceInfo = (e: MouseEvent<HTMLButtonElement>) => {
    setShowInvoice(false)
  }
  return (
    <main className='m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow'>
      {showInvoice ? (
        <div>
          <Header />

          <MainDetails name={name} address={address} />

          <ClientDetails name={client_name} address={client_address} />

          <Dates
            invoice_number={invoice_number}
            invoice_date={invoice_date}
            due_date={due_date}
          />

          <InvoiceTable />

          <Notes notes={notes} />

          <Footer
            name={name}
            email={email}
            website={website}
            phone={phone}
            account_number={account_number}
            bank={bank}
          />
          <button
            className='bg-blue-500 text-white font-bold py-2 px-8 rounded-shadow border-2 border-blue-500 rounded hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5'
            onClick={editInvoiceInfo}
          >
            Edit Information
          </button>
        </div>
      ) : (
        <InvoiceDetailsForm
          setShowInvoice={setShowInvoice}
          invoiceInfo={invoiceInfo}
          setInvoiceInfo={setInvoiceInfo}
        />
      )}
    </main>
  )
}

export default App
