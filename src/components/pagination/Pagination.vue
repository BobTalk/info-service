<template>
  <div class="pagination">
    <div class="clear" style="position: relative;">
      <div class="page fr" v-model="message">
        <button @click="upPage(0)">首页</button>
        <button @click="prePage()">上一页</button>
        <span ref="barcon"></span>
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
        showNum: 2,
        /*总页数*/
        totalNum: 0,
        /*分页链接接数(5个)*/
        pageNum: 5,
        strC: '',
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
        if (this.pageNum >= this.totalNum) {
          this.startPage = 0;
          this.endPage = this.totalNum - 1;
        } else if (num < PageNum_2) {
          this.startPage = 0;
          this.endPage = this.totalNum - 1 > this.PageNum ? this.PageNum : this.totalNum - 1;
        } else {
          this.startPage = num + PageNum_3 >= this.totalNum ? this.totalNum - this.PageNum - 1 : num - PageNum_2 + 1;
          var t = this.startPage + this.pageNum;
          this.endPage = t > this.totalNum ? this.totalNum - 1 : t;
        }
        for (var i = this.startPage; i <= this.endPage; i++) {
          if (i == num) {
            this.strC += '<button ref="clickThing" style="display:inline-block;text-align:center;width:20px;color:#fff;background:#00a0ea;font-weight:700;" @click="upPage(' + i + ')">' + (i + 1) + '</button> '
          } else {
            this.strC += '<button @click="upPage(' + i + ')">' + (i + 1) + '</button> '
          }
        }
        //this.strE2 = num + 1 + "/" + this.totalNum + "页" + "  共" + this.message.length + "条";
        this.$refs.barcon.innerHTML = this.strC
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
      this.upPage(0);
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
  }
</style>
