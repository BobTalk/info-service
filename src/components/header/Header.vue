<template>
  <div style="box-shadow: 0 3px 3px #c7c7c7, -10px 0 3px #f5f5f5, 10px 0 3px #f5f5f5; background: #fff" >
    <div class="auto w1200">
      <div class="head p70 clear">
        <div class="logo fl">
          <img src="../../assets/imags/footerlogo.png" alt="">
        </div>
        <ul class="fl">
          <li>
            <router-link to="/">首页</router-link>
            <router-link to="/policy">创业政策</router-link>
            <router-link to="/knowledge">创业知识</router-link>
            <router-link to="/story">创业故事</router-link>
          </li>
        </ul>
        <div class="info fr">
          <button @click="act(optionLogin)">登录</button>
          <button @click="act(optionRegister)">注册</button>
          <router-link to="#" v-show="!flag">{{username}}</router-link>
          <router-link to="/loginout" v-show="!flag">退出</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import  {mapActions} from 'vuex'
  export default {
    data(){
      return {
        username: "hyq",
        flag: true,
        optionLogin:{flag:true,login:'login'},
        optionRegister:{flag:true,login:'register'},
      }
    },
    components: {},
    computed: {
    },
    methods: {
      ...mapActions({act: "login"}),
    }
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
    height: 40px;
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
</style>
