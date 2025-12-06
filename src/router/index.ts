import Auth from '@/app/core/auth/auth.vue'
import OrdersList from '@/app/features/orders-list.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: OrdersList },
  { path: '/auth', component: Auth },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
