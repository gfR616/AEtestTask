import { ordersService } from '@/app/core/services/ordersService'
import type { OrdersState, Order } from '@/app/core/types/types'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: (): OrdersState => {
    return {
      orders: [],
      isLoading: false,
      error: null,
    }
  },

  actions: {
    async fetchOrders() {
      this.isLoading = true
      this.error = null

      try {
        const data = await ordersService.getOrders()
        this.orders = data
      } catch (e: any) {
        this.error = 'Не удалось загрузить заказы: ' + e.message
        console.error(e)
      } finally {
        this.isLoading = false
      }
    },
  },
})
