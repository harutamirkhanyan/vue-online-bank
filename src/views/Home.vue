<template>
  <app-loader v-if="loading" />
  <app-page v-else title="list">
    <template #header>
      <button class="btn primary" @click="modal = true">
        Add request
      </button>
    </template>
    <request-filter v-model="filter"></request-filter>
    <requests-table :requests="requests"></requests-table>
    <teleport to="body">
      <app-modal v-if="modal" title="New request" @close="modal = false">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import AppModal from '../components/ui/AppModal.vue';
import AppPage from '../components/ui/AppPage.vue';
import RequestModal from '../components/request/RequestModal.vue';
import RequestsTable from '../components/request/RequestTabel.vue';
import AppLoader from '../components/ui/AppLoader.vue';
import RequestFilter from '../components/request/RequestFilter.vue';

export default {
  setup() {
    const store = useStore();
    const modal = ref(false);
    const loading = ref(false);
    const filter = ref({});

    onMounted(async () => {
      loading.value = true;
      await store.dispatch('request/load');
      loading.value = false;
    });

    const requests = computed(() =>
      store.getters['request/requests']
        .filter((request) => {
          if (filter.value.name) {
            return request.name.includes(filter.value.name);
          }
          return request;
        })
        .filter((request) => {
          if (filter.value.status) {
          return filter.value.status===request.status
          }
          return request
        })
    );

    return {
      modal,
      requests,
      loading,
      filter,
    };
  },

  components: {
    AppPage,
    RequestsTable,
    AppModal,
    RequestModal,
    AppLoader,
    RequestFilter,
  },
};
</script>
