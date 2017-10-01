<template>
  <form class="form">
    <div class="box">
      <div class="username">
        <input type="text" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="password">
        <input type="password" placeholder="请输入密码" v-model="password">
      </div>
      <!-- <div class="uploadfile">
         <input type="file" placeholder="请选择文件" @change="getFile($event)">
       </div>-->
      <div class="btn">
        <input type="button" value="登 录" @click="submitForm($event)">
      </div>
    </div>
  </form>
</template>

<script>
  import  cookie from '../cookie/cookieFormate'
  export default {
    data(){
      return {
        username: '',
        password: '',
        file: ''
      }
    },
    components: {},
    computed: {},
    methods: {
      getFile: function (event) {
        this.file = event.target.files[0];
        /*console.log(this.file);*/
      },
      submitForm: function (event) {
        event.preventDefault();
        let data = {};
        data['username'] = this.username;
        data['password'] = this.password;
        /*data.append('file', this.file);*/
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        this.$http.post('/userInfo', data, {emulateJSON: true}).then((res)=> {
          if (res.status === 200) {
            if (res.body.length > 0) {
              cookie.setCookie('name', res.body[0].username)
              console.log(this.$route);
              //this.$router.push({name:'home'})
              /*重新刷新当前页面*/
              document.location.reload();
            }
          } else {

          }
        })
      }
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
