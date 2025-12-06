import type { Router } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

export function setupRouterGuards(router: Router) {
  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
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
