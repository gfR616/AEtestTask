<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')

const usernameError = ref('')
const passwordError = ref('')
const authError = ref('')

const submit = async (event: Event) => {
  event.preventDefault() // иначе она перезагрузит страницу
  usernameError.value = ''
  passwordError.value = ''
  authError.value = ''

  if (!username.value.trim()) {
    usernameError.value = 'Пожалуйста, введите логин'
  }

  if (!password.value.trim()) {
    passwordError.value = 'Пожалуйста, введите пароль'
  }

  if (usernameError.value || passwordError.value) {
    return
  }

  try {
    const user = await auth.login(username.value.trim(), password.value.trim())
    router.push('/')
  } catch (error: any) {
    authError.value = error.message || 'Произошла ошибка при входе'
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
  /* height: 45vh; вариант с относительным размером формы предполагает изменение размеров инпутов и кнопок, это не самое удачное решение
  width: 43vw; */
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
}

.input-wrapper {
  margin-bottom: 9px;
  display: flex;
  flex-direction: column;
}

.error-message {
  color: red;
  margin: 5px 0 0 0;
}

.error-container {
  height: 18px;
}
</style>
