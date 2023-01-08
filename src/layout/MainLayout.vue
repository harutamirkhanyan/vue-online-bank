<template>
  <the-navbar/>
  <the-sidebar/>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar';
import TheSidebar from '../components/TheSidebar.vue';
export default {
  components: { TheNavbar, TheSidebar },
};
</script>

<style lang="scss" scoped></style>
