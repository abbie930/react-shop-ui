import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWJmMmJjZWY0YzhmOTQ2ZDgwOWUwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTY2NTU0NywiZXhwIjoxNjg5OTI0NzQ3fQ.KqCOEspwZh3vuDSRcqUfBjLCq8x98LzxpaBky87uIqU'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
})