import { getBaseUrl, randomDelay, sleep } from '@/utils/tools'
import axios from 'axios'

let API_BASE_URL = import.meta.env.VITE_API_BASE_URL

if (!API_BASE_URL) {
  API_BASE_URL = getBaseUrl() + '/api'
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
})

//имитируем загрузку
apiClient.interceptors.request.use(
  async (config) => {
    const delay = randomDelay()
    await sleep(delay)

    return config
  },
  (error) => Promise.reject(error),
)

export default apiClient
