<template>
  <div class="pagination">
    <div class="clear" style="position: relative;">
      <div class="page fr" v-model="message">
        <button @click="upPage(0)">首页</button>
        <button @click="prePage()">上一页</button>
        <!--<button v-for="(value,key) in strC" @click="upPage(value-1)" :class="{active:nowPage == key}">{{value}}</button>-->
        <button>{{strC}}</button>
        <button @click="upPageFoot">下一页</button>
        <button @click="upPage(Math.ceil(message.length / showNum)-1)">尾页</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['message'],
    data(){
      return {
        page: 0,
        /*当前页码*/
        nowPage: 0,
        /*内容显示条数*/
        showNum: 3,
        /*总页数*/
        totalNum: 0,
        /*分页链接接数(5个)*/
        pageNum: 5,
        strC: [],
      }
    },
    components: {},
    computed: {
      attribute: function () {
      }
    },
    methods: {
      /*上一页*/
      prePage: function () {
        if (this.nowPage > 0) {
          this.upPage(--this.nowPage)
        }
      },
      /*下一页*/
      upPageFoot: function () {
        if (this.nowPage < Math.ceil(this.message.length / this.showNum) - 1) {
          this.upPage(++this.nowPage)
        }
      },
      /*首页/尾页*/
      upPage: function (num) {
        this.nowPage = num;
        for (var i = 0; i < this.message.length; i++) {
          this.message[i].style.display = "none"
        }
        for (var i = num * this.showNum; i < (num + 1) * this.showNum; i++) {
          if (this.message[i]) {
            this.message[i].style.display = "block"
          }
        }
        //分页链接变换
        var PageNum_2 = this.pageNum % 2 == 0 ? Math.ceil(this.pageNum / 2) + 1 : Math.ceil(this.pageNum / 2);
        var PageNum_3 = this.pageNum % 2 == 0 ? Math.ceil(this.pageNum / 2) : Math.ceil(this.pageNum / 2) + 1;
        var startPage, endPage;
        if (this.pageNum >= this.totalNum) {
          startPage = 0;
          endPage = this.totalNum - 1;
        } else if (this.nowPage < PageNum_2) {
          startPage = 0;
          endPage = this.totalNum - 1 > this.pageNum ? this.pageNum : this.totalNum - 1;
        } else {
          startPage = this.nowPage + PageNum_3 >= this.totalNum ? this.totalNum - this.pageNum - 1 : this.nowPage - PageNum_2 + 1;
          var t = startPage + this.pageNum;
          endPage = t > this.totalNum ? this.totalNum - 1 : t;
        }
        var _this = this;
        for (var i = startPage; i <= endPage; i++) {
          (function (i) {
            _this.strC = i;
            console.log(_this.strC);
          })(i)
        }
      }
    },
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

    },
    //更新前状态
    beforeUpdated: function () {
    },
    //更新完成状态
    updated: function () {
      this.totalNum = Math.ceil(this.message.length / this.showNum);
      //this.upPage(0);
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
  button {
    cursor: pointer;
    line-height: 20px;
    padding: 0 10px;
  }

  .active {
    background: #dd4444;
    color: #00B7FF;
  }
</style>
