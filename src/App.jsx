import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  const user = true //dummy data
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          {/* if there is loggedIn user, be redirected to home page */}
          {user ? <Redirect to="/" /> : <Login />}
          <Login />
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
