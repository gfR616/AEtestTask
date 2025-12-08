import { ref } from 'vue'

export function useOrderValidation() {
  const username = ref('')
  const address = ref('')
  const usernameError = ref('')
  const addressError = ref('')

  const validateOrder = (): boolean => {
    usernameError.value = ''
    addressError.value = ''

    if (!username.value.trim()) {
      usernameError.value = 'Имя обязательно для заполнения'
    }

    if (!address.value.trim()) {
      addressError.value = 'Адрес обязателен для заполнения'
    }

    return !(usernameError.value || addressError.value)
  }

  return {
    username,
    address,
    usernameError,
    addressError,
    validateOrder,
  }
}
