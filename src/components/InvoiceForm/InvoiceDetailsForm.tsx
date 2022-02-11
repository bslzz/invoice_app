import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { IFormValues } from '../../helpers/types'
import { totalAmount } from '../../redux/features/invoiceForm/invoiceForm.slice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useFormValues } from '../../utils/useFormHooks'
import TableForm from './TableForm'

const InvoiceDetailsForm: FC = () => {
  const { values, changeHandler } = useFormValues<IFormValues>(
    {} as IFormValues
  )

  const {
    sender_firstName,
    sender_lastName,
    sender_address,
    sender_postCode,
    sender_city,
    sender_country,
    sender_companyName,
    email,
    phone,
    bank,
    account_number,
    website,
    receiver_firstName,
    receiver_lastName,
    receiver_address,
    receiver_postCode,
    receiver_city,
    receiver_country,
    invoice_number,
    invoice_date,
    due_date,
    notes,
    description,
    quantity,
    price
  }: IFormValues = values

  const dispatch = useAppDispatch()

  const data = useAppSelector((state) => state.invoiceForm.data)

  console.log('data', data)

  const {
    register,
    formState: { errors }
  } = useForm<IFormValues>()

  useEffect(() => {
    dispatch(totalAmount((quantity as number) * (price as number)))
  }, [quantity, price, dispatch])

  return (
    <form className='flex flex-col justify-center bg-white p-5 rounded shadow-xl'>
      {/* SENDER'S DETAIL STARTS  */}

      <h6 className='text-center font-bold my-5'>SENDER INFO</h6>
      <article className='w-full mb-5'>
        <div className='flex flex-wrap'>
          <div className='mr-5'>
            <input
              className='mr-2 cursor-pointer'
              type='radio'
              id='company'
              value='company'
              defaultChecked
              {...register('customerType')}
              onChange={changeHandler}
            />
            <label htmlFor='company'>Company</label>
          </div>
          <div>
            <input
              className='mr-2 cursor-pointer'
              type='radio'
              value='person'
              id='person'
              {...register('customerType')}
              onChange={changeHandler}
            />
            <label htmlFor='person'>Private Person</label>
          </div>
        </div>
        {data?.customerType === 'person' ? (
          <div className='flex flex-wrap -mx-3 mb-3'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-sender_firstName'
              >
                First Name
              </label>

              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                id='grid-sender_firstName'
                {...register('sender_firstName')}
                placeholder='Enter your first name'
                value={sender_firstName}
                onChange={changeHandler}
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-sender_lastName'
              >
                Last Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-sender_lastName'
                type='text'
                {...register('sender_lastName')}
                placeholder='Enter your last name'
                value={sender_lastName}
                onChange={changeHandler}
              />
            </div>
          </div>
        ) : (
          <div className='flex flex-wrap -mx-3 mb-3'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-sender_companyName'
              >
                Company Name
              </label>

              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                id='grid-sender_companyName'
                {...register('sender_companyName')}
                placeholder='Enter your company name'
                value={sender_companyName}
                onChange={changeHandler}
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-sender_address'
              >
                Address
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-sender_address'
                {...register('sender_address')}
                placeholder='Enter your address'
                value={sender_address}
                onChange={changeHandler}
              />
            </div>
          </div>
        )}
        {data?.customerType === 'person' && (
          <div className='flex flex-wrap -mx-3 mb-3'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-sender_address'
              >
                Address
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-sender_address'
                {...register('sender_address')}
                placeholder='Enter your address'
                value={sender_address}
                onChange={changeHandler}
              />
            </div>
          </div>
        )}
        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-sender_postCode'
            >
              Zip
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='number'
              id='grid-sender_postCode'
              {...register('sender_postCode')}
              placeholder='Enter your postal code'
              value={sender_postCode}
              onChange={changeHandler}
            />
          </div>

          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-sender_city'
            >
              City
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-sender_city'
              {...register('sender_city')}
              placeholder='Enter your city'
              value={sender_city}
              onChange={changeHandler}
            />
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-sender_country'
            >
              Country
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-sender_country'
              {...register('sender_country')}
              placeholder='Enter your country'
              value={sender_country}
              onChange={changeHandler}
            />
          </div>
        </div>
      </article>

      <article className='w-full'>
        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-email'
            >
              Email
            </label>

            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='email'
              {...register('email', { required: true })}
              id='grid-email'
              placeholder='Enter your email'
              value={email}
              onChange={changeHandler}
            />
            {errors.email && (
              <span className='text-red-600 text-xs italic'>*required</span>
            )}
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-phone'
            >
              Phone Number
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-phone'
              type='number'
              {...register('phone', { required: true })}
              placeholder='Enter your phone number'
              value={phone as number}
              onChange={changeHandler}
            />
            {errors.phone && (
              <span className='text-red-600 text-xs italic'>*required</span>
            )}
          </div>
        </div>
      </article>

      <article className='w-full'>
        <div className='flex flex-wrap -mx-3 mb-3'>
          <div className='w-full px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-url'
            >
              Website
            </label>

            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-url'
              type='url'
              {...register('website')}
              placeholder='Enter your website'
              value={website}
              onChange={changeHandler}
            />
          </div>
        </div>
      </article>

      {/* SENDER'S DETAIL ENDS  */}

      {/* Bank Details */}

      <article className='w-full mb-5 border-b-2'>
        <div className='flex flex-wrap -mx-3 mb-3'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-bank'
            >
              Bank
            </label>

            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              id='grid-bank'
              {...register('bank', { required: true })}
              placeholder='Enter your bank name'
              value={bank}
              onChange={changeHandler}
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-accountNumber'
            >
              Account Number
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-accountNumber'
              type='text'
              {...register('account_number', { required: true })}
              placeholder='Enter your account number'
              value={account_number}
              onChange={changeHandler}
            />
          </div>
        </div>
      </article>

      {/* CLIENT DETAILS START */}
      <h6 className='text-center font-bold my-5'>CLIENT INFO</h6>
      <article className='w-full mb-5'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-receiver_firstName'
            >
              First Name
            </label>

            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              id='grid-receiver_firstName'
              {...register('receiver_firstName')}
              placeholder='Enter your first name'
              value={receiver_firstName}
              onChange={changeHandler}
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-receiver_lastName'
            >
              Last Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-receiver_lastName'
              type='text'
              {...register('receiver_lastName')}
              placeholder='Enter your last name'
              value={receiver_lastName}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-receiver_address'
            >
              Address
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-receiver_address'
              {...register('receiver_address')}
              placeholder='Enter your address'
              value={receiver_address}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-receiver_postCode'
            >
              Zip
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='number'
              id='grid-receiver_postCode'
              {...register('receiver_postCode')}
              placeholder='Enter your postal code'
              value={receiver_postCode}
              onChange={changeHandler}
            />
          </div>

          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-receiver_city'
            >
              City
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-receiver_city'
              {...register('receiver_city')}
              placeholder='Enter your city'
              value={receiver_city}
              onChange={changeHandler}
            />
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-receiver_country'
            >
              Country
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-receiver_country'
              {...register('receiver_country')}
              placeholder='Enter your country'
              value={receiver_country}
              onChange={changeHandler}
            />
          </div>
        </div>
      </article>

      {/* CLIENT DETAILS ENDS */}

      <article className='w-full mb-5 border-b-2'>
        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-invoice_number'
            >
              Invoice Number
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='number'
              id='grid-invoice_number'
              {...register('invoice_number', { required: true })}
              placeholder='Enter your invoice number'
              value={invoice_number as number}
              onChange={changeHandler}
            />
          </div>

          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-invoice_date'
            >
              Invoice Date
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='date'
              id='grid-invoice_date'
              {...register('invoice_date', { required: true })}
              placeholder='Enter your invoice date'
              value={invoice_date}
              onChange={changeHandler}
            />
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-due_date'
            >
              Due Date
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='date'
              id='grid-due_date'
              {...register('due_date', { required: true })}
              placeholder='Enter your due date'
              value={due_date}
              onChange={changeHandler}
            />
          </div>
        </div>
      </article>

      <h6 className='text-center font-bold my-5'>INVOICE DETAILS</h6>
      <TableForm
        description={description}
        quantity={quantity as number}
        price={price as number}
        register={register}
        changeHandler={changeHandler}
        errors={errors as any}
      />

      {/* NOTES */}

      <article className='w-full mb-2'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-notes'
            >
              Additional notes
            </label>

            <textarea
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-notes'
              {...register('notes')}
              cols={30}
              rows={10}
              placeholder='Additional notes to the client'
              value={notes}
              onChange={changeHandler}
            />
          </div>
        </div>
      </article>
    </form>
  )
}

export default InvoiceDetailsForm
