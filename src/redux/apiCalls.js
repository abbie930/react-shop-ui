import { publicRequest } from "../requestMethods"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}

export const registerAuth = async (data) => {
  try {
    const response = await publicRequest.post(`/auth/register`, {
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