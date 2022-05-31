<template>
  <div class="home">
    <van-empty description="未找到本页面">
      <van-button round
                  @click="tohome"
                  type="danger"
                  class="bottom-button">首页</van-button>
    </van-empty>
  </div>
</template>

<script>
export default {
  methods: {
    tohome () {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  padding-top: 30px;
  background-color: #fff;
  .bottom-button {
    width: 150px;
    height: 34px;
  }
}
</style>