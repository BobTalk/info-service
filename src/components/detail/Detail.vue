<template>
  <div>
    <HeaderV></HeaderV>
    <div v-for="(value,index) in contentDetail">
      <p>{{value.NAME}}</p>
      <div  v-html="value.contents"></div>
    </div>
    <FooterV></FooterV>
  </div>
</template>

<script>
  import HeaderV from  "../header/Header.vue"
  import FooterV from  "../footer/Footer.vue"
  import {mapState} from  'vuex'
  export default {
    data(){
      return {}
    },
    created() {
      this.$root.$on('change', (data) => {
        this.$http.get('/getContent', {params: {id: data}}).then((res) => {
          this.$store.state.contentDetail = res.body;
        }, (err)=> {
          console.log(err);
        })

      });
    },
    computed: {
      ...mapState(['contentDetail']),
    },
    components: {HeaderV, FooterV},
    methods: {},
    beforeCreate() {

    }
  }
</script>

<style scoped>

</style>
