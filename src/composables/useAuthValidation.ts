import { ref } from 'vue'

export function useAuthValidation() {
  const usernameError = ref<string>('')
  const passwordError = ref<string>('')

  const validateAuth = (username: string, password: string): boolean => {
    usernameError.value = ''
    passwordError.value = ''

    const trimmedUser = username.trim()
    const trimmedPass = password.trim()

    if (!trimmedUser) {
      usernameError.value = 'Пожалуйста, введите логин'
    }

    if (!trimmedPass) {
      passwordError.value = 'Пожалуйста, введите пароль'
    } else if (trimmedPass.length < 8) {
      passwordError.value = 'Длина пароля должна быть более 8 символов'
    }

    return !usernameError.value && !passwordError.value
  }

  const resetAuthErrors = () => {
    usernameError.value = ''
    passwordError.value = ''
  }

  return {
    usernameError,
    passwordError,
    validateAuth,
    resetAuthErrors,
  }
}
