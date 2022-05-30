<template>
  <div class="page">
    <router-view />
    <Footer v-if="$route.meta.navShow" />
  </div>
</template>
<script>
import Footer from './components/footer'
export default {
  components: {
    Footer
  }
}
</script>
<style lang="scss" scoped>
.page {
  min-height: 100%;
  background-color: #eee;
}
</style>