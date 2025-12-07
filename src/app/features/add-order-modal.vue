<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-content"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  isVisible: boolean
}>()
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 8vh;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
