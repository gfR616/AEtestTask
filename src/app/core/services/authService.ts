import axios from 'axios'
import type { User } from '../types/types'

const API_URL = 'http://localhost:3000'

export const authService = {
  async login(username: string, pass: string) {
    const res = await axios.get<User[]>(`${API_URL}/users`, {
      params: { user: username, password: pass },
    })
    if (res.data.length === 0) {
      throw new Error('Неверный логин или пароль')
    }
  },
}
