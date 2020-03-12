import axios from 'axios'
const baseUrl = 'http://localhost:3004/api/infos'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  }
  const request = await axios.get(baseUrl,config)
  return request.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const request = await axios.post(baseUrl, newObject,config)
  return request.data
}


const poista = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = await axios.delete(`${baseUrl}/${id}`,config)
  return request.data
}

export default { getAll, create , poista, setToken}