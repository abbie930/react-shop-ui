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
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  
  // 當滑鼠停在當前元素時，讓 Info 顯現出來
  &:hover ${Info}{
    opacity: 1;
  }
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Image = styled.img`
  height: 75%;
  // in front of the circle
  z-index: 2;
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
      <Circle />
      <Image src={item.img} />
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
