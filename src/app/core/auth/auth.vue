<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const username = ref<string>('')
const password = ref<string>('')

const usernameError = ref<string>('')
const passwordError = ref<string>('')
const authError = ref<string>('')

const submit = async (event: Event) => {
  event.preventDefault() // иначе она перезагрузит страницу
  authValidation()
  try {
    const user = await auth.login(username.value.trim(), password.value.trim())
    router.push('/orders')
  } catch (error: any) {
    authError.value = error.message ?? 'Произошла ошибка при входе'
  }
}

const authValidation = () => {
  usernameError.value = ''
  passwordError.value = ''
  authError.value = ''

  if (!username.value.trim()) {
    usernameError.value = 'Пожалуйста, введите логин'
  }

  if (!password.value.trim()) {
    passwordError.value = 'Пожалуйста, введите пароль'
  }

  if (password.value.trim().length < 8) {
    passwordError.value = 'Длинна пароля должна быть более 8 символов'
  }

  if (usernameError.value || passwordError.value) {
    return
  }
}
</script>

<template>
  <div class="auth-container">
    <form @submit="submit" class="auth-form">
      <div class="inputs-group">
        <div class="input-wrapper">
          <input class="input" v-model="username" placeholder="username" type="text" />
          <div class="error-container">
            <p v-if="usernameError" class="error-message">{{ usernameError }}</p>
          </div>
        </div>

        <div class="input-wrapper">
          <input class="input" v-model="password" placeholder="password" type="password" />
          <div class="error-container">
            <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
            <p v-if="authError" class="error-message">{{ authError }}</p>
          </div>
        </div>
      </div>

      <div class="auth-button-container">
        <button type="submit" class="auth-button">Войти</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 7vh 0 0 6vw;
}

.auth-form {
  min-width: 400px;
  background-color: var(--primary-color);
  padding: 0 0 20px 0;
}

.inputs-group {
  display: flex;
  flex-direction: column;
  margin: 58px 0 0 38px;
}

.input {
  width: 180px;
  height: 34px;
  border: none;
  padding: 0 0 0 17px;
}

.auth-button-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.auth-button {
  width: 104px;
  height: 29px;
  background: var(--secondary-color);
  border: none;
  cursor: pointer;
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
</style>
