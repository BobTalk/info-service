<template>
  <div style="box-shadow: 0 3px 3px #c7c7c7, -10px 0 3px #f5f5f5, 10px 0 3px #f5f5f5; background: #fff">
    <div class="auto w1200">
      <div class="navbar p70 clear">
        <div class="container-fluid">
        <div class="logo navbar-brand fl">
          <img src="../../assets/imags/footerlogo.png" alt="">
        </div>
        <ul class="fl">
          <li class="navbar-brand">
            <router-link v-for="(value,key) in navs" :to="value.link">{{value.name}}</router-link>
          </li>
        </ul>
        <div class="info fr">
          <input type="button" class="btn btn-default navbar-btn" v-if="flag" @click="act(optionLogin)" value="登录"/>
          <input type="button" class="btn btn-default navbar-btn" v-if="flag" @click="act(optionRegister)" value="注册"/>
          <router-link to="#" v-if="!flag" style="color: #0000cc">{{username}}</router-link>
          <input type="button" class="btn btn-default navbar-btn" v-if="!flag" @click="loginout" value="退出"/>
        </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import  {mapActions} from 'vuex'
  import cookie from '../../assets/js/cookieFormate'
  export default {
    data(){
      return {
        username: "hyq",
        flag: true,
        optionLogin: {flag: true, login: 'login'},
        optionRegister: {flag: true, login: 'register'},
        navs: [
          {link: '/', name: '首页'},
          {link: '/policy', name: '创业政策'},
          {link: '/knowledge', name: '创业知识'},
          {link: '/story', name: '创业故事'},
          {link: '/directive', name: 'test'}
        ]
      }
    },
    components: {},
    computed: {},
    methods: {
      loginout: function () {
        cookie.delCookie('name');
        document.location.reload();
      },
      ...mapActions({act: "login"}),
    },
    //挂载完成状态
    mounted: function () {
      var cookieVal = cookie.getCookie('name');
      if (cookieVal != null) {
        this.username = unescape(cookieVal);
        this.flag = false
      }
    },
  }
</script>

<style scoped>
  @import "../../style/reset.css";

  .head {
    height: 82px;
    width: 100%;
    line-height: 82px;
    font-size: 14px;
    color: #363636;
  }

  .logo {
    width: 140px;
    margin-right: 70px;
  }

  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  a {
    margin-right: 20px;
  }

  .info a {
    border: 1px solid #f3f3f3;
    padding: 5px 10px;
    color: #c2c2c2;
    border-radius: 3px;
  }

  [type='button'] {
    padding: 2px 5px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .navbar-brand{
    font-size: 14px;
  }
</style>
