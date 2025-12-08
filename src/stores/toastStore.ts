import { defineStore } from 'pinia'
import type { Toast, ToastType } from '@/app/core/types/types'

const DEFAULT_LIFETIME_MS = 2000

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as Toast[],
  }),

  actions: {
    addToast(message: string, type: ToastType = 'info') {
      const id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`
      const toast: Toast = { id, message, type }
      this.toasts.push(toast)

      setTimeout(() => {
        this.removeToast(id)
      }, DEFAULT_LIFETIME_MS)
    },

    removeToast(id: string) {
      this.toasts = this.toasts.filter((toast) => toast.id !== id)
    },
  },
})
