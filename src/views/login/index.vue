<template>
  <div class="home">
    <van-nav-bar
      title="登录"
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
          label-width="4em"
          placeholder="请输入账号"
        />
        <van-field
          v-model="password"
          :type="showPass ? 'text' : 'password'"
          label-width="4em"
          label="密码"
          :right-icon="showPass ? 'eye-o' : 'closed-eye'"
          @click-right-icon="showPass = !showPass"
          placeholder="请输入密码"
        />
        <van-field
          v-model="code"
          class="code"
          label="验证码"
          label-width="4em"
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
        >提交</van-button
      >
    </van-form>
    <div class="more">
      <span @click="toFindpass">找回密码</span>
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
        name: "home",
      });
    },
    toReg() {
      this.$router.push({
        name: "register",
      });
    },
    toFindpass() {
      this.$router.push({
        name: "findPass",
      });
    },
    onSubmit() {
      if (this.username == "") return this.$tipFail("请输入账号");
      if (this.password == "") return this.$tipSuccess("请输入密码");
      if (this.code == "") return this.$tipFail("请输入验证码");
      if (this.code != this.identifyCode) return this.$tipFail("验证码错误");
      this.$http
        .get("user/login.php", {
          user: this.username,
          pass: this.$strToBase64(this.password),
        })
        .then((res) => {
          if (res.code == 200) {
            this.$setLocalStorage("userId", res.data.id);
            this.$setLocalStorage("userCode", res.data.user);
            this.$router.push({
              name: "mine",
            });
          } else if (res.code == 201) {
            this.$tipFail("密码错误");
          } else if (res.code == 300) {
            this.$tipFail("账号未注册");
          }
        });
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
