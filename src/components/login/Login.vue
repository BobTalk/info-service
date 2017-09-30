<template>
  <div class="login">
    <nav class="clear">
      <p class="loginIn fl" :class="{active:comp=='Login'}" @click="comp='Login'">登录</p>
      <p class="register fl" :class="{active:comp=='Reg'}" @click="comp='Reg'">注册</p>
      <p class="close" :class="{active:comp=='Reg'}" @click="act(false)">X</p>
      <component :is="comp"></component>
    </nav>
  </div>
</template>

<script>
  import  {mapState, mapActions} from 'vuex'
  import  Reg from '../register/Register.vue'
  import  Login from './Template.vue'
  export default {
    data(){
      return {
        comp: '',
      }
    },
    components: {Reg, Login},
    computed: {
      ...mapState(['loginFlag']),
    },
    methods: {
      ...mapActions({act: 'login'}),
    },
    mounted: function () {
      if (this.loginFlag.login == 'login') {
        this.comp = 'Login'
      } else {
        this.comp = 'Reg'
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .login {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 410px;
    transform: translate(-50%, -50%);
    z-index: 9999;
    text-align: center;
    opacity: 1;
    overflow: hidden;
    .loginIn {
      display: inline-block;
      width: 240px;
      height: 100%;
    }
    nav {
      line-height: 36px;
      background: #fff;
    }
    .register {
      display: inline-block;
      width: calc(100% - 280px);
      height: 100%;
    }
    .close {
      display: inline-block;
      width: calc(100% - 460px);
      height: 100%;
      cursor: pointer;
    }
    .form {
      position: relative;
      width: 100%;
      height: 304px;
      background: url("../../assets/imags/1000.jpg") no-repeat;
      .box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200px;
        transform: translate(-50%, -50%);
        .username, .password {
          position: relative;
          width: 100%;
          height: 24px;
          margin-top: 20px;
          background: #fff;
          border: 1px solid #f3f3f3;
          input {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: calc(100% - 40px);
            padding: 0 5px 0 0;
            outline: none;
            border: none;
          }
        }
        .username {
          background: url("../../assets/imags/username.png") no-repeat #fff;
        }
        .password {
          background: url("../../assets/imags/password.png") no-repeat #fff;
        }
        .btn {
          margin-top: 20px;
          input {
            padding: 5px 10px;
            border: none;
            cursor: pointer;
          }
        }
      }
    }
  }

  .active {
    background: #0650a0;
  }
</style>
