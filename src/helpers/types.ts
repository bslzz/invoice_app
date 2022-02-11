import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react'

export interface IFormValues {
  sender_firstName: string
  sender_lastName: string
  sender_address: string
  sender_postCode: number
  sender_city: string
  sender_country: string
  sender_companyName: string
  email: string
  phone: number | null
  bank: string
  account_number: string
  website: string
  receiver_firstName: string
  receiver_lastName: string
  receiver_address: string
  receiver_postCode: number
  receiver_city: string
  receiver_country: string
  invoice_number: number | null
  invoice_date: string
  due_date: string
  notes: string
  description: string
  quantity: number | null
  price: number | null
  customerType: 'person' | 'company'
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
  editTableLists: Ilists
  edit: boolean
}

export type ChangeEventType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>

export type MouseEventType = MouseEvent<HTMLButtonElement>

export interface ISetShow {
  setShowInvoice: React.Dispatch<React.SetStateAction<boolean>>
}
