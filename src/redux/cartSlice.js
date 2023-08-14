import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
      state.size = action.payload
    },
    setSize: (state, action) => {
      state.size = action.payload
    }
  }
})

export const { addProduct, setSize } = cartSlice.actions
export default cartSlice.reducer