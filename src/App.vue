<script setup lang="ts">
import { useRoute } from 'vue-router'
import navPanel from './app/shared/nav-panel.vue'

const route = useRoute()
</script>

<template id="app">
  <navPanel v-if="!route.meta.hideNav" />
  <div class="main-content-area">
    <router-view />
  </div>
</template>

<style>
:root {
  --nav-bar-color: #165996;
  --background-color: #e2e1e1;
  --primary-color: #d9d9d9;
  --secondary-color: #ffffff;
}

html,
body {
  height: 100vh;
  width: 100%;
  margin: 0;
}

p {
  margin: 0;
}

body {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-size: 16px;
  font-weight: 400;
  background: var(--background-color);
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content-area {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
