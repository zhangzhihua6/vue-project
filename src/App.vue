<template>
  <div id="app">
    <!-- <Xheader />
    <Xsearch />
    <Xpanel /> -->
    <router-view></router-view>
    <Xfooter/>
  </div>
</template>

<script>
// 引用组件
// import Xheader from './components/Xheader.vue'
// import Xsearch from './components/Xsearch.vue'
// import Xpanel from './components/Xpanel.vue'
import Xfooter from './components/Xfooter.vue'

export default {
  name: 'app',
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    // Xheader,
    // Xsearch,
    // Xpanel,
    Xfooter
  }
}
</script>

<style>

</style>
