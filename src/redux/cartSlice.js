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
    },
    decreaseCart: (state, action) => {
      // 查找要減少數量的商品在購物車中的索引
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem._id === action.payload._id)
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
        } else {
          // 從購物車中刪除商品，並更新總價和購物車數量
          state.cartTotal -= action.payload.price
          state.cartQuantity -= 1
          // removed msg
          toast.error(`${action.payload.title} removed from cart`, {
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
    },
    increaseCart: (state, action) => {
      // 查找要增加数量的商品在购物车中的索引
      const itemIndex = state.cartItems.findIndex((cartItem) => cartItem._id === action.payload._id)

      // 如果找到了该商品
      if (itemIndex !== -1) {
        // 创建一个新的商品对象，避免直接修改原始状态
        const updatedCartItem = { ...state.cartItems[itemIndex] }

        // 增加数量并更新总价
        updatedCartItem.quantity += 1
        state.cartTotal += action.payload.price

        // 显示信息
        toast.info(`Increased ${action.payload.title} cart quantity`, {
          position: 'bottom-left'
        })

        // 创建一个新的购物车商品数组，用于更新状态
        const updatedCartItems = [...state.cartItems]
        updatedCartItems[itemIndex] = updatedCartItem

        // 更新状态
        state.cartItems = updatedCartItems

        // 更新本地存储
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        localStorage.setItem('cartQuantity', JSON.stringify(state.cartQuantity))
        localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal))
      }
    }
  }
})

export const { addProduct, setSize, removeFromCart, decreaseCart, increaseCart } = cartSlice.actions
export default cartSlice.reducer
