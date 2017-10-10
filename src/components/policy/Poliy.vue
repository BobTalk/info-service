<template>
  <div>
    <HeaderV/>
    <main class="main auto w1200 p70">
      <div class="position">
        <span>当前位置: </span>
        <router-link to="/">首页</router-link>
        <span>>></span>
        <router-link to="/">创业政策</router-link>
      </div>
      <div class="content">
        <div class="summary">
          <ul>
            <li v-for="(value,index) in policyList">
              <p @click="eve" :data-contentId="value.CONTID">{{value.NAME}}</p>
            </li>
          </ul>
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
  export default {
    data(){
      return {}
    },
    components: {HeaderV, FooterV},
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
        this.$root.$emit('change', contentId);
        this.$router.push({name: 'PoliyDetail', query: {contentId: contentId}})
      }
    }
  }
</script>

<style scoped>
  [data-contentId] {
    cursor: pointer;
  }

  .main {

  }

  .position {
    height: 30px;
    line-height: 30px;
    padding: 5px 0;
  }

  .content {
    background: #fff;
  }
</style>
