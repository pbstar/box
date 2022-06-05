<template>
  <div class="home">
    <van-nav-bar
      title="设置"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <div class="title"></div>
    <van-cell-group>
      <van-cell title="修改密码" is-link />
      <van-cell title="修改密保" is-link />
    </van-cell-group>
    <div class="title"></div>
    <van-cell-group>
      <van-cell title="关于" is-link value="1.0.0" />
      <van-cell title="联系我们" is-link />
      <van-cell title="用户协议" is-link />
    </van-cell-group>
    <div class="title"></div>
    <van-cell-group>
      <!-- <van-cell title="切换账号" is-link /> -->
      <van-cell title="注销账号" is-link />
    </van-cell-group>
    <div class="title"></div>
    <van-cell-group>
      <div class="rbox">
        <span>退出登录</span>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uid: 0,
      ucode: "",
      info: null,
    };
  },
  created() {
    if (this.$getLocalStorage("userId")) {
      this.uid = Number(this.$getLocalStorage("userId"));
      this.ucode = this.$getLocalStorage("userCode");
      this.getInfo();
    }
  },
  methods: {
    getInfo() {
      this.$http
        .get("user/get_info.php", {
          uid: this.uid,
        })
        .then((res) => {
          if (res.code == 200) {
            this.info = res.data;
          }
        });
    },
    onClickLeft() {
      this.$router.push({
        name: "mine",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  .title {
    padding: 5px 10px;
  }
  .rbox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
