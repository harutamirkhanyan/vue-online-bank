<template>
  <app-page title="list">
    <template #header>
      <button class="btn primary" @click="modal = true">
        Add request
      </button>
    </template>
    <requests-table :requests="[requests]"></requests-table>
    <teleport to="body">
      <app-modal v-if="modal" title="New request" @close="modal = false">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import AppModal from '../components/ui/AppModal.vue';
import AppPage from '../components/ui/AppPage.vue';
import RequestModal from '../components/request/RequestModal.vue';
import RequestsTable from '../components/request/RequestTabel.vue';
export default {
  setup() {
    const store = useStore();
    const modal = ref(false);

    const requests = computed(() => store.getters['request/requests']);
    console.log(requests);

    return {
      modal,
      requests,
    };
  },
  components: { AppPage, RequestsTable, AppModal, RequestModal },
};
</script>
