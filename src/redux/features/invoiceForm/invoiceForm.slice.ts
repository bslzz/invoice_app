import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from '@reduxjs/toolkit/node_modules/immer/dist/internal'
import { IFormValues, IInitialState, Ilists } from '../../../helpers/types'

const initialState: IInitialState = {
  data: {} as IFormValues,
  totalAmount: null,
  tableLists: [],
  totalSum: null,
  editTableLists: {} as Ilists,
  edit: false
}

export const invoiceSlice = createSlice({
  name: 'invoiceForm',
  initialState,
  reducers: {
    invoiceFormValues: (
      state: WritableDraft<IInitialState>,
      action: PayloadAction<IFormValues>
    ) => {
      state.data = action.payload
      state.edit = false
    },
    totalAmount: (
      state: WritableDraft<IInitialState>,
      action: PayloadAction<number>
    ) => {
      state.totalAmount = action.payload
    },
    tableLists: (
      state: WritableDraft<IInitialState>,
      action: PayloadAction<Ilists[]>
    ) => {
      state.tableLists = [...action.payload]
      state.edit = false
    },

    editTableLists: (
      state: WritableDraft<IInitialState>,
      action: PayloadAction<Ilists>
    ) => {
      state.editTableLists = action.payload
      state.edit = true
    },
    totalSum: (
      state: WritableDraft<IInitialState>,
      action: PayloadAction<number>
    ) => {
      state.totalSum = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  invoiceFormValues,
  totalAmount,
  tableLists,
  editTableLists,
  totalSum
} = invoiceSlice.actions

export default invoiceSlice.reducer
