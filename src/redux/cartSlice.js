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
    addToCart: (state, action) => {
      console.log('action.payload', action.payload)

      const itemIdentifier = `${action.payload._id}-${action.payload.size}-${action.payload.color}`

      const existingItem = state.cartItems.find((cartItem) => cartItem.identifier === itemIdentifier)

      if (existingItem) {
        // 如果商品已經在購物車裡，數量直接增加指定的數量
        existingItem.quantity += action.payload.quantity
        state.cartTotal += action.payload.price * action.payload.quantity
        toast.success(`Increased ${action.payload.title} cart quantity`, {
          position: 'bottom-left'
        })
      } else {
        // 如果商品不存在購物車裡，就加到購物車
        state.cartItems.push({ ...action.payload, identifier: itemIdentifier })
        state.cartQuantity += 1
        state.cartTotal += action.payload.price * action.payload.quantity
        toast.success(`${action.payload.title} added to cart`, {
          position: 'bottom-left'
        })
      }
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
      state.cartTotal -= action.payload.price * action.payload.quantity

      // delete msg
      toast.error(`${action.payload.title} removed from cart`, {
        position: 'bottom-left'
      })

      // update local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      localStorage.setItem('cartQuantity', JSON.stringify(state.cartQuantity))
      localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal))
    },
    decreaseCart: (state, action) => {
      // 查找要減少數量的商品在購物車中的索引
      const itemIdentifier = `${action.payload._id}-${action.payload.size}-${action.payload.color}`
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.identifier === itemIdentifier)
      // 如果找到了商品
      if (itemIndex !== -1) {
        // 新增一個新的商品變數，避免直接修改原始狀態
        const updatedCartItem = { ...state.cartItems[itemIndex] }

        // 如果商品數量大於 1，減少數量並更新價錢
        if (updatedCartItem.quantity > 1) {
          updatedCartItem.quantity -= 1
          state.cartTotal -= action.payload.price
          // decreased msg
          toast.info(`Decreased ${action.payload.title} cart quantity`, {
            position: 'bottom-left'
          })
        }

        // 新增一個新的購物車商品變數，用於更新狀態
        const updatedCartItems = [...state.cartItems]
        updatedCartItems[itemIndex] = updatedCartItem

        // 更新狀態
        state.cartItems = updatedCartItems

        // update local storage
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        localStorage.setItem('cartQuantity', JSON.stringify(state.cartQuantity))
        localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal))
      }
      // 更新購物車圖示上的數量，確保不會出現負數
      if (state.cartQuantity < 0) {
        state.cartQuantity = 0
      }
    },
    increaseCart: (state, action) => {
      const itemIdentifier = `${action.payload._id}-${action.payload.size}-${action.payload.color}`
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.identifier === itemIdentifier)

      if (itemIndex !== -1) {
        const updatedCartItem = { ...state.cartItems[itemIndex] }

        updatedCartItem.quantity += 1
        state.cartTotal += action.payload.price

        // Increased msg
        toast.info(`Increased ${action.payload.title} cart quantity`, {
          position: 'bottom-left'
        })

        const updatedCartItems = [...state.cartItems]
        updatedCartItems[itemIndex] = updatedCartItem

        state.cartItems = updatedCartItems

        // update localStorage
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        localStorage.setItem('cartQuantity', JSON.stringify(state.cartQuantity))
        localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal))
      }
    },
    clearCart: (state, action) => {
      state.cartItems = []
      toast.error(`Cart cleared`, {
        position: 'bottom-left'
      })
      // update localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      localStorage.setItem('cartQuantity', JSON.stringify(state.cartQuantity))
      localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal))
    }
  }
})

export const { addToCart, setSize, removeFromCart, decreaseCart, increaseCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
