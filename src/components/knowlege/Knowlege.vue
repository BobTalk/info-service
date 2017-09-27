<template>
  <div>
    <HeaderV/>
    <p v-for="(data,key) in dataList">
      {{data.NAME}}
    </p>
    <FooterV/>
  </div>
</template>

<script>
  import HeaderV from  "../header/Header.vue"
  import FooterV from  "../footer/Footer.vue"
  export default {
    data(){
      return {
        dataList:[]
      }
    },
    components: {HeaderV, FooterV},
    methods: {},
    created(){
      this.$http.get('/getKnowledgeInfo').then((res) => {
        this.$store.state.policyList = res.body;
      })
    },
    mounted(){
      //console.log(this.$store.state.policyList);
    }
  }
</script>

<style scoped>

</style>
