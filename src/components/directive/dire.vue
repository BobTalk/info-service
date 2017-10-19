<template>
  <div>
    <p type="text" v-focus="red" class="glyphicon glyphicon-ok">fdfdfdfd</p>
    <my-component></my-component>
  </div>
</template>

<script>
  import Vue from 'vue'
  /*自定义指令*/
  Vue.directive('focus', {
    inserted: function (el, binding) {
      el.style.background = binding.value
    }
  })
  /*自定义标签*/
  Vue.component('my-component', {
    template: '<h1>中国十九大会议在北京召开</h1>'
  })

  export default {
    data(){
      return {
        red: 'red'
      }
    },
    components: {},
    computed: {
      attribute: function () {
      }
    },
    methods: {},
    //创建前状态
    beforeCreate: function () {
    },
    //创建完成状态
    created: function () {
    },
    //挂载前状态
    beforeMount: function () {
    },
    //挂载完成状态
    mounted: function () {
    },
    //更新前状态
    beforeUpdated: function () {
    },
    //更新完成状态
    updated: function () {
    },
    //销毁前状态
    beforeDestroy: function () {
    },
    //销毁后状态
    destroyed: function () {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
