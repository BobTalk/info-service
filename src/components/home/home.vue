<template>
  <div>
    <HeaderV/>
    <div style="margin-top: 10px;">
      <Crf/>
    </div>
    <div class="auto w1200 p70 clear" style="margin-top: 10px; height: 632px;overflow: hidden">
      <Knowledge/>
      <info-middle/>
      <Story/>
    </div>
    <FooterV/>
  </div>
</template>

<script>
  import HeaderV from  "../header/header.vue"
  import FooterV from  "../footer/footer.vue"
  import  Crf from "../carouselFigure/carouse.vue"
  import Knowledge from "../index/Knowledge.vue"
  import InfoMiddle from "../index/Info-middle.vue"
  import Story from '../index/Story.vue'
  export default {
    data(){
      return {}
    },
    components: {HeaderV, FooterV, Crf, Knowledge, InfoMiddle,Story},
    methods: {}
  }
</script>

