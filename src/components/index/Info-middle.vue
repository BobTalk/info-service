<template>
  <div class="middle">
    <ul ref="content">
      <li class="clear" v-for="(value,key) in middleInfo">
        <div class="icon">
          <img :src="value.icon" alt="">
        </div>
        <div class="content">
          <p class="summary">
            <router-link :to="{name:'home',query:{id:value.id}}">{{value.info}}</router-link>
          </p>
          <p class="time">{{value.time}}</p>
        </div>
      </li>
    </ul>
    <pagination :message="dataList"></pagination>
  </div>
</template>

<script>
  import Pagination from '../pagination/Pagination.vue'
  export default {
    data(){
      return {
        dataList:[],
        middleInfo: [
          {id: '1', icon: require('../../assets/imags/1.jpg'), info: '测试数据信息', time: '2017-8-9'},
          {id: '2', icon: require('../../assets/imags/2.jpg'), info: '测试数据信息', time: '2017-8-9'},
          {id: '2', icon: require('../../assets/imags/2.jpg'), info: '测试数据信息', time: '2017-8-9'},
          {id: '2', icon: require('../../assets/imags/2.jpg'), info: '测试数据信息', time: '2017-8-9'},
          {id: '2', icon: require('../../assets/imags/2.jpg'), info: '测试数据信息', time: '2017-8-9'},
          {id: '2', icon: require('../../assets/imags/2.jpg'), info: '测试数据信息', time: '2017-8-9'},
        ]
      }
    },
    components: {Pagination},
    computed: {
      attribute: function () {
      }
    },
    methods: {},
    //创建前状态
    beforeCreate: function () {
    },
    //创建完成状态
    created: function () {
    },
    //挂载前状态
    beforeMount: function () {
    },
    //挂载完成状态
    mounted: function () {
      this.dataList = this.$refs.content.children;
    },
    //更新前状态
    beforeUpdated: function () {
    },
    //更新完成状态
    updated: function () {
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
  .middle {
    float: left;
    width: 559px;
    margin-left: 10px;
    overflow: hidden;
    .icon {
      float: left;
      width: 200px;
      height: 125px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      float: right;
      width: calc(100% - 210px);
    }
    li {
      margin-bottom: 10px;
      padding: 10px;
      background: #fff;
      &:hover {
        box-shadow: inset -1px 0 5px #bed7ea, 0 -1px 5px #bed7ea, 0 1px 5px #bed7ea, 1px 0 5px #bed7ea;
      }
    }
  }
</style>
