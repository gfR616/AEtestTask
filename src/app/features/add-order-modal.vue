<template>
  <div class="modal-overlay" v-if="props.isVisible">
    <form v-on:submit="addOrder" class="modal-content">
      <div class="header">
        <p>Добавить заказ</p>
      </div>
      <div class="inputs-group">
        <div class="input-wrapper">
          <input class="input" v-model="username" type="text" placeholder="Введите ваше имя" />
          <div class="error-container">
            <p v-if="usernameError" class="error-message">{{ usernameError }}</p>
          </div>
        </div>
        <div class="input-wrapper">
          <input class="input" v-model="address" type="text" placeholder="Введите ваш адрес" />
          <div class="error-container">
            <p v-if="addressError" class="error-message">{{ addressError }}</p>
          </div>
        </div>
        <div class="input-wrapper">
          <input class="input" v-model="comment" type="text" placeholder="Коментарий" />
        </div>
      </div>
      <button class="add-order-button">Добавить заказ</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'
import { useOrdersStore } from '@/stores/ordersStore'
import { ref, watch } from 'vue'
import type { NewOrderPayload } from '../core/types/types'
import { formatCustomDate } from '@/utils/tools'
import { useOrderValidation } from '@/composables/useOrderValidation'

const ordersStore = useOrdersStore()
const authStore = useAuthStore()

const username = ref<string>(`${authStore.user?.name}`)
const address = ref<string>('')
const comment = ref<string>('')

const usernameError = ref<string>('')
const addressError = ref<string>('')

const props = defineProps<{
  isVisible: boolean
}>()

const emit = defineEmits(['close'])

watch(
  () => props.isVisible,
  (newVal) => {
    if (!newVal) {
      username.value = `${authStore.user?.name || ''}`
      address.value = ''
      comment.value = ''
      usernameError.value = ''
      addressError.value = ''
    }
  },
)

const addOrder = async (event: Event) => {
  event.preventDefault()
  addOrderValidation()
  if (useOrderValidation()) {
    const currentDate = formatCustomDate(new Date())

    const newOrderRequest: NewOrderPayload = {
      name: username.value,
      address: address.value,
      date: currentDate,
      status: 'Новый',
      comment: comment.value,
    }

    await ordersStore.createOrder(newOrderRequest)
    if (!ordersStore.isLoading) emit('close')
  }
}

const addOrderValidation = async () => {
  usernameError.value = ''
  addressError.value = ''

  if (!username.value.trim()) {
    usernameError.value = 'Имя обязательно для заполнения'
  }

  if (!address.value.trim()) {
    addressError.value = 'Адрес обязателен для заполнения'
  }

  if (usernameError.value || addressError.value) {
    return false
  } else return true
}
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
}

.input-wrapper {
  margin-bottom: 9px;
  display: flex;
  flex-direction: column;
}

.error-message {
  color: red;
  margin: 5px 0 0 0;
  font-size: 12px;
  margin-left: 8px;
}

.error-container {
  height: 18px;
}

.add-order-button {
  margin: 21px 0 0 3px;
  width: 115px;
  height: 25px;
  background: var(--primary-color);
  border: none;
  cursor: pointer;
}
</style>
