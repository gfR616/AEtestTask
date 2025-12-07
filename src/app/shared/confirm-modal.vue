<template>
  <div class="modal-overlay" v-if="isVisible" @click.self="cancel">
    <div class="modal-content">
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button class="close-button" @click="cancel">&times;</button>
      </div>

      <div class="modal-body">
        <p>{{ message }}</p>
      </div>

      <div class="modal-footer">
        <button class="btn cancel-btn" @click="cancel">Отмена</button>
        <button class="btn confirm-btn" @click="confirm">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  isVisible: boolean
  title: string
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
  background: var(--secondary-color);
  padding: 20px;
  width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-header,
.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
}
.modal-header {
  padding-top: 0;
}

.modal-footer {
  justify-content: flex-end;
  gap: 10px;
}

.btn .close-button {
  padding: 8px 15px;
  border: none;
  cursor: pointer;
}

.confirm-btn {
  background-color: red;
  color: white;
  width: 78px;
  height: 27px;
}

.cancel-btn {
  background-color: #6c757d;
  color: white;
  width: 78px;
  height: 27px;
}

.close-button {
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: 0px;
  cursor: pointer;
}

.modal-body {
  margin: 10px 0 15px 0;
  padding-left: 10px;
}
</style>
