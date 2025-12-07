import apiClient from '@/api/api'
import { type NewOrderPayload, type Order } from '../types/types'

export const ordersService = {
  async getOrders() {
    const res = await apiClient.get<Order[]>('/events')
    return res.data
  },

  async addNewOrder(orderData: NewOrderPayload): Promise<Order> {
    const res = await apiClient.post<Order, any, NewOrderPayload>('/events', orderData)
    return res.data
  },
}
