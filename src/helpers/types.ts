import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react'

export interface IFormValues {
  name: string
  address: string
  email: string
  phone: number | null
  bank: string
  account_number: string
  website: string
  client_name: string
  client_address: string
  invoice_number: number | null
  invoice_date: string
  due_date: string
  notes: string
  description: string
  quantity: number | null
  price: number | null
}

export interface Ilists {
  id: string
  description: string
  quantity: number
  price: number
  amount: number | null
}

export interface IInitialState {
  data: IFormValues
  totalAmount: number | null
  tableLists: Ilists[]
  totalSum: number | null
  showTableActions: boolean
}

export type ChangeEventType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>

export type MouseEventType = MouseEvent<HTMLButtonElement>

export interface ISetShow {
  setShowInvoice: React.Dispatch<React.SetStateAction<boolean>>
}
