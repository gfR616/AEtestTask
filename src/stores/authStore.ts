import { authService } from '@/app/core/services/authService'
import { type AuthState } from '@/app/core/types/types'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => {
    const storedUser = localStorage.getItem('user')
    return {
      user: storedUser ? JSON.parse(storedUser)[0] : null,
      isLoading: false,
      error: null,
    }
  },

  actions: {
    async login(username: string, password: string) {
      this.isLoading = true
      this.error = null

      try {
        const user = await authService.login(username, password)
        this.user = user[0] ?? null
        if (this.user) {
          localStorage.setItem('user', JSON.stringify(user))
        }
      } catch (e: any) {
        this.error = e.message ?? 'Ошибка авторизации'
        throw e
      } finally {
        this.isLoading = false
      }
    },

    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
  },
})
