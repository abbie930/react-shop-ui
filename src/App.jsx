import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:category/" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}></Route>
      </Routes>
    </Router>
  )
}

export default App
