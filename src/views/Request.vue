<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back title="Request" v-else-if="request">
    <p><strong>Name</strong>: {{ request.name }}</p>
    <p><strong>Phone</strong>: {{ request.phone }}</p>
    <p><strong>Count</strong>: {{ currency(request.amount) }}</p>
    <p>
      <strong>Status</strong>:
      <app-status :type="request.status">{{ request.status }}</app-status>
    </p>
    <div class="form-control">
      <select name="" id="" v-model="status">
        <option disabled selected>Check status</option>
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    <button class="btn" @click="update" v-if="hasChanges">Update</button>
    <button class="btn danger" @click="remove">Remove</button>
  </app-page>
  <h3 v-else class="text-center text-white">
    No request whit ID= {{ $route.params.id }}
  </h3>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AppPage from '../components/ui/AppPage.vue';
import AppLoader from '../components/ui/AppLoader.vue';
import AppStatus from '../components/ui/AppStatus.vue';
import { currency } from '../utils/currency-formatter';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const loading = ref(true);
    const request = ref({});
    const status = ref();

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch('request/loadById', route.params.id);
      status.value = request.value?.status;
      loading.value = false;
    });

    const hasChanges = computed(() => request.value.status !== status.value);

    const remove = async () => {
      await store.dispatch('request/remove', route.params.id);
      router.push('/');
    };

    const update = async () => {
    const data={...request.value, status: status.value, id:route.params.id}
      await store.dispatch('request/update', data);
      request.value.status=status.value
    };

    return { loading, request, currency, update, remove, status, hasChanges };
  },
  components: { AppPage, AppLoader, AppStatus },
};
</script>

<style lang="scss" scoped></style>
