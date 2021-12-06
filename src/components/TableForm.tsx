const TableForm = ({
  description,
  quantity,
  price,
  amount,
  invoiceInfoChangeHandler
}: any) => {
  return (
    <>
      <article className='md:mt-16'>
        <div className='flex flex-col'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={description}
            onChange={invoiceInfoChangeHandler}
          />
        </div>
      </article>
      <article className='md:grid grid-cols-3 gap-10 '>
        <div className='flex flex-col'>
          <label htmlFor='quantity'>Quantity</label>
          <input
            type='number'
            name='quantity'
            placeholder='Quantity'
            value={quantity}
            onChange={invoiceInfoChangeHandler}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='number'>Price</label>
          <input
            type='number'
            name='price'
            placeholder='Price'
            value={price}
            onChange={invoiceInfoChangeHandler}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            name='amount'
            placeholder='Amount'
            value={amount}
            disabled
          />
        </div>
      </article>
    </>
  )
}

export default TableForm
