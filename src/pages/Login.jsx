import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'
import { Link } from 'react-router-dom'

const Container = styled.div``

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`

const Input = styled.input`
  flex: 1;
  margin: 20px 0px 0px 0px;
  padding: 18px;
  border: 0.5px solid gray;
`

const Button = styled.button`
  /* width: 40%; */
  border: none;
  margin: 20px 0px 20px 0;
  padding: 15px 20px;
  background-color: #f5e5cc;
  cursor: pointer;
  /* display: flex;
  justify-content: center; */
  // if disabled
  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`

const Error = styled.span`
  color: red;
  margin-bottom: 10px;
`

const RegisterButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`
const Or = styled.span`
  display: flex;
  justify-content: center;
`

// Create a custom-styled link button using styled-components
const StyledLinkButton = styled(Link)`
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  padding: 15px 20px;
  margin-top: 20px;
  text-decoration: none;
  color: black;
`
const ForgetLink = styled.a`
  margin: 20px 0px;
  font-size: 14px;
  text-align: end;
  color: gray;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <LoginContainer>
        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <ForgetLink>Forgot password?</ForgetLink>
            <Button onClick={handleClick} disabled={isFetching}>
              SIGN IN
            </Button>
            {error && <Error>Something went wrong...</Error>}
            <RegisterButton>
              <Or>Don’t have an account?</Or>
              <StyledLinkButton to="/register">Create a new account</StyledLinkButton>
            </RegisterButton>
          </Form>
        </Wrapper>
      </LoginContainer>
    </Container>
  )
}

export default Login
