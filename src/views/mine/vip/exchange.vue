<template>
  <div class="home">
    <van-search
      show-action
      v-model="code"
      left-icon=""
      placeholder="请输入兑换码"
    >
      <template #left>
        <van-icon
          @click="onClickLeft"
          name="arrow-left"
          style="margin-right: 5px"
        />
      </template>
      <template #action>
        <div @click="onSearch" style="margin-right: 5px">搜索</div>
      </template>
    </van-search>
    <div class="title"></div>
    <van-empty description="未找到兑换卡"> </van-empty>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uid: 0,
      code: "",
      info: null,
    };
  },
  created() {
    if (this.$getLocalStorage("userId")) {
      this.uid = Number(this.$getLocalStorage("userId"));
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
    onSearch() {
      console.log(this.code);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background-color: #fff;
  .title {
    height: 1px;
    background-color: #eee;
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
