<template>
  <div class="home">
    <van-swipe class="swipe"
               :autoplay="3000"
               @change="onChange">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>
  </div>
</template>

<script>

export default {
  data () {
    return {
      current: 0
    }
  },
  created () {
  },
  methods: {
    onChange (index) {
      this.current = index;
    },
  }
}
</script>

<style lang="scss" scoped>
.home {
  .swipe {
    height: 200px;
    background-color: rgb(109, 109, 255);
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
      color: #fff;
    }
  }
}
</style>
