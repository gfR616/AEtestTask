<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useToastStore } from '@/stores/toastStore'

const toastStore = useToastStore()
const { toasts } = storeToRefs(toastStore)
</script>

<template>
  <div class="toast-stack">
    <div v-for="toast in toasts" :key="toast.id" class="toast" :data-type="toast.type">
      {{ toast.message }}
    </div>
  </div>
</template>

<style scoped>
.toast-stack {
  position: fixed;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 99999;
}

.toast {
  min-width: 250px;
  max-width: 320px;
  min-height: 70px;
  max-height: 100px;
  padding: 10px 14px;
  color: #000000;
  background: #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  border-left: 4px solid #94a3b8;
  display: flex;
  align-items: center;
}

.toast[data-type='success'] {
  background: #ecfdf3;
  border-left-color: #22c55e;
  color: #166534;
}

.toast[data-type='error'] {
  background: #fef2f2;
  border-left-color: #ef4444;
  color: #991b1b;
}

.toast[data-type='info'] {
  background: #e2e8f0;
  border-left-color: #3b82f6;
  color: #0f172a;
}
</style>
