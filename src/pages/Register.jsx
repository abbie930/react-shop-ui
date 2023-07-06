import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import styled from 'styled-components'

const Container = styled.div`
  /* width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)); */
  /* url('https://media.istockphoto.com/id/1345642317/photo/cardboard-boxes-with-isolated-white-screen-smartphone-with-living-room-sofa-furniture-and.jpg?s=612x612&w=0&k=20&c=j7bgXtc2CaoaUtt0Fs3c_8MjW9QN7Bb38BemOHLTyYs='); */
  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */
`

const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
`

const Desc = styled.h3`
  font-weight: 300;
  margin-top: 20px;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

const Input = styled.input`
  flex: 1;
  width: 95%;
  margin: 20px 0px 0px 0px;
  padding: 15px;
  border: 0.5px solid gray;
`

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #f5e5cc;
  cursor: pointer;
`


const Register = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <RegisterContainer>
        <Wrapper>
          <Title>New Account</Title>
          <Desc>Create a new YC Selected account and get 10% discount for your first purchase.</Desc>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal data in accordance with the{' '}
              <b>PRIVACY POLICY</b>.
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </RegisterContainer>
    </Container>
  )
}

export default Register
