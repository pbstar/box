<template>
  <div class="home">
    <van-grid :gutter="10"
              class="box"
              column-num="2">
      <van-grid-item v-for="value in 8"
                     :key="value"
                     :badge="value%3==0?'VIP':''"
                     icon="photo-o"
                     :text="'文字'+value" />
    </van-grid>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  .box {
    margin-top: 10px;
  }
}
</style>
