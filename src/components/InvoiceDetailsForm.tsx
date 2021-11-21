import { ChangeEvent, MouseEvent } from 'react'
import { IInvoiceInfo } from '../types'

const InvoiceDetailsForm = ({
  setShowInvoice,
  invoiceInfo,
  setInvoiceInfo
}: any) => {
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

  const invoiceInfoChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setInvoiceInfo({ ...invoiceInfo, [name]: value })
  }

  const previewInvoice = (e: MouseEvent<HTMLButtonElement>) => {
    setShowInvoice(true)
  }
  return (
    <div className='flex flex-col justify-center'>
      <label htmlFor='name'>Enter your name</label>
      <input
        type='text'
        name='name'
        placeholder='Enter your name'
        value={name}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='address'>Enter your address</label>
      <input
        type='text'
        name='address'
        placeholder='Enter your address'
        value={address}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='email'>Enter your email</label>
      <input
        type='email'
        name='email'
        placeholder='Enter your email'
        value={email}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='website'>Enter your website</label>
      <input
        type='url'
        name='website'
        placeholder='Enter your website'
        value={website}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='phone'>Enter your phone</label>
      <input
        type='tel'
        name='phone'
        placeholder='Enter your phone number'
        value={phone}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='bank'>Enter your bank</label>
      <input
        type='text'
        name='bank'
        placeholder='Enter your bank name'
        value={bank}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='account_number'>Enter your account number</label>
      <input
        type='number'
        name='account_number'
        placeholder='Enter your account_number'
        value={account_number}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='client_name'>Enter your client name</label>
      <input
        type='text'
        name='client_name'
        placeholder='Enter your client name'
        value={client_name}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='client_address'>Enter your client address</label>
      <input
        type='text'
        name='client_address'
        placeholder='Enter your client address'
        value={client_address}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='invoice_number'>Enter your invoice number</label>
      <input
        type='number'
        name='invoice_number'
        placeholder='Enter your invoice number'
        value={invoice_number}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='invoice_date'>Enter invoice date</label>
      <input
        type='date'
        name='invoice_date'
        placeholder='Enter invoice date'
        value={invoice_date}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='due_date'>Enter due date</label>
      <input
        type='date'
        name='due_date'
        placeholder='Enter due date'
        value={due_date}
        onChange={invoiceInfoChangeHandler}
      />

      <label htmlFor='notes'>Additional notes</label>
      <textarea
        name='notes'
        cols={30}
        rows={10}
        placeholder='Additional notes to the client'
        value={notes}
        onChange={invoiceInfoChangeHandler}
      />

      <button
        className='bg-blue-500 text-white font-bold py-2 px-8 rounded-shadow border-2 border-blue-500 rounded hover:bg-transparent hover:text-blue-500 transition-all duration-300'
        onClick={previewInvoice}
      >
        Preview Invoice
      </button>
    </div>
  )
}

export default InvoiceDetailsForm
