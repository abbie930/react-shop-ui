import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Info = styled.div`
  // 透明度
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  // in front of the image
  z-index: 3;
  // icons 置中
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5 ease;
  cursor: pointer;
`
const Container = styled.div`
  flex:1;
  margin: 5px;
  min-width: 250px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: relative;
  
  
  // 當滑鼠停在當前元素時，讓 Info 顯現出來
  &:hover ${Info}{
    opacity: 1;
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  // 位於容器的頂部
  position: absolute;
  top: 0;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`

const ProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Title = styled.span`
  margin-bottom: 5px;
`

const Price = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  // icons 置中
  display: flex;
  align-items: center;
  justify-content: center;
  // icon間距
  margin: 10px;
  // 狀態變化過程中的動畫過渡效果
  transition: all 0.5s ease;

  //當滑鼠懸停時
  &:hover {
    // 改變背景顏色
    background-color: #e9f5f5;
    // 放大的動畫效果
    transform: scale(1.1);
  }
`



const Product = ({item}) => {
  return (
    <Container>
      <ProductInfo>
        <Image src={item.img} />
        <ProductTitle>
          <Title>{item.title}</Title>
          <Price>NTD {item.price}</Price>
        </ProductTitle>
      </ProductInfo>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
