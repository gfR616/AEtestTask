import { ordersService } from '@/app/core/services/ordersService'
import type { OrdersState, Order, NewOrderPayload } from '@/app/core/types/types'
import { defineStore } from 'pinia'
import { useToastStore } from './toastStore'

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

    async createOrder(orderPayload: NewOrderPayload): Promise<void> {
      this.isLoading = true
      this.error = null
      const toastStore = useToastStore()

      try {
        const newOrder = await ordersService.addNewOrder(orderPayload)
        this.orders.push(newOrder)
        toastStore.addToast('Заказ добавлен', 'success')
      } catch (error) {
        this.error = 'Ошибка при добавлении заказа: ' + (error as Error).message
        throw error
      } finally {
        this.isLoading = false
      }
    },

    async getOrderById(id: string) {
      this.isLoading = true
      this.error = null
      const toastStore = useToastStore()
      try {
        const freshOrderData = await ordersService.getOrderById(id)
        const index = this.orders.findIndex((order) => order.id === id)
        if (index !== -1) {
          this.orders[index] = freshOrderData
          toastStore.addToast('Данные заказа обновлены', 'success')
        }
      } catch (error) {
        this.error = 'Ошибка при получении заказа: ' + (error as Error).message
        throw error
      } finally {
        this.isLoading = false
      }
    },

    async deleteOrder(id: string) {
      this.isLoading = true
      this.error = null
      const toastStore = useToastStore()

      try {
        await ordersService.deleteOrder(id)
        this.orders = this.orders.filter((order) => order.id !== id)
        toastStore.addToast('Заказ удален', 'success')
      } catch (error) {
        this.error = 'Ошибка при удалении заказа: ' + (error as Error).message
        throw error
      } finally {
        this.isLoading = false
      }
    },
  },
})
