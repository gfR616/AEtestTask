import { authService } from '@/app/core/services/authService'
import { type AuthState, type User } from '@/app/core/types/types'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => {
    const storedUser = localStorage.getItem('user')
    let user: User | null = null

    if (storedUser) {
      try {
        user = JSON.parse(storedUser)
      } catch {
        user = null
      }
    }

    return {
      user,
      loading: false,
      error: null,
    }
  },

  actions: {
    async login(username: string, password: string) {
      this.loading = true
      this.error = null

      try {
        const user = await authService.login(username, password)
        this.user = user.data[0] ?? null
        if (this.user) {
          localStorage.setItem('user', JSON.stringify(user))
        }
      } catch (e: any) {
        this.error = e.message || 'Ошибка авторизации'
        this.loading = false
        throw e
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
  },
})
