import { FC, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IFormValues } from '../../helpers/types'
import {
  invoiceFormValues,
  showTableActions,
  totalAmount
} from '../../redux/features/invoiceForm/invoiceForm.slice'
import { useAppDispatch } from '../../redux/hooks'
import { useFormValues } from '../../utils/useFormHooks'
import TableForm from './TableForm'

const InvoiceDetailsForm: FC = () => {
  const { values, changeHandler } = useFormValues<IFormValues>(
    {} as IFormValues
  )

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
    notes,
    description,
    quantity,
    price
  }: IFormValues = values

  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>()

  useEffect(() => {
    dispatch(totalAmount((quantity as number) * (price as number)))
  }, [quantity, price, dispatch])

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    if (data) {
      dispatch(invoiceFormValues(data))
      // setShowInvoice(true)
      dispatch(showTableActions(false))
    }
  }

  return (
    <form
      className='flex flex-col justify-center bg-white p-5 rounded shadow-xl'
      onSubmit={handleSubmit(onSubmit)}
    >
      <article className='md:grid grid-cols-2 gap-10'>
        <div className='flex flex-col'>
          <label htmlFor='name'>Enter your name</label>
          {errors.name && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='text'
            {...register('name', { required: true })}
            placeholder='Enter your name'
            value={name}
            onChange={changeHandler}
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='address'>Enter your address</label>
          {errors.address && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='text'
            {...register('address', { required: true })}
            placeholder='Enter your address'
            value={address}
            onChange={changeHandler}
          />
        </div>
      </article>

      <article className='md:grid grid-cols-3 gap-10'>
        <div className='flex flex-col'>
          <label htmlFor='email'>Enter your email</label>
          {errors.email && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='email'
            {...register('email', { required: true })}
            placeholder='Enter your email'
            value={email}
            onChange={changeHandler}
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='website'>Enter your website</label>
          {errors.website && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='url'
            {...register('website')}
            placeholder='Enter your website'
            value={website}
            onChange={changeHandler}
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='phone'>Enter your phone</label>
          {errors.phone && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='number'
            {...register('phone', { required: true })}
            placeholder='Enter your phone number'
            value={phone as number}
            onChange={changeHandler}
          />
        </div>
      </article>

      <article className='md:grid grid-cols-2 gap-10'>
        <div className='flex flex-col'>
          <label htmlFor='bank'>Enter your bank</label>
          {errors.bank && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='text'
            {...register('bank', { required: true })}
            placeholder='Enter your bank name'
            value={bank}
            onChange={changeHandler}
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='account_number'>Enter your account number</label>
          {errors.account_number && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='text'
            {...register('account_number', { required: true })}
            placeholder='Enter your account_number'
            value={account_number}
            onChange={changeHandler}
          />
        </div>
      </article>

      <article className='md:grid grid-cols-2 gap-10 md:mt-20'>
        <div className='flex flex-col'>
          <label htmlFor='client_name'>Enter your client name</label>
          {errors.client_name && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='text'
            {...register('client_name', { required: true })}
            placeholder='Enter your client name'
            value={client_name}
            onChange={changeHandler}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='client_address'>Enter your client address</label>
          {errors.client_address && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='text'
            {...register('client_address', { required: true })}
            placeholder='Enter your client address'
            value={client_address}
            onChange={changeHandler}
          />
        </div>
      </article>

      <article className='md:grid grid-cols-3 gap-10'>
        <div className='flex flex-col'>
          <label htmlFor='invoice_number'>Invoice number</label>
          {errors.invoice_number && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='number'
            {...register('invoice_number', { required: true })}
            placeholder='Enter your invoice number'
            value={invoice_number as number}
            onChange={changeHandler}
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='invoice_date'>Invoice date</label>
          {errors.address && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='date'
            {...register('invoice_date', { required: true })}
            placeholder='Enter invoice date'
            value={invoice_date}
            onChange={changeHandler}
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='due_date'>Due date</label>
          {errors.due_date && (
            <span className='text-red-600 text-xs italic'>*required</span>
          )}
          <input
            type='date'
            {...register('due_date', { required: true })}
            placeholder='Enter due date'
            value={due_date}
            onChange={changeHandler}
          />
        </div>
      </article>

      <TableForm
        description={description}
        quantity={quantity as number}
        price={price as number}
        register={register}
        changeHandler={changeHandler}
        errors={errors as any}
      />

      <label htmlFor='notes'>Additional notes</label>
      {errors.notes && (
        <span className='text-red-600 text-xs italic'>*required</span>
      )}
      <textarea
        {...register('notes', { required: true })}
        cols={30}
        rows={10}
        placeholder='Additional notes to the client'
        value={notes}
        onChange={changeHandler}
      />

      <button
        className='bg-blue-500 text-white font-bold py-2 px-8 rounded-shadow border-2 border-blue-500 rounded hover:bg-transparent hover:text-blue-500 transition-all duration-300'
        type='submit'
      >
        Preview Invoice
      </button>
    </form>
  )
}

export default InvoiceDetailsForm
