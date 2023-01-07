<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Enter name" v-model="name" />
    </div>
    <div class="form-control">
      <select name="" id="" v-model="status">
        <option disabled selected>Check status</option>
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    <button class="btn warning" v-if="isActive" @click="reset">Clear filter</button>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue';

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],

  setup(_, { emit }) {
    const name = ref();
    const status = ref();

    watch([name, status], (values) => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1],
      });
    });

    const isActive = computed(() => name.value || status.value);

    return {
      name,
      status,
      isActive,
      reset: () => {
        (name.value = ''), (status.value = null);
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
