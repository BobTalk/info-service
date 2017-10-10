<template>
  <div>
    <HeaderV/>
    <ul>
      <li v-for="(value,index) in policyList">
        <!--<router-link :to="{name:'PoliyDetail',query:{contentId:value.CONTID}}"tag="p" @click="eve">{{value.NAME}}</router-link>-->
        <p @click="eve" :data-contentId="value.CONTID">{{value.NAME}}</p>
      </li>
    </ul>
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
  [data-contentId]{
    cursor: pointer;
  }
</style>
