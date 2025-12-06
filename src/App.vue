<script setup lang="ts">
import { useRoute } from 'vue-router'
import navPanel from './app/shared/nav-panel.vue'

const route = useRoute()
</script>

<template id="app">
  <navPanel v-if="route.path !== '/auth'" />
  <router-view />
</template>

<style>
:root {
  --nav-bar-color: #165996;
  --background-color: #e2e1e1;
  --buttons-color-primary: #d9d9d9;
  --buttons-color-secondary: #ffffff;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-style: 12px;
  font-weight: 400;
  background: var(--background-color);
}
</style>
