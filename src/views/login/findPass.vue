<template>
  <div class="home">
    <van-nav-bar
      title="找回密码"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit" class="form">
      <div class="inputBox">
        <van-field
          v-model="username"
          label="账号"
          label-width="4.2em"
          placeholder="请输入账号"
        />
        <van-field
          v-model="code"
          class="code"
          label="验证码"
          label-width="4.2em"
          placeholder="请输入右侧验证码"
        >
          <template #extra>
            <VerificationCode
              :changeCode.sync="identifyCode"
              identifyCodes="23456789"
              :contentHeight="34"
            ></VerificationCode>
          </template>
        </van-field>
      </div>
      <van-button round class="btnBox" block type="info" native-type="submit"
        >下一步</van-button
      >
    </van-form>
    <div class="more">
      <span>找回密码</span>
      <span @click="toReg">立即注册</span>
    </div>
  </div>
</template>

<script>
import VerificationCode from "../../components/tool/VerificationCode";
export default {
  components: {
    VerificationCode,
  },
  data() {
    return {
      username: "",
      password: "",
      code: "",
      identifyCode: "",
      showPass: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "login",
      });
    },
    toReg() {
      this.$router.push({
        name: "register",
      });
    },
    onSubmit() {
      if (this.username == "") return this.$tipFail("请输入账号");
      if (this.password == "") return this.$tipSuccess("请输入密码");
      if (this.code == "") return this.$tipFail("请输入验证码");
      if (this.code != this.identifyCode) return this.$tipFail("验证码错误");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  .form {
    margin: 150px 10px 10px;
    .inputBox {
      border-radius: 10px;
      overflow: hidden;
      .code {
        padding: 5px 16px;
        height: 44px;
        /deep/ .van-cell__value {
          padding: 5px 0;
        }
        /deep/ .van-cell__title {
          padding: 5px 0;
        }
      }
    }
    .btnBox {
      margin-top: 16px;
    }
  }
  .more {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #666;
    margin: 0 12px;
  }
}
</style>
