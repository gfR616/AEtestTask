<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
  router.push('/auth')
}
</script>

<template>
  <div class="nav-panel">
    <div class="nav-buttons-container">
      <span class="nav-button">Все заказы</span>
      <span class="nav-button">Добавить заказ</span>
    </div>
    <div class="user-info">
      <span>{{ authStore.user?.name }}</span>
      <button @click="handleLogout" class="exit-button">Выход</button>
    </div>
  </div>
</template>

<style>
.nav-panel {
  width: auto;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--nav-bar-color);
  padding: 0 15px 0 15px;
}

.nav-buttons-container {
  margin-left: 7px;
  display: flex;
  gap: 38px;
}

.nav-button {
  color: var(--secondary-color);
  cursor: pointer;
}

.user-info {
  display: flex;
  gap: 28px;
}

.exit-button {
  width: 78px;
  height: 27px;
}
</style>
