<template>
  <div style="width: 100%;height: 100%;">
    <div v-if="loginFlag" class="show-login"></div>
    <Login v-if="loginFlag"></Login>
    <router-view></router-view>
  </div>
</template>

<script>
  import  {mapState} from 'vuex'
  import  Login from './components/login/Login.vue'
  export default {
    data(){
      return {
      }
    },
    components: {Login},
    computed: {
      ...mapState(['loginFlag']),
    },
    methods: {
    },
  }
</script>

<style scoped>
  .show-login {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    z-index: 8888;
    opacity: .5;
  }

</style>
