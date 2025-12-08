<template>
  <div class="modal-overlay" v-if="isVisible" @click.self="cancel">
    <div class="modal-content">
      <div class="modal-body">
        <p>{{ message }}</p>
      </div>
      <div class="modal-footer">
        <button class="btn confirm-btn" @click="confirm">Ок</button>
        <button class="btn cancel-btn" @click="cancel">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  isVisible: boolean
  message: string
}>()
const emit = defineEmits(['confirm', 'cancel'])

const confirm = () => {
  emit('confirm')
}

const cancel = () => {
  emit('cancel')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: var(--background-color);
  padding: 20px;
  width: 335px;
  height: 215px;
}

.modal-body {
  display: flex;
  align-items: center;

  height: 60%;
  padding-left: 10px;
}

.modal-footer {
  display: flex;
  height: 40%;
  align-items: center;
  justify-content: center;
  gap: 55px;
}

.btn {
  cursor: pointer;
  background: var(--secondary-color);
  color: rgb(0, 0, 0);
  width: 78px;
  height: 27px;
  border: none;
}
</style>
