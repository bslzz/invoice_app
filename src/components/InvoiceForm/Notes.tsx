import { useAppSelector } from '../../redux/hooks'

const Notes = () => {
  const { notes } = useAppSelector((state) => state.invoiceForm.data)
  return (
    <section className='mt-10 mb-5'>
      {/* Textarea */}
      <p className='lg:w-1/2 text-justify'>{notes}</p>
    </section>
  )
}

export default Notes
