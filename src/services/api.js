import axios from 'axios'

const API = axios.create({
  baseURL: 'https://frontend-intern-challenge-api.iurykrieger.now.sh/',
})

export default API
