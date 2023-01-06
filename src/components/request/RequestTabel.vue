<template>
  <h4 v-if="requests.length === 0" class="text center">No list</h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Nane</th>
        <th>Tel.</th>
        <th>Count</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tr v-for="(r, idx) in requests" :key="r.id">
      <td>{{ idx + 1 }}</td>
      <td>{{ r.name }}</td>
      <td>{{ r.phone }}</td>
      <td>{{ currency(r.amount) }}</td>
      <td><app-status :type="r.status"></app-status></td>
      <td>
        <router-link
          v-slot="{ navigate }"
          custom
          :to="{ name: 'Request', params: { id: r.id } }"
        >
          <button class="btn primary" @click="navigate">Open</button>
        </router-link>
      </td>
    </tr>
    <tbody></tbody>
  </table>
</template>

<script>
import {currency} from "../../utils/currency-formatter"
import AppStatus from '../ui/AppStatus.vue'
export default {
  setup() {
    return {currency}
  },
  props: ['requests'],
  components:{
    AppStatus
  }
};
</script>

<style lang="scss" scoped></style>
