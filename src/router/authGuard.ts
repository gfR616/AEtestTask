import type { Pinia } from 'pinia'
import type { Router } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

export function setupRouterGuards(router: Router, pinia: Pinia) {
  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore(pinia)
    const isAuthenticated = !!authStore.user

    if (to.path === '/auth' && isAuthenticated) {
      return next('/orders')
    }

    if (to.path !== '/auth' && !isAuthenticated) {
      return next('/auth')
    }

    next()
  })
}
