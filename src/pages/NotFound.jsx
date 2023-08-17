import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Container = styled.div``

const Content = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  h2 {
    color: #151615;
  }
`

const Button = styled.button`
  width: 100%;
  margin-top: 3rem;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const NotFound = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Content>
        <p>404</p>
        <h2>Oops! Page not found!</h2>
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </Content>
    </Container>
  )
}

export default NotFound
