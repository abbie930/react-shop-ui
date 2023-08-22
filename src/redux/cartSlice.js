import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartQuantity: localStorage.getItem('cartQuantity') ? JSON.parse(localStorage.getItem('cartQuantity')) : 0,
    cartTotal: localStorage.getItem('cartTotal') ? JSON.parse(localStorage.getItem('cartTotal')) : 0
  },
  reducers: {
    addProduct: (state, action) => {
      console.log('action.payload', action.payload)
      state.cartQuantity += 1
      state.cartItems.push(action.payload)
      state.cartTotal += action.payload.price * action.payload.quantity

      // add toast msg
      toast.success(`${action.payload.title} added to cart`, {
        position: 'bottom-left'
      })

      // update local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      localStorage.setItem('cartQuantity', JSON.stringify(state.cartQuantity))
      localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal))
    },
    setSize: (state, action) => {
      state.size = action.payload
    },
    removeFromCart: (state, action) => {
      // assuming action.payload is the complete item object
      const removedItem = action.payload
      const nextCartItems = state.cartItems.filter((cartItem) => {
        // compare ID, size, and color
        return (
          cartItem._id !== removedItem._id || cartItem.size !== removedItem.size || cartItem.color !== removedItem.color
        )
      })
      console.log('nextCart', nextCartItems)
      state.cartItems = nextCartItems
      state.cartQuantity -= 1
      state.cartTotal -= action.payload.price

      // delete msg
      toast.error(`${action.payload.title} removed from cart`, {
        position: 'bottom-left'
      })

      // update local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      localStorage.setItem('cartQuantity', JSON.stringify(state.cartQuantity))
      localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal))
    }
  }
})

export const { addProduct, setSize, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
