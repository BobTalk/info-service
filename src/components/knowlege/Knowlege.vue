<template>
  <div>
    <HeaderV/>
    <main class="main">
      <div class="position auto w1200">
        <span>当前位置: </span>
        <router-link to="/">首页</router-link>
        <span>>></span>
        <router-link to="/">{{nodeName}}</router-link>
      </div>
      <div class="content">
        <div class="summary auto w1200 p70">
          <ul class="item_list clear" ref="knowledge">
            <li v-for="(value,index) in knowledgeList" class="list">
              <i class="wire"></i>
              <span @click="eve" :data-contentId="value.CONTID">{{value.NAME}}</span>
              <span :data-contentId="value.CONTID" style="float: right">{{value.updateTime | formatTime}}</span>
              <span v-show="false"  ref="nodeName">{{value.nodeName}}</span>
            </li>
          </ul>
          <Pagination :message="dataList"></Pagination>
        </div>
      </div>
    </main>
    <FooterV/>
  </div>
</template>

<script>
  import HeaderV from  "../header/Header.vue"
  import FooterV from  "../footer/Footer.vue"
  import {mapState} from 'vuex'
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
        nodeName:""
      }
    },
    components: {HeaderV, FooterV, Pagination},
    computed: {
      ...mapState(['knowledgeList']),
    },
    methods: {
      eve: function (event) {
        var contentId = event.target.getAttribute('data-contentId');
        this.$root.$emit('change', contentId);
        this.$router.push({name: 'PoliyDetail', query: {contentId: contentId}})
      }
    },
    //创建前状态
    beforeCreate: function () {
      this.$http.get('/getAllInfo', {params: {id: 18}}).then((res) => {
        this.$store.state.knowledgeList = res.body;
      }, (err)=> {
        console.log(err);
      })
    },
    //更新完成状态
    updated: function () {
      this.dataList = this.$refs.knowledge.children;
      this.nodeName = this.$refs.nodeName[0].innerText;
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  [data-contentId] {
    position: relative;
    cursor: pointer;
    z-index: 999;
  }

  .position {
    line-height: 30px;
    padding: 5px 70px;
    box-sizing: border-box;
  }

  .content {
    background: #fff;
  }

  .item_list {
    padding: 10px 0;
    overflow: hidden;
    .list {
      position: relative;
      padding: 5px 20px;
      line-height: 30px;
      margin-top: 10px;
      background: #f3f3f3;
      &:hover .wire {
        height: 100%;
      }
      &:hover [data-contentId] {
        color: #fff;
      }
      .wire {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        z-index: 88;
        background: -webkit-linear-gradient(left, #0068b7, #4197d3, #8ccef4);
        transition: height .5s linear 0s;
      }
    }
  }

</style>

