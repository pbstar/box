<template>
  <div class="home">
    <div class="top">
      <div class="tlbox">
        <van-icon size="50" color="#aaa" name="manager" />
        <div class="tlinfo">
          <span class="tlname">盒子用户</span>
          <span class="tlid">ID：{{ ucode }}</span>
        </div>
      </div>
      <div class="trbox">
        <img
          v-if="info ? !$getIsToday(info.stime) : false"
          src="../../assets/icons/sign1.png"
          alt=""
        />
        <img
          v-else
          style="width: 27px; height: 27px"
          src="../../assets/icons/sign2.png"
          alt=""
        />
      </div>
    </div>
    <div class="title"></div>
    <van-cell-group>
      <van-cell
        icon="vip-card-o"
        title="会员到期时间"
        :value="info ? $getTime(info.vtime) : 0"
      />
      <van-cell icon="shop-o" title="购买会员" to="/vip_shop" is-link />
      <van-cell icon="shop-o" title="使用兑换卡" to="/vip_exchange" is-link />
    </van-cell-group>
    <div class="title"></div>
    <van-cell-group>
      <van-cell icon="gem-o" title="积分数量" :value="info ? info.jifen : 0" />
      <van-cell icon="coupon-o" title="积分抽奖" is-link />
      <van-cell icon="exchange" title="积分兑换" is-link />
      <van-cell icon="coupon-o" title="获取积分" is-link />
    </van-cell-group>
    <div class="title"></div>
    <van-cell-group>
      <van-cell icon="setting-o" to="/set" title="设置" is-link />
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
  },
};
</script>

<style lang="scss" scoped>
.home {
  .top {
    padding: 40px 10px 20px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tlbox {
      display: flex;
      .tlinfo {
        display: flex;
        flex-direction: column;
        margin-left: 4px;
        justify-content: space-around;
        .tlname {
          font-size: 15px;
          font-weight: 800;
        }
        .tlid {
          font-size: 12px;
        }
      }
    }
    .trbox {
      margin-right: 5px;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .title {
    padding: 5px 10px;
  }
}
</style>
