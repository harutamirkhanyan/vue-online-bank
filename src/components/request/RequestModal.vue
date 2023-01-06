<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{ invalid: nError }">
      <label for="name">Name</label>
      <input type="text" v-model="name" @blur="nBlur" id="name" />
      <small v-if="nError">{{ nError }}</small>
    </div>
    <div class="form-control" :class="{ invalid: pError }">
      <label for="phone">Phone</label>
      <input type="number" v-model="phone" @blur="pBlur" id="phone" />
      <small v-if="pError">{{ pError }}</small>
    </div>
    <div class="form-control" :class="{ invalid: aError }">
      <label for="amount">Amount</label>
      <input type="number" v-model="amount" @blur="aBlur" id="amount" />
      <small v-if="pError">{{ aError }}</small>
    </div>
    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="done">Done</option>
        <option value="active">Active</option>
        <option value="canceled">Cancel</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    <button class="btn primary" :disabled="isSubmitting">Create</button>
  </form>
</template>

<script>
import { useStore } from 'vuex';
import { useRequestForm } from '../../use/request-form';
export default {
  emits: ['created'],
  setup(_, {emit}) {
    const store = useStore()

    const submit = async values => {
      await store.dispatch('request/create', values)
      emit('created')
    }

    return {
      ...useRequestForm(submit)
    }
  }
}
</script>

<style lang="scss" scoped></style>
