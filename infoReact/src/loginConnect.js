import axios from 'axios'
const baseUrl = 'http://localhost:3004/api'

const login = async newObject => {
  const request = await axios.post(`${baseUrl}/login`, newObject)
  return request.data
}

export const signUp = async data => {
  const request = await axios.post(`${baseUrl}/users`, data);
  return request.data;
}


export default { login, signUp }