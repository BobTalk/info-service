<template>
  <div class="banner">
    <!--切换的图片部分-->
    <div class="bannerImg">
      <!--<transition-group tag="div">-->
      <span v-for="(v,i) in banners" :key="i" :style="{opacity:(i+1)==n?'1':'0'}" class="active">
        <img :src="v.src" alt="">
      </span>
      <!--</transition-group>-->
    </div>
    <!-- 切换的小按钮部分-->
    <ul class="bannerBtn clear-fix">
      <li v-for="(value,num) in banners">
        <a href="javascript:;" :style="{background:num+1==n?'#ff7800':''}" @click='change(num+1)' class='aBtn'></a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        banners: [
          {id: 1, link: 'www.sohu.com', src: require('./../../assets/imags/banner1.jpg')},
          {id: 2, link: 'www.githup.com', src: require('./../../assets/imags/banner2.jpg')},
          {id: 3, link: 'www.bjgjj.gov.com.cn', src: require('./../../assets/imags/banner3.jpg')},
          {id: 4, link: 'www.bjgjj.gov.com.cn', src: require('./../../assets/imags/banner5.jpg')},
          {id: 5, link: 'www.bjgjj.gov.com.cn', src: require('./../../assets/imags/banner4.jpg')}],
        n: 1,　　　　　　　// 图片的index。
        bFlag: true,      // 锁定
        timer1: '',　　　　// 这是bFlag定时器的数据
        timer2: '',　　　　// 这是自动播放（next（））定时器的数据
        timer3: '',　　　　// 这是打开浏览器时，初始运动定时器的数据
      }
    },
    methods: {
      next(){
        // 下一张　　　
        // 为了避免连续点击。让bFlag运动结束后再变为true。　　　　　　　　　　　　　　
        if (this.bFlag) {
          this.bFlag = false;
          this.clearT();　　　　　　　　　   // 运动之前，清除所有定时器。
          this.n = this.n == this.banners.length ? 1 : this.n + 1;　  // 下一张，如果是第this.banners.length张，就返回第一张。
          // 调用timeout函数，延迟进入下一次轮播，以便可以点击切换。
          this.timeout();
        }
      },
      clearT(){
        // 清除所有定时器　　　　　　　　　　　　　　　
        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        clearTimeout(this.timer3);
      },
      timeout(){
        // 运动结束后设置bFlag为true，并且3秒后调用next，进行下一次运动。
        // 运动时间是1s。
        this.timer2 = setTimeout(()=> {
          this.bFlag = true
        }, 1000);
        this.timer1 = setTimeout(()=> {
          this.next()
        }, 3000);
      },
      change(num){
        // 点击按钮，切换到对应图片，需要获取index。
        if (this.bFlag) {
          this.bFlag = false;
          this.clearT();
          this.n = num;// 将显示图片变为选中的那一张。　　　　
          this.timeout()
        }
      }
    },
    mounted(){
      this.timer3 = setTimeout(this.next, 3000);
    }
  }

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .banner {
    position: relative;
  }

  .bannerImg {
    position: relative;
    height: 360px;
    overflow: hidden;
  }

  .bannerImg span {
    position: absolute;
    top: 0;
    left: 0;
  }

  .bannerImg span.active {
    transition: all 1s;
  }

  .bannerBtn {
    position: absolute;
    left: 50%;
    margin-left: -100px;
    bottom: 22px;
    text-align: center;
  }

  .bannerBtn li {
    margin: 0 13px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    float: left;
    background: rgba(255, 255, 255, .4);
  }

  .bannerBtn li a {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin: 3px;
  }

  .bannerBtn li a.aBtn {
    transition: all .6s ease;
  }
</style>
