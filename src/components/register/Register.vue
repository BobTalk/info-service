<template>
  <form class="form" @submit.prevent="submit">
    <div class="box">
      <div class="username">
        <input type="text" placeholder="请输入用户名" v-model="register.username">
      </div>
      <div class="password">
        <input type="password" placeholder="请输入密码" v-model="register.password">
      </div>
      <div class="password">
        <input type="password" placeholder="请确认密码" v-model="register.surePassword">
      </div>
      <div class="btn">
        <input type="submit" value="注 册">
      </div>
    </div>
  </form>
</template>
<script>
  import  {mapActions} from 'vuex'
  import cookie from '../cookie/cookieFormate'
  export default {
    data(){
      return {
        register: {
          username: '',
          password: '',
          surePassword: ''
        },
        optionLogin: {flag: true, login: 'login'},
      }
    },
    components: {},
    methods: {
      ...mapActions({act: "login"}),
      submit: function () {
        var formData = this.register;
        this.$http.get('/userInfo', {params: {username: formData.username}}).then((result)=> {
          try {
            var resultName = result.body[0].username || undefined;
          } catch (e) {
          }
          if (resultName != formData.username) {
            if (formData.password != formData.surePassword) {
              alert("两次密码输入不一致")
            } else {
              this.$http.post('/register', formData).then((res)=> {
                cookie.setCookie('name', formData.username)
                /*重新刷新当前页面*/
                document.location.reload();
              })
            }
          } else {
            alert(result.body[0].username + " 已被注册！")
          }
        })
      }
    },
    //更新完成状态
    updated: function () {
      this.act(this.optionLogin)
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
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

  .active {
    background: #0650a0;
  }
</style>
