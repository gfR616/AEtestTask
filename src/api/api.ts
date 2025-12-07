import { getBaseUrl } from '@/utils/tools'
import axios from 'axios'

let API_BASE_URL = import.meta.env.VITE_API_BASE_URL

if (!API_BASE_URL) {
  API_BASE_URL = getBaseUrl() + '/api'
}

console.log('API_BASE_URL', API_BASE_URL)
const apiClient = axios.create({
  baseURL: API_BASE_URL,
})

export default apiClient
