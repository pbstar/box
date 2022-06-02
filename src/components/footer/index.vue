<template>
  <div class="home">
    <router-link to="/"
                 :class="$route.name=='home'?'itemActive':''"
                 class="item">
      <van-icon name="wap-home-o"
                size="25px" />
      <span>首页</span>
    </router-link>
    <router-link class="item"
                 :class="$route.name=='boxs'?'itemActive':''"
                 to="/boxs">
      <van-icon name="apps-o"
                size="25px" />
      <span>工具</span>
    </router-link>
    <router-link class="item"
                 :class="$route.name=='mine'?'itemActive':''"
                 to="/mine">
      <van-icon name="contact"
                size="25px" />
      <span>我的</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding-top: 5px;
  padding-bottom: env(safe-area-inset-bottom);
  box-sizing: content-box;
  .item {
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    padding-bottom: 5px;
    box-sizing: border-box;
  }
  .itemActive {
    color: #1989fa;
  }
}
</style>
