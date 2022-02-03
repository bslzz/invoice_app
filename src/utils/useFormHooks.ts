import { useEffect, useState } from 'react'
import { ChangeEventType } from '../helpers/types'
import { invoiceFormValues } from '../redux/features/invoiceForm/invoiceForm.slice'
import { useAppDispatch } from '../redux/hooks'

export const useFormValues = <T extends object>(initialState: T) => {
  const dispatch = useAppDispatch()
  const [values, setValues] = useState<any>(initialState)

  const changeHandler = (e: ChangeEventType) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  useEffect(() => {
    dispatch(invoiceFormValues(values))
  }, [dispatch, values])

  return { values, changeHandler }
}
