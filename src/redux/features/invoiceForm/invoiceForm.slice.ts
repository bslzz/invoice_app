import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from '@reduxjs/toolkit/node_modules/immer/dist/internal'
import { IFormValues, IInitialState } from '../../../helpers/types'

const initialState: IInitialState = {
  data: {} as IFormValues
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
    }
  }
})

// Action creators are generated for each case reducer function
export const { invoiceFormValues } = invoiceSlice.actions

export default invoiceSlice.reducer
