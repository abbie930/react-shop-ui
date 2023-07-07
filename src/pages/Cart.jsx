import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 50px;
  ${mobile({ padding: "10px" })}
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
  ${mobile({ justifyContent: "space-between", marginRight: "20px"})}
`

const TopButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) => (props.type === 'filled' ? 'black' : 'transparent')};
  color: ${(props) => props.type === 'filled' && 'white'};
  ${mobile({ marginLeft: "0px" })}
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
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

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "15px", fontSize: "20px" })}
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: "20px" })}
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

const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Shopping Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <InfoTitleContainer>
              <InfoTitle type="title">Item Summary</InfoTitle>
              <InfoSubtitleContainer>
                <InfoTitle>Shopping Bag(2)</InfoTitle>
                <InfoTitle>Your Wishlist(0)</InfoTitle>
              </InfoSubtitleContainer>
            </InfoTitleContainer>
            <InfoHr></InfoHr>
            <Product>
              <ProductDetail>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> T-shirt
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 9454778901
                  </ProductId>
                  <ProductColor color="orange" />
                  <ProductSize>
                    <b>Size:</b> S
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>NTD 780</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr></Hr>
            <Product>
              <ProductDetail>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> T-shirt
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 9454778901
                  </ProductId>
                  <ProductColor color="orange" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>NTD 390</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr></Hr>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>NTD 1170</SummaryItemPrice>
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
              <SummaryItemPrice>NTD 1170</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
        <Note>Availability and pricing for items in bag are not guaranteed until checkout is complete</Note>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart