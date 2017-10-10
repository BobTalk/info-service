<template>
  <div>
    <HeaderV/>
    <ul>
      <li v-for="(value,index) in knowledgeList">
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
    }
  }
</script>

<style scoped>

</style>
