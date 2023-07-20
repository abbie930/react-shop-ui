import { Badge } from '@material-ui/core'
import { AccountCircleOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  position: relative;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: '5px' })}
  width: ${(props) => (props.expanded ? '200px' : '150px')};
  overflow: hidden; /* 隱藏溢出内容 */
  transition: width 0.3s ease; /* 添加過渡效果 */
`

const Input = styled.input`
  border: none;
  outline: none;
  width: ${(props) => (props.expanded ? '200px' : '130px')};
  transition: all 0.3s ease;
  ${mobile({ width: '40px' })}
`

/* Position the search icon fixed in the container */
const SearchIconContainer = styled.div`
  position: absolute;
  right: 5px;
  display: flex;
  align-items: center;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  color: #464242;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity)

  // 更新expanded狀態
  const [expanded, setExpanded] = useState(false)
  // 存儲搜尋的DOM元素，在後續檢查點擊事件是否發生在搜尋欄之外
  const searchContainerRef = useRef(null)
  // 當搜尋欄被點擊時，將expanded狀態設為true，然後展開搜尋欄
  const handleSearchClick = () => {
    setExpanded(true)
  }

  // Collapse the search bar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
    // 僅在組件初次渲染時執行一次
  }, [])

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>YC.Selected</Logo>
        </Left>
        <Center></Center>
        <Right>
          <SearchContainer expanded={expanded} onClick={handleSearchClick} ref={searchContainerRef}>
            <Input expanded={expanded} placeholder="Search" />
            <SearchIconContainer>
              <Search style={{ color: 'gray', fontSize: 16 }} />
            </SearchIconContainer>
          </SearchContainer>
          <Link to="/login">
            <MenuItem>
              <AccountCircleOutlined />
            </MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge overlap="rectangular" badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
