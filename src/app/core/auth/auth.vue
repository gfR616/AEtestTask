<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const getAuth = () => {
  console.log('auth!!')
  router.push('/')
}
</script>

<template>
  <div class="auth-container">
    <form @submit="getAuth" class="auth-form">
      <div class="inputs-group">
        <input class="input" placeholder="username" type="text" />
        <input class="input" placeholder="password" type="text" />
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
  margin-bottom: 32px;
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
</style>
