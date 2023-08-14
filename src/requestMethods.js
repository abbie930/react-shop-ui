import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
const TOKEN = process.env.REACT_APP_TOKEN

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
})


export const registerAuth = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/register`, {
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    })
    if (response.status === 201) {
      return response
    }
  } catch (error) {
    console.log(error)
    throw new Error(error.response.data.message)
  }
}