<template>
  <div class="middle">
    <ul ref="content">
      <li class="clear" v-for="(value,key) in indexList">
        <div class="icon">
          <img :src="value.icon" alt="">
        </div>
        <div class="content">
          <p @click="eve" :data-contentId="value.CONTID">{{value.NAME}}</p>
          <p class="time">{{value.updateTime | formatTime}}</p>
        </div>
      </li>
    </ul>
    <pagination :message="dataList"></pagination>
  </div>
</template>

<script>
  import  {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  import Pagination from '../pagination/Paginations.vue'
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
        dataList: [],
        middleInfo: []
      }
    },
    components: {Pagination},
    computed: {
      ...mapState(['indexList']),
      ...mapGetters({content: "content"})
    },
    methods: {
      ...mapActions({act: "increment"}),
      ...mapMutations(["increment"]),
      eve: function (event) {
        var contentId = event.target.getAttribute('data-contentId');
        this.$root.$emit('change', contentId);
        this.$router.push({name: 'middleDetail', query: {contentId: contentId}})
      }
    },
    //创建前状态
    beforeCreate: function () {
      this.$http.get('/getAllInfo', {params: {id: 26}}).then((res) => {
        this.$store.state.indexList = res.body;
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
      this.dataList = this.$refs.content.children;
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
      position: relative;
      float: right;
      height: 125px;
      width: calc(100% - 210px);
      .time {
        position: absolute;
        right: 0;
        bottom: 0;
      }
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
