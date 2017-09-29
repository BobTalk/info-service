<template>
  <div class="login">
    <nav>
      <p class="loginIn">登录</p>
      <p class="register">注册</p>
      <p class="close">X</p>
    </nav>
    <form class="form">
      <div>
        <input type="text">
      </div>
      <div>
        <input type="password">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return {}
    },
    components: {},
    methods: {}
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
    padding: 10px;
    opacity: 1;
    overflow: hidden;
    .loginIn{
      display: inline-block;
      width: 240px;
      height: 100%;
      padding: 10px 0;
    }
    .register{
      display: inline-block;
      width: calc(100% - 280px);
      height: 100%;
      background: #0650a0;
    }
    .close{
      display: inline-block;
    }
    .form{
      width: 100%;
      height: 304px;
      background: url("../../assets/imags/1000.jpg") no-repeat;
    }
  }
</style>
