import apiClient from '@/api/api'
import { type Order } from '../types/types'

export const ordersService = {
  async getOrders() {
    const res = await apiClient.get<Order[]>('/events')

    return res.data
  },
}
