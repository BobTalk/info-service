<template>
  <div class="story">
    <i class="gradients"></i>
    <figure class="top">
      <a style="display: inline-block;width: 16px;height: 19px;">
        <img :src="img.src" alt="">
      </a>
      <router-link :to="{name:'story'}" class="title">{{title}}</router-link>
    </figure>
    <ul class="content">
      <li class="clear" v-for="(data,key) in storyList">
        <div style="float: left">
          <i class="icon"></i>
        </div>
        <div style="float: right;width: calc(100% - 20px)">
          <!--<router-link :to="{name:'StoryDetail',query:{id:data.CONTID}}">{{data.NAME}}</router-link>-->
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
        title: "创业故事",
        img: {src: require('../../assets/imags/cyzs.png')},
      }
    },
    components: {},
    computed: {
      ...mapState(['storyList']),
      ...mapGetters({content: "content"})
    },
    methods: {
      ...mapActions({act: "increment"}),
      ...mapMutations(["increment"]),
      eve: function (event) {
        var contentId = event.target.getAttribute('data-contentId');
        this.$root.$emit('change', contentId);
        this.$router.push({name: 'StoryDetail', query: {contentId: contentId}})
      }
    },
    //创建前状态
    beforeCreate: function () {
      this.$http.get('/getAllInfo', {params: {id: 22}}).then((res) => {
      if (res.body) {
        this.$store.state.storyList = res.body;
      } else {
        this.$store.state.storyList = res.data;
      }
      })
    },
    //创建完成状态
    created: function () {
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

  .story {
    float: right;
    position: relative;
    display: inline-block;
    width: calc(100% - 232px - 559px - 20px);
    height: 632px;
    background: #fff;
    overflow: hidden;
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
      height: calc(632px - 47px);
      padding: 0 10px 0;
      overflow: hidden;
      box-sizing: border-box;
      li {
        width: 210px;
        line-height: 20px;
        .icon {
          display: inline-block;
          width: 0;
          height: 0;
          border: 5px solid transparent;
          border-bottom-color: #d3d3d3;
          vertical-align: text-top;
        }
        &:hover a {
          color: #0068b7;
        }
        &:hover .icon {
          border-bottom-color: #0068b7;
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
