<template>
  <div class="home">
    <van-nav-bar
      title="购买会员"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <div class="title"></div>
    <van-grid :gutter="10" class="box" column-num="2">
      <van-grid-item icon="vip-card-o" text="会员日卡（1天）- ￥1" />
      <van-grid-item icon="vip-card-o" text="会员周卡（7天）- ￥3" />
      <van-grid-item
        icon="vip-card-o"
        text="会员月卡（30天）- ￥8"
        badge="hot"
      />
      <van-grid-item icon="vip-card-o" text="会员季卡（90天）- ￥18" />
      <van-grid-item icon="vip-card-o" text="会员年卡（365天）- ￥38" />
      <van-grid-item
        icon="vip-card-o"
        text="会员永久卡（不限）- ￥98"
        badge="hot"
      />
    </van-grid>
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
