<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import addOrderModal from '../features/add-order-modal.vue'
import { ref } from 'vue'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
  router.push('/auth')
}

const showAddOrderModal = ref(false)

const openModal = () => {
  showAddOrderModal.value = true
}

const closeModal = () => {
  showAddOrderModal.value = false
}
</script>

<template>
  <div class="nav-panel">
    <div class="nav-buttons-container">
      <span class="nav-button" @click="closeModal">Все заказы</span>
      <span class="nav-button" @click="openModal">Добавить заказ</span>
    </div>
    <div class="user-info">
      <span>{{ authStore.user?.name }}</span>
      <button @click="handleLogout" class="exit-button">Выход</button>
    </div>
  </div>

  <addOrderModal :isVisible="showAddOrderModal" @close="closeModal" />
</template>

<style>
.nav-panel {
  position: fixed;
  width: 100%;
  height: var(--nav-bar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--nav-bar-color);
}

.nav-buttons-container {
  margin-left: 7px;
  display: flex;
  gap: 38px;
  padding: 0 15px 0 0;
}

.nav-button {
  color: var(--secondary-color);
  cursor: pointer;
}

.user-info {
  display: flex;
  gap: 28px;
  padding-right: 15px;
}

.exit-button {
  width: 78px;
  height: 27px;
}
</style>
