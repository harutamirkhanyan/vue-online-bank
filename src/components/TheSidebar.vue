<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="closeSidebar">&times;</span>
  <div class="sidebar-content">
    <p>Welcome to the System</p>
  </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import {useStore} from 'vuex'
  export default {
    setup(){
      const store=useStore()
      const sidebar=computed(()=>store.state.sidebar)

      return {
      sidebar,
      closeSidebar: ()=>store.commit('closeSidebar')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>