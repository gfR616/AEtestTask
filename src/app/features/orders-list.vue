<template>
  <div class="container">
    <div class="table-container">
      <table class="orders-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Имя клиента</th>
            <th class="sortable" @click="sortBy('address')">
              Адрес
              <span v-if="sortKey === 'address'">{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
            </th>
            <th class="sortable" @click="sortBy('date')">
              Дата заказа
              <span v-if="sortKey === 'date'">{{ sortOrder === 'asc' ? '▲' : '▼' }}</span>
            </th>
            <th>Статус</th>
            <th>Комментарий</th>
            <th></th>
          </tr>
        </thead>

        <tbody id="orders-body">
          <tr
            :class="{ 'completed-order': order.status === 'Выполнен' }"
            v-for="order in sortedOrders"
          >
            <td>{{ order.id }}</td>
            <td>{{ order.name }}</td>
            <td>{{ order.address }}</td>
            <td>{{ order.date }}</td>
            <td>{{ order.status }}</td>
            <td>{{ order.comment }}</td>
            <td class="actions-cell">
              <div class="order-buttons-container">
                <button
                  title="Обновить заказ"
                  v-if="order.status !== 'Выполнен'"
                  class="order-button"
                  @click="updateOrder(order.id)"
                >
                  <img src="/updateOrder.svg" alt="Обновить заказ" />
                </button>
                <button
                  title="Удалить заказ"
                  v-if="authStore.user?.role === 'ADMIN'"
                  class="order-button"
                  @click="openDeleteModal(order.id)"
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

  <ConfirmModal
    :is-visible="showConfirmModal"
    title="Подтверждение удаления"
    :message="`Вы уверены, что хотите удалить заказ №${orderToDeleteId}? Это действие необратимо.`"
    @confirm="handleConfirmDelete"
    @cancel="handleCancelDelete"
  />
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'
import { useOrdersStore } from '@/stores/ordersStore'
import { computed, onMounted, ref } from 'vue'
import ConfirmModal from '../shared/confirm-modal.vue'
import type { Order } from '../core/types/types'

const ordersStore = useOrdersStore()
const authStore = useAuthStore()

const showConfirmModal = ref(false)
const orderToDeleteId = ref<string | null>(null)
const sortKey = ref<keyof Order | null>(null)
const sortOrder = ref<'asc' | 'desc'>('asc')

onMounted(() => {
  ordersStore.fetchOrders()
})
const updateOrder = (id: string) => {
  ordersStore.getOrderById(id)
}

const openDeleteModal = (orderId: string) => {
  orderToDeleteId.value = orderId
  showConfirmModal.value = true
}

const handleCancelDelete = () => {
  showConfirmModal.value = false
  orderToDeleteId.value = null
}

const handleConfirmDelete = async () => {
  if (orderToDeleteId.value) {
    try {
      await ordersStore.deleteOrder(orderToDeleteId.value)
    } catch (error) {
      console.log(error)
    } finally {
      showConfirmModal.value = false
      orderToDeleteId.value = null
    }
  }
}

const sortedOrders = computed(() => {
  const orders = [...ordersStore.orders]

  if (sortKey.value) {
    orders.sort((a, b) => {
      const valA = a[sortKey.value!]
      const valB = b[sortKey.value!]

      let comparison = 0

      if (typeof valA === 'string' && typeof valB === 'string') {
        comparison = valA.localeCompare(valB)
      }

      return sortOrder.value === 'desc' ? comparison * -1 : comparison
    })
  }
  return orders
})

const sortBy = (key: keyof Order) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}
</script>

<style scoped>
.sortable {
  cursor: pointer;
  user-select: none;
}
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
.completed-order {
  color: grey;
}
</style>
