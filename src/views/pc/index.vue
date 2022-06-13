<template>
  <div class="home">暂未开通pc端，请用手机访问！</div>
</template>

<script>
export default {
  created() {
    if (this.$isMobile()) {
      this.$router.push({
        name: "home",
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  line-height: 30px;
  padding: 10px;
}
</style>
