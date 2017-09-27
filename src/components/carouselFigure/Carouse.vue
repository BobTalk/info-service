<template>
  <div class="auto w1200 p70 clear" style="position: relative">
    <policy></policy>
    <!--<ul>
      <li v-for="(todo,index) in todos">
        <time>{{todo.created | date}}</time>
      </li>
    </ul>-->

    <div class="carousel-wrapper" @mouseover="carouselOver" @mouseout="carouselOut">
      <!-- 图片容器 -->
      <div class="img-content">
        <!--
          这里初始化只加载第一张图片，用户点击或定时器再加载其他图片
          这种加载模式也可优化初始化页面加载速度
         -->
        <router-link :to="imgSrc.link">
          <img :src="imgSrc.src" :width="this.width" :height="this.height"/>
        </router-link>
      </div>
      <!-- 底部圆形小图标 -->
      <div class="indicator-content" ref="indicator">
        <ul class="indicator-list">
          <li class="indicator-item" v-for="(item, index) in defaultList" :key="item.id">
            <a class="indicator-icon" @mouseover="iconOver(index)" :class="index === pos ? 'active' : '' "></a>
          </li>
        </ul>
      </div>
      <!-- 上一张、下一张按钮 -->
      <div class="control-content">
        <div title="上一张" class="prev" @click="toggleImg('prev')"><</div>
        <div title="下一张" class="next" @click="toggleImg('next')">></div>
      </div>
    </div>
  </div>
</template>

<script>
  import policy from '../index/Policy.vue'
  import moment from "moment" //时间格式化模块
  import "moment/locale/zh-cn"//时间格式化模块 中国
  moment.locale("zh-cn")//时间格式化模块
  // 定义每个小图标的宽度
  const iconWidth = 30;
  export default {
    filters: {
      date(val){
        return moment(val).calendar()
      }
    },
    /*
     * 接收父组件的值,轮播图宽度、高度、相邻两张图片切换的间隔时间、轮播图路径数组
     */
    props: {
      width: {
        type: Number,
        default: 820
      },
      height: {
        type: Number,
        default: 283
      },
      //播放时间
      interval: {
        type: Number,
        default: 2000
      },
      carouselList: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data() {
      return {
        todos: [
          {created: Date.now()}
        ],
        // 子组件中模拟的轮播图数组，实际开发中应由父组件传入
        defaultList: [
          {id: 1, link: 'www.sohu.com', src: require('../../assets/imags/banner1.jpg')},
          {id: 2, link: 'www.githup.com', src: require('../../assets/imags/banner2.jpg')},
          {id: 3, link: 'www.bjgjj.gov.com.cn', src: require('../../assets/imags/banner3.jpg')},
          {id: 4, link: 'www.bjgjj.gov.com.cn', src: require('../../assets/imags/banner5.jpg')},
          {id: 5, link: 'www.bjgjj.gov.com.cn', src: require('../../assets/imags/banner4.jpg')}
        ],
        // 默认显示第一张图片，数组下标为0
        pos: 0,
        // 定时器
        startmove: ''
      }
    },
    created() {
      // 调用定时器
      this.startmove = setInterval(this.bannerMove, this.interval);
      // 动态计算底部小图标容器的宽度和水平居中
      this.$nextTick(()=> {
        this.$refs.indicator.style.width = iconWidth * this.defaultList.length + 'px';
        this.$refs.indicator.style.marginLeft = -(iconWidth / 2) * this.defaultList.length + 'px';
      })
    },
    computed: {
      // icon样式
      iconClass() {
        return '';
      },
      // 图片路径
      imgSrc() {
        return this.defaultList[this.pos];
      }
    },
    beforeDestroy() {
      // 组件销毁前,清除监听器
      clearInterval(this.startmove);
    },
    methods: {
      // 图片上、下一张切换
      toggleImg(type) {
        if (type === 'prev') {
          this.pos === 0 ? this.pos = this.defaultList.length - 1 : this.pos--;
        } else {
          this.pos === this.defaultList.length - 1 ? this.pos = 0 : this.pos++;
        }
      },
      // 小图标鼠标hover事件
      iconOver(index) {
        if (isNaN(index)) return;
        this.pos = index;
      },
      // 图片自动切换定时器方法
      bannerMove() {
        this.pos === this.defaultList.length - 1 ? this.pos = 0 : this.pos++;
      },
      // 鼠标移入图片区域，清除定时器，防止和用户切换图片事件冲突
      carouselOver() {
        clearInterval(this.startmove);
      },
      // 鼠标移出图片区域，开启定时器
      carouselOut() {
        this.startmove = setInterval(this.bannerMove, this.interval);
      }
    },
    components: {policy}
  };
</script>

<style scoped>
  @import "./carousel.scss";
</style>
