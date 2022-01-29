import { useState } from 'react'
import { ChangeEventType } from '../helpers/types'

export const useFormValues = <T extends object>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState)

  const changeHandler = (e: ChangeEventType) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return { values, changeHandler }
}
