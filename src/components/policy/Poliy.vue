<template>
  <div>
    <HeaderV/>
    <ul>
      <li v-for="(value,index) in policyList"  >
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
      return {

      }
    },
    components: {HeaderV,FooterV},
    computed: {
      ...mapState(['policyList']),
    },
    methods: {
      eve:function (event) {
        var contentId = event.target.getAttribute('data-contentId');
        this.$root.$emit('change',contentId);
        this.$router.push({name:'PoliyDetail'})
      }
    }
  }
</script>

<style scoped>

</style>
