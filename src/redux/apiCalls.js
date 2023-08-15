import { publicRequest } from "../requestMethods"
import { loginFailure, loginStart, loginSuccess } from "./userSlice"

export const loginAuth = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure(err.response.data.message))
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
    throw new Error(error.response.data.message)
  }
}