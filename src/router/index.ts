import Auth from '@/app/core/auth/auth.vue'
import OrdersList from '@/app/features/orders-list.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupRouterGuards } from './authGuard'

const routes = [
  { path: '/', redirect: '/orders' },
  { path: '/orders', component: OrdersList },
  { path: '/auth', component: Auth, meta: { hideNav: true } },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

setupRouterGuards(router)

export default router
