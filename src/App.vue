<script setup lang="ts">
import { useRoute } from 'vue-router'
import navPanel from './app/shared/nav-panel.vue'
import toastContainer from './app/shared/toast-container.vue'

const route = useRoute()
</script>

<template id="app">
  <navPanel v-if="!route.meta.hideNav" class="fixed-nav-panel" />
  <main :class="{ 'main-content': !route.meta.hideNav, 'full-content': route.meta.hideNav }">
    <router-view />
  </main>
  <toastContainer />
</template>

<style>
:root {
  --nav-bar-color: #165996;
  --background-color: #e2e1e1;
  --primary-color: #d9d9d9;
  --secondary-color: #ffffff;
  --nav-bar-height: 8vh;
}

html,
body {
  height: 100vh;
  width: 100%;
  margin: 0;
}

p,
h2 {
  margin: 0;
}

body {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-size: 16px;
  font-weight: 400;
  background: var(--background-color);
}

.fixed-nav-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-bar-height);
  z-index: 100;
}

.main-content {
  padding-top: var(--nav-bar-height);
  min-height: calc(100vh - var(--nav-bar-height));
}

.full-content {
  height: 100vh;
}
</style>
