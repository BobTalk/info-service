<template>
  <div>
    <HeaderV></HeaderV>
    <div class="position auto w1200 p70">
      <span>当前位置: </span>
      <router-link to="/">首页</router-link>
      <span v-if="nodeName != '首页'">&gt;&gt;</span>
      <router-link to="#" v-if="nodeName != '首页'">{{nodeName}}</router-link>
      <span>&gt;&gt;</span>
      <router-link to="#">{{title}}</router-link>
    </div>
    <div class="white" style="margin-bottom: 10px;padding: 10px 0">
      <div v-for="(value,index) in contentDetail" class="auto w1200 p70 ">
        <h1 ref="title">{{value.NAME}}</h1>
        <span v-show="false" ref="nodeName">{{value.nodeName}}</span>
        <div class="text" v-html="value.contents"></div>
      </div>
    </div>
    <FooterV></FooterV>
  </div>
</template>

<script>
  import HeaderV from  "../header/Header.vue"
  import FooterV from  "../footer/Footer.vue"
  import {mapState} from  'vuex'
  import Formate from '../../assets/js/formate'
  export default {
    data(){
      return {
        nodeName: '',
        title: ''
      }
    },
    created() {
      var url = window.location.href;
      this.$root.$on('change', (data) => {
        this.$http.get('/getContent', {params: {id: data}}).then((res) => {
          this.$store.state.contentDetail = res.body;
        }, (err)=> {
          console.log(err);
        })
        return
      });
      var urlId = Formate.urlFormate(url);
      this.$http.get('/getContent', {params: {id: urlId.contentId}}).then((res) => {
        this.$store.state.contentDetail = res.body;
      }, (err)=> {
        console.log(err);
      })
    },
    computed: {
      ...mapState(['contentDetail']),
    },
    components: {HeaderV, FooterV},
    methods: {},
    //更新完成状态
    updated: function () {
      this.title = this.$refs.title[0].innerText;
      this.nodeName = this.$refs.nodeName[0].innerText;
    },
  }
</script>

<style scoped>
  .position {
    line-height: 30px;
    padding: 5px 70px;
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    padding: 10px;
  }

  .text {
    text-indent: 2em;
    line-height: 30px;
  }
</style>
