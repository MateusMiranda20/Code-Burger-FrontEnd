import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3010'
})

export default apiCodeBurger
