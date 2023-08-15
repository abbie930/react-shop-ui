import axios from 'axios'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`


const PayButton = ({ cartItems }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL
  const user = useSelector((state) => state.auth)
  console.log('user', user)
  const handleCheckout = () => {
    console.log('cartItems', cartItems)
    axios
      .post(`${BASE_URL}stripe/checkout`, {
        cartItems,
        // userId: user._id
      })
      .then((response) => {
        console.log(response)
        if (response.data.url) {
          window.location.href = response.data.url
        }
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <>
      <Button onClick={() => handleCheckout()}>CHECKOUT NOW</Button>
    </>
  )
}

export default PayButton
