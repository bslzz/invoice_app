import { useEffect, useState } from 'react'
import { ChangeEventType, IFormValues } from '../helpers/types'
import { invoiceFormValues } from '../redux/features/invoiceForm/invoiceForm.slice'
import { useAppDispatch } from '../redux/hooks'

export const useFormValues = <T extends object>(initialState: T) => {
  const dispatch = useAppDispatch()
  const [values, setValues] = useState<T>(initialState)

  const changeHandler = (e: ChangeEventType) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  console.log('values', values)

  useEffect(() => {
    dispatch(invoiceFormValues(values as IFormValues))
  }, [dispatch, values])

  return { values, changeHandler }
}
