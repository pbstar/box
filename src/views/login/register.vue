<template>
  <div class="home">
    <van-nav-bar title="注册"
                 left-text="返回"
                 left-arrow
                 fixed
                 placeholder
                 @click-left="onClickLeft" />
    <van-form @submit="onSubmit"
              class="form">
      <div class="inputBox">
        <van-field v-model="nickname"
                   label="昵称"
                   label-width="4em"
                   placeholder="请输入昵称" />
        <van-field v-model="username"
                   label="账号"
                   label-width="4em"
                   placeholder="请输入6-12位账号" />
        <van-field v-model="password"
                   :type="showPass?'text':'password'"
                   label-width="4em"
                   label="密码"
                   :right-icon="showPass?'eye-o':'closed-eye'"
                   @click-right-icon="showPass=!showPass"
                   placeholder="请输入6-12位密码" />
        <van-field v-model="password2"
                   :type="showPass2?'text':'password'"
                   label-width="4em"
                   label="确认密码"
                   :right-icon="showPass2?'eye-o':'closed-eye'"
                   @click-right-icon="showPass2=!showPass2"
                   placeholder="请再次输入密码" />
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
        <van-field v-model="mbque"
                   label="密保问题"
                   label-width="4em"
                   placeholder="例：你爱吃的水果是什么？" />
        <van-field v-model="mbans"
                   label="密保答案"
                   label-width="4em"
                   placeholder="例：西瓜" />
      </div>
      <van-button round
                  class="btnBox"
                  block
                  type="info"
                  native-type="submit">注册</van-button>
    </van-form>
    <div class="more">
      <span>找回密码</span>
      <span @click="onClickLeft">去登录</span>
    </div>
  </div>
</template>

<script>
import VerificationCode from '../../components/tool/VerificationCode';
import { Toast } from 'vant';
export default {
  components: {
    VerificationCode
  },
  data () {
    return {
      nickname: '',
      username: '',
      password: '',
      password2: '',
      code: '',
      identifyCode: '',
      showPass: false,
      showPass2: false,
      mbque: '',
      mbans: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push({
        name: 'login'
      })
    },
    onSubmit () {
      if (this.username == '') return Toast.fail('请输入账号');
      if (this.password == '') return Toast.fail('请输入密码');
      if (this.code == '') return Toast.fail('请输入验证码');
      if (this.code != this.identifyCode) return Toast.fail('验证码错误');
    },
  }
}
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