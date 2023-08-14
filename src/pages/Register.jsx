import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import styled from 'styled-components'
import { mobile } from '../responsive'
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerAuth } from '../requestMethods'
import Swal from 'sweetalert2'

const Container = styled.div``

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

const Desc = styled.h3`
  font-weight: 300;
  margin-top: 20px;
  text-align: center;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin-top: 10px;
`

const Input = styled.input`
  flex: 1;
  margin: 20px 0px 0px 0px;
  padding: 15px;
  border: 0.5px solid gray;
`

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`

const Button = styled.button`
  /* width: 40%; */
  border: none;
  padding: 15px 20px;
  background-color: #f5e5cc;
  cursor: pointer;
  text-align: center;
  padding: 15px 20px;
  margin-top: 20px;
  text-decoration: none;
  color: black;
`

const LoginButton = styled.div`
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

const FormAlert = styled.p`
  /* color: light-white-text;
  font-size: rem10; */

  &.form__alert--error {
    font-size: 10px;
    color: red;
    margin-top: 5px;
  }

  /* &.form__alert--success {
    font-size: 10px;
    color: green;
  } */
`

const Register = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username cannot less than 3 words')
      .max(10, 'Username cannot over 10 words')
      .required('Please provide username'),
    email: yup
      .string()
      .email('Wrong email format')
      .required('Please provide email'),
    password: yup
      .string()
      .matches(/^\S*$/, 'Whitespace is not allowed')
      .min(8, 'Password cannot less than 8 words')
      .max(20, 'Password cannot over 20 words')
      .required('Please provide password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
  })

  // 顯示 error message, 並在 5 秒之後清空
  useEffect(() => {
    setTimeout(() => {
      setErrorMsg('')
    }, 5000)
  }, [errorMsg])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const registerUser = async (data) => {
    try {
      console.log('data', data)
      const regData = await registerAuth(data)
      if (regData.status === 201) {
        Swal.fire({
          title: 'Sign up success!',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
          position: 'center'
        })
        navigate('/login')
      }
    } catch (error) {
      // 分割字符串將字串分行
      const errorMsg = error.message.replace(/\./g, '.<br>')
      Swal.fire({
        title: 'Sing up failed!',
        icon: 'error',
        html: `<p>${errorMsg}</p>`,
        showConfirmButton: true,
        timer: 5000,
        position: 'center'
      })
    }
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <RegisterContainer>
        <Wrapper>
          <Title>New Account</Title>
          <Desc>Create a new YC Selected account and get 10% discount for your first purchase.</Desc>
          <Form onSubmit={handleSubmit(registerUser)}>
            <Input type="text" name="username" placeholder="username" {...register('username')} />
            <FormAlert className="form__alert form__alert--error">{errors?.username?.message}</FormAlert>
            <Input type="text" name="email" placeholder="example@example.com" {...register('email')} />
            <FormAlert className="form__alert form__alert--error">{errors?.email?.message}</FormAlert>
            <Input type="password" name="password" placeholder="password" {...register('password')} />
            <FormAlert className="form__alert form__alert--error">{errors?.password?.message}</FormAlert>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              {...register('confirmPassword')}
            />
            <FormAlert className="form__alert form__alert--error">{errors?.confirmPassword?.message}</FormAlert>
            <Agreement>
              By creating an account, I consent to the processing of my personal data in accordance with the{' '}
              <b>PRIVACY POLICY</b>.
            </Agreement>
            <Button>CREATE</Button>
            <LoginButton>
              <Or>Have an account?</Or>
              <StyledLinkButton to="/login">Login here</StyledLinkButton>
            </LoginButton>
          </Form>
        </Wrapper>
      </RegisterContainer>
    </Container>
  )
}

export default Register
