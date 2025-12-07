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
            <th></th>
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
            <td class="actions-cell">
              <div class="order-buttons-container">
                <button title="Обновить заказ" class="order-button" @click="updateOrder(order.id)">
                  <img src="/updateOrder.svg" alt="Обновить заказ" />
                </button>
                <button
                  title="Удалить заказ"
                  v-if="authStore.user?.role === 'ADMIN'"
                  class="order-button"
                  @click="deleteOrder(order.id)"
                >
                  <img src="/deleteOrder.svg" alt="Удалить заказ" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'
import { useOrdersStore } from '@/stores/ordersStore'
import { onMounted } from 'vue'

const ordersStore = useOrdersStore()
const authStore = useAuthStore()
onMounted(() => {
  ordersStore.fetchOrders()
})
const updateOrder = (id: string) => {
  ordersStore.getOrderById(id)
}
const deleteOrder = (id: string) => {
  ordersStore.deleteOrder(id)
}
</script>

<style scoped>
.table-container {
  padding: 43px 43px 20px 43px;
  height: 100%;
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

.order-buttons-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
}

.order-button {
  width: 18px;
  height: 17px;
  border: 1px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
