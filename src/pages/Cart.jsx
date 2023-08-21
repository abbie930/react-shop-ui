import { Delete } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PayButton from '../components/PayButton'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 50px;
  ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: start;
  padding: 20px 0px 0px 10px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  ${mobile({ justifyContent: 'space-between', marginRight: '20px' })}
`

const TopButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) => (props.type === 'filled' ? 'black' : 'transparent')};
  color: ${(props) => props.type === 'filled' && 'white'};
  ${mobile({ marginLeft: '0px' })}
`

const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`

const Info = styled.div`
  flex: 3;
`
const InfoTitleContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

const InfoTitle = styled.div`
  padding: 10px;
  font-weight: 600;
  font-size: ${(props) => props.type === 'title' && '20px'};
  ${mobile({ fontSize: '12px' })}
`

const InfoSubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const InfoHr = styled.hr`
  width: 90%;
  background-color: #d1cfcf;
  border: none;
  height: 1.5px;
`

const CartEmpty = styled.p`
  height: 75%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Note = styled.div`
  margin: 30px 0 30px 10px;
  font-size: 12px;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  //產品之間的間距
  margin: 40px 0px;
  ${mobile({ flexDirection: 'column' })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span`
  margin-bottom: 10px;
`

const ProductId = styled.span`
  margin-bottom: 10px;
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-bottom: 10px;
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* margin-bottom: 20px; */
`

const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100px;
  max-width: 100%;
  border: 0.5px solid rgb(177, 177, 177);
  border-radius: 5px;
`
const ProductQuantity = styled.div`
  font-size: 18px;
  margin: 5px;
  ${mobile({ margin: '15px', fontSize: '20px' })}
`

const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0.2rem 1rem;
  font-size: 16px;
  cursor: pointer;
`

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 200;
  ${mobile({ fontSize: '20px' })};
  /* Add a space after "NTD" */
  &:before {
    content: 'NTD ';
  }
`
const RemoveButton = styled.button`
  border: none;
  outline: none;
  background: none;
  color: gray;
  margin-top: 1rem;
  cursor: pointer;
  text-align: start;

  &:hover {
    color: black;
  }
`

//分線
const Hr = styled.hr`
  width: 90%;
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-top: 40px;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 40px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryNote = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #9f9d9d;
`

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  console.log('cart', cart)
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Shopping Bag</Title>
        <Top>
          <TopButton>
            <CustomLink to="/">CONTINUE SHOPPING</CustomLink>
          </TopButton>
          <TopButton type="filled">
            Clear Cart
            <Delete style={{ fontSize: '16px', paddingLeft: '2px' }} />
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            <InfoTitleContainer>
              <InfoTitle type="title">Item Summary</InfoTitle>
              <InfoSubtitleContainer>
                <InfoTitle>Shopping Bag({cart.quantity})</InfoTitle>
                <InfoTitle>Your Wishlist(0)</InfoTitle>
              </InfoSubtitleContainer>
            </InfoTitleContainer>
            <InfoHr></InfoHr>
            {cart.cartItems.length === 0 ? (
              <CartEmpty>Your cart is currently empty!</CartEmpty>
            ) : (
              <>
                {cart.cartItems.map((product, index) => (
                  <div key={product._id}>
                    <Product>
                      <ProductDetail>
                        <Image src={product.img} alt={product.title} />
                        <Details>
                          <ProductName>
                            <b>Product:</b> {product.title}
                          </ProductName>
                          <ProductId>
                            <b>ID:</b> {product._id}
                          </ProductId>
                          <ProductColor color={product.color} />
                          <ProductSize>
                            <b>Size:</b> {product.size}
                          </ProductSize>
                          <RemoveButton>
                            Remove
                            <Delete style={{ fontSize: '16px', paddingLeft: '1px' }} />
                          </RemoveButton>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductQuantityContainer>
                          <Button>-</Button>
                          <ProductQuantity>{product.quantity}</ProductQuantity>
                          <Button>+</Button>
                        </ProductQuantityContainer>
                        <ProductPrice>{product.price * product.quantity}</ProductPrice>
                      </PriceDetail>
                    </Product>
                    {index < cart.cartItems.length - 1 && <Hr />}
                  </div>
                ))}
                <Hr></Hr>
              </>
            )}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>NTD {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>NTD 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>NTD -80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>NTD {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <PayButton cartItems={cart.products} />
            <SummaryNote>Taxes and shipping calculated at checkout.</SummaryNote>
          </Summary>
        </Bottom>
        <Note>Availability and pricing for items in bag are not guaranteed until checkout is complete</Note>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
