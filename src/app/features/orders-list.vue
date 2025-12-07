<template>
  <div class="container">
    <div class="table-container">
      <table class="orders-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Имя клиента</th>
            <th>Адрес</th>
            <th>Дата заказа</th>
            <th>Статус</th>
            <th>Комментарий</th>
          </tr>
        </thead>

        <tbody id="orders-body">
          <tr v-for="order in ordersStore.orders">
            <td>{{ order.id }}</td>
            <td>{{ order.name }}</td>
            <td>{{ order.address }}</td>
            <td>{{ order.date }}</td>
            <td>{{ order.status }}</td>
            <td>{{ order.comment }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useOrdersStore } from '@/stores/ordersStore'
import { onMounted } from 'vue'

const ordersStore = useOrdersStore()
onMounted(() => {
  ordersStore.fetchOrders()
})
</script>

<style scoped>
.table-container {
  padding: 127px 72px 0 43px;
}

.orders-table {
  width: 100%;
  border-collapse: collapse;
}

.orders-table th,
.orders-table td {
  padding: 8px 12px;
  border: 1px solid #000000;
  font-weight: 400;
  word-break: break-all;
}

.orders-table th {
  background: var(--primary-color);
  text-align: center;
}
</style>
