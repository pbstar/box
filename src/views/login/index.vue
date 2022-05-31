<template>
  <div class="home">
    <van-nav-bar title="登录"
                 left-text="返回"
                 left-arrow
                 fixed
                 placeholder
                 @click-left="onClickLeft" />
    <van-form @submit="onSubmit"
              class="form">
      <div class="inputBox">
        <van-field v-model="username"
                   label="账号"
                   label-width="4em"
                   placeholder="请输入账号" />
        <van-field v-model="password"
                   type="password"
                   label-width="4em"
                   label="密码"
                   placeholder="请输入密码" />
        <van-field v-model="code"
                   class="code"
                   label="验证码"
                   label-width="4em"
                   placeholder="请输入右侧验证码">
          <template #extra>
            <VerificationCode :changeCode.sync="identifyCode"
                              identifyCodes="23456789"
                              :contentHeight="34"></VerificationCode>
          </template>
        </van-field>
      </div>
      <div class="more">
        <span>找回密码</span>
        <span>立即注册</span>
      </div>
      <van-button round
                  block
                  type="info"
                  native-type="submit">提交</van-button>
    </van-form>
  </div>
</template>

<script>
import VerificationCode from '../../components/tool/VerificationCode';
export default {
  components: {
    VerificationCode
  },
  data () {
    return {
      username: '',
      password: '',
      code: '',
      identifyCode: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push({
        name: 'home'
      })
    },
    onSubmit () {
      console.log('submit', this.code, this.identifyCode);
    },
  }
}
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  .form {
    margin: 150px 10px 20px;
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
    .more {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #666;
      margin: 10px 2px 16px;
    }
  }
}
</style>
