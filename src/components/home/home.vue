<template>
  <div>
    <HeaderV/>
    <div style="margin-top: 10px;">
      <Crf/>
    </div>
    <div class="auto w1200 p70 clear" style="margin-top: 10px;">
      <Knowledge></Knowledge>
    </div>

    <FooterV/>
  </div>
</template>

<script>
  import HeaderV from  "../header/header.vue"
  import FooterV from  "../footer/footer.vue"
  import  Crf from "../carouselFigure/carouse.vue"
  import Knowledge from "../index/knowledge.vue"
  export default {
    data(){
      return {}
    },
    components: {HeaderV, FooterV, Crf,Knowledge},
    methods: {}
  }
</script>

