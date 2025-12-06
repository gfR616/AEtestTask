<template>
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

      <tbody id="orders-body"></tbody>
    </table>
  </div>
</template>

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
}

.orders-table th {
  background: var(--primary-color);
  text-align: center;
}
</style>
