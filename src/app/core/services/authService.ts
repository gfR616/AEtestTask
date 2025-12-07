import type { User } from '../types/types'
import apiClient from '@/api/api'

export const authService = {
  async login(username: string, pass: string) {
    const res = await apiClient.get<User[]>('/users', {
      params: { user: username, password: pass },
    })
    if (res.data.length === 0) {
      throw new Error('Неверный логин или пароль')
    }
    return res.data
  },
}
