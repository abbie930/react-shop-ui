import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from '../responsive'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import { publicRequest } from "../requestMethods"
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const Container = styled.div`
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  /* width: 100%;
  height: 90vh;
  object-fit: cover; */
  ${mobile({ height: "40vh", width: "100%" })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
  font-weight: 200;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor= styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid #f5e5cc;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  // 滑鼠點擊時
  &:hover{
    background-color: #f8f4f4;
  }
`

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/product/find/' + id)
        const productData = res.data

        productData.color = JSON.parse(productData.color)
        productData.size = JSON.parse(productData.size)
        console.log(productData)
        setProduct(productData)
      } catch(err) { 
        console.error(err)
      }
    }
    getProduct()
    // reset scroll position to top when the component mounts or the category changes
    window.scrollTo(0, 0)
  }, [id])

  const handleQuantity = (type) => {
    // 確保數量不會小於 1
    if (type === 'dec' && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (type === 'inc') {
      setQuantity(quantity + 1)
    }
  }

   const handleAddToCart = () => {
    //update cart
    dispatch(addToCart({ ...product, quantity, color, size }))
    navigate('/cart')
   }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>NTD.{product.price}</Price>
          {/* Filter */}
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          {/* ADD */}
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product