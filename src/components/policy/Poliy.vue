<template>
  <div>
    <HeaderV/>
    <main class="main">
      <div class="position auto w1200">
        <span>当前位置: </span>
        <router-link to="/">首页</router-link>
        <span>&gt;&gt;</span>
        <router-link to="#">{{nodeName}}</router-link>
      </div>
      <div class="content" v-cloak>
        <div class="summary auto w1200 p70">
          <ul class="item_list clear" ref="policy">
            <li v-for="(value,index) in policyList" class="list">
              <i class="wire"></i>
              <span @click="eve" :data-contentId="value.CONTID">{{value.NAME}}</span>
              <span v-show="false" ref="nodeName">{{value.nodeName}}</span>
              <span :data-contentId="value.CONTID" style="float: right">{{value.updateTime | date}}</span>
            </li>
          </ul>
          <Pagination :message="dataList" :showPage="showItem"></Pagination>
        </div>
      </div>
    </main>
    <FooterV/>
  </div>
</template>

<script>
  import HeaderV from  "../header/Header.vue"
  import FooterV from  "../footer/Footer.vue"
  import Pagination from '../pagination/Paginations.vue'
  import {mapState} from 'vuex'
  import moment from "moment" //时间格式化模块
  export default {
    filters: {
      date(val){
        return moment(val).format('MM月DD日')
      }
    },
    data(){
      return {
        dataList: [],
        //页面显示条数
        showItem: 10,
        nodeName: '',
      }
    },
    components: {HeaderV, FooterV, Pagination},
    computed: {
      ...mapState(['policyList']),
    },
    //创建前状态
    beforeCreate: function () {
      this.$http.get('/getAllInfo', {params: {id: 17}}).then((res) => {
        this.$store.state.policyList = res.body;
      })
    },
    methods: {
      eve: function (event) {
        var contentId = event.target.getAttribute('data-contentId');
        //把数据发送到详情页面
        this.$root.$emit('change', contentId);
        this.$router.push({name: 'PoliyDetail', query: {contentId: contentId}})
      }
    },
    //更新完成状态
    updated: function () {
      this.dataList = this.$refs.policy.children;
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
