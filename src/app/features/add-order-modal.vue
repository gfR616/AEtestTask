<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-content">
      <div class="header">
        <p>Добавить заказ</p>
      </div>
      <div class="inputs-group">
        <input class="input" type="text" placeholder="Введите ваше имя" />
        <input class="input" type="text" placeholder="Введите ваш адрес" />
        <input class="input" type="text" placeholder="Коментарий" />
      </div>
      <button class="add-order-button">Добавить заказ</button>
    </div>
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
  background: var(--background-color);
  z-index: 1000;
}

.modal-content {
  display: flex;
  flex-direction: column;
  margin: 31px 0 0 36px;
}

.inputs-group {
  display: flex;
  flex-direction: column;
  margin: 33px 0 0 0;
}

.input {
  width: 162px;
  height: 28px;
  border: none;
  padding: 0 0 0 5px;
  margin-bottom: 24px;
}

.add-order-button {
  margin: 5px 0 0 3px;
  width: 115px;
  height: 25px;
  background: var(--primary-color);
  border: none;
  cursor: pointer;
}
</style>
