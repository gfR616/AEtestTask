import type { User } from '../types/types'
import apiClient from '@/api/api'

//Да, мне известно, что в ТЗ указан POST запрос,
//но мы работаем с JSON-сервером,
//POST он использует для добавления данных. Поэтому GET
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
