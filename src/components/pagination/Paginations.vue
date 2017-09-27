<template>
  <div v-model="message">
    <ul class="pagination">
      <li v-show="current != 0" @click="goto(0)">
        <button>首页</button>
      </li>
      <li v-show="current != 0" @click="current-- && goto(current)">
        <button>PRE</button>
      </li>
      <li v-for="index in pages" @click="goto(index-1)" :key="index">
        <button :class="{'active':current == index-1}">{{index}}</button>
      </li>
      <li v-show="allpage-1 != current && allpage != 0 " @click="goto(++current)">
        <button>NEXT</button>
      </li>
      <li v-show="allpage-1 != current && allpage != 0 " @click="goto(allpage-1)">
        <button>尾页</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['message'],
    data(){
      return {
        current: 0,
        /*每页显示条数*/
        showItem: 3,
        /*页面链接数*/
        showNum: 5,
        /*总共多少页*/
        allpage: 0,
        flag: true
      }
    },
    components: {},
    computed: {
      pages: function () {
        var pag = [];
        if (this.current < this.showNum / 3) { //如果当前的激活的项 小于要显示的条数
          //总页数和要显示的条数那个大就显示多少条
          var i = Math.min(this.showNum, this.allpage);
          while (i) {
            //添加
            pag.unshift(i--);
          }
        } else { //当前页数大于显示页数了
          var middle = this.current - Math.floor(this.showNum / 3),//从哪里开始
            i = this.showNum;
          if (middle > (this.allpage - this.showNum)) {
            middle = (this.allpage - this.showNum) + 1
          }
          while (i--) {
            if (middle > 0) {
              pag.push(middle++);
            } else {
              middle++
            }
          }
        }
        return pag
      }
    },
    methods: {
      goto: function (index) {
        for (var i = 0; i < this.message.length; i++) {
          this.message[i].style.display = "none"
        }
        for (var i = index * this.showItem; i < (index + 1) * this.showItem; i++) {
          if (this.message[i]) {
            this.message[i].style.display = "block"
          }
        }
        if (index == this.current) return;
        this.current = index;
        //这里可以发送ajax请求
      },
    },
    //更新完成状态
    updated: function () {
      this.allpage = Math.ceil(this.message.length / this.showItem);
      if (this.flag) {
        this.goto(0);
        this.flag = false
      }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .pagination {
    margin: 0 auto;
  }

  li {
    display: inline-block;
    border: 1px solid #f3f3f3;
  }

  button {
    border: none;
    width: 40px;
    padding: 5px;
    cursor: pointer;
    user-select: none;
  }
</style>
