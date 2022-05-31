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
  },
  created () {
    if (!this.$isMobile()) {
      this.$router.push({
        name: 'pc'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  min-height: 100%;
  background-color: #eee;
}
</style>