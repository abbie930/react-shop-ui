import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    quantity: localStorage.getItem('quantity') ? JSON.parse(localStorage.getItem('quantity')) : 0,
    total: localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1
      state.cartItems.push(action.payload)
      // add toast msg
      toast.success(`${action.payload.title} added to cart`, {
        position: 'bottom-left'
      })
      state.total += action.payload.price * action.payload.quantity
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      localStorage.setItem('quantity', JSON.stringify(state.quantity))
      localStorage.setItem('total', JSON.stringify(state.total))
    },
    setSize: (state, action) => {
      state.size = action.payload
    }
  }
})

export const { addProduct, setSize } = cartSlice.actions
export default cartSlice.reducer