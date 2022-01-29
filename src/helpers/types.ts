import { ChangeEvent, MouseEvent } from 'react'

export interface IInvoiceInfo {
  name: string
  address: string
  email: string
  phone: number
  bank: string
  account_number: string
  website: string
  client_name: string
  client_address: string
  invoice_number: number
  invoice_date: string
  due_date: string
  notes: string
  description: string
  quantity: number
  price: number
}

export interface IProps {
  name: string
  address: string
}

export interface IDates {
  invoice_number: number
  invoice_date: string
  due_date: string
}

export type ChangeEventType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>

export type MouseEventType = MouseEvent<HTMLButtonElement>
