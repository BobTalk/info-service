<template>
  <div class="policy">
    <i class="gradients"></i>
    <figure class="top">
      <a style="display: inline-block;width: 16px;height: 19px;">
        <img :src="img.src" alt="">
      </a>
      <router-link :to="{name:'policy',query:{nodeId:17}}" class="title">{{title}}</router-link>
    </figure>
    <ul class="content">
      <li class="clear" v-for="(data,key) in policyList">
        <div style="float: left">
          <i class="icon"></i>
        </div>
        <div style="float: right;width: calc(100% - 20px)">
          <!--<router-link :to="{name:'PoliyDetail',query:{contentId:data.CONTID}}">{{data.NAME}}</router-link>-->
          <p @click="eve" :data-contentId="data.CONTID">{{data.NAME}}</p>
          <p style="text-align: right;padding: 5px 0">{{data.updateTime | formatTime}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import  {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  import {formatDate} from '../../assets/js/data'
  export default {
    filters: {
      formatTime(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd');
      }
    },
    data(){
      return {
        title: "创业政策",
        img: {src: require('../../assets/imags/cyzc11.png')},
        /* policyList: [
         {id: '1', content: '的发撒撒旦发阿凡达复查士大夫v阿道夫v啊是非常啊v啊方法是打阿斯蒂芬撒地方山大发送的发热无法大师傅士大夫犯得上VS地方'}
         ]*/
      }
    },
    components: {},
    computed: {
      ...mapState(['policyList']),
      ...mapGetters({content: "content"})
    },
    methods: {
      /*LimitNumber: function (txt, num) {
       var str = txt;
       num = num || 25;
       if (txt.length > num) {
       str = str.substr(0, num) + '......';
       }
       return str;
       },*/
      ...mapActions({act: "increment"}),
      ...mapMutations(["increment"]),
      eve: function (event) {
        var contentId = event.target.getAttribute('data-contentId');
        this.$root.$emit('change', contentId);
        this.$router.push({name: 'PoliyDetail', query: {contentId: contentId}})
      }
    },
    //创建前状态
    beforeCreate: function () {
      this.$http.get('/getAllInfo', {params: {id: 17}}).then((res) => {
        if (res.body) {
          this.$store.state.policyList = res.body;
        } else {
          this.$store.state.policyList = res.data;
        }
      })
    },
    //创建完成状态
    created(){
      /*for (var key in this.policyList) {
       this.policyList[key].content = this.LimitNumber(this.policyList[key].content, 30)
       }*/
    },
    //挂载前状态
    beforeMount: function () {

    },
    //挂载完成状态
    mounted: function () {
    },
    //更新前状态
    beforeUpdated: function () {
    },
    //更新完成状态
    updated: function () {
      this.act(30)
    },
    //销毁前状态
    beforeDestroy: function () {
    },
    //销毁后状态
    destroyed: function () {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  [data-contentId] {
    cursor: pointer;
  }

  .policy {
    float: left;
    position: relative;
    display: inline-block;
    width: calc(100% - 830px);
    height: 283px;
    overflow: hidden;
    border: 1px solid #f0f3f6;
    background: #fff;
    .gradients {
      position: absolute;
      width: 100%;
      height: 2px;
      top: 0;
      left: 0;
      background: linear-gradient(to right, #0706cc, #2524ff, #615eed);
    }
    .top {
      margin: 0 0 0 10px;
      height: 47px;
      line-height: 47px;
      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
    .title {
      color: #000;
      vertical-align: sub;
    }
    .content {
      width: 100%;
      height: 230px;
      padding: 0 10px 0;
      overflow: hidden;
      box-sizing: border-box;
      li {
        width: 210px;
        line-height: 20px;
        .icon {
          display: inline-block;
          width: 5px;
          margin-left: 5px;
          height: 40px;
          border: 1px solid #f3f3f3;
          background: #d3d3d3;
          vertical-align: text-top;
        }
        &:hover a {
          color: #0068b7;
        }
        &:hover .icon {
          background: #0068b7;
        }
      }
      &::-webkit-scrollbar {
        width: 10px;
        background: #eee;
      }
      &::-webkit-scrollbar-thumb {
        background: #d2d2d2;
        background-clip: padding-box;
        border: 4px solid #d2d2d2;
        height: 10px;
      }
      &:hover {
        overflow-y: auto;
        overflow-x: hidden;
      }
    }
  }
</style>
