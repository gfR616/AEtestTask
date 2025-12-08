<template>
  <div class="loader-overlay">
    <div class="loader"></div>
    <div class="loader-text">Загрузка...</div>
  </div>
</template>

<style scoped>
.loader-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  width: 50px;
  height: 50px;
  border: 6px solid #ffffff55;
  border-top-color: #353434;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 12px;
}

.loader-text {
  color: rgb(0, 0, 0);
  font-size: 18px;
  font-weight: 500;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
