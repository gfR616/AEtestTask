<script setup lang="ts">
import { useRoute } from 'vue-router'
import navPanel from './app/shared/nav-panel.vue'

const route = useRoute()
</script>

<template id="app">
  <navPanel v-if="!route.meta.hideNav" />
  <router-view />
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
  height: 100%;
  min-height: 100vh;
  margin: 0;
}

body {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-style: 12px;
  font-weight: 400;
  background: var(--background-color);
}
#app {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
