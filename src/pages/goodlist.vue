<template>
    <div class="toppage">
        <Xheader  />
        <Xbannerb />
        <Xrecommend />
        <!-- <Xfooter /> -->
    </div>
</template>
<script>
// 引用组件
import Xheader from '../components/Xheader.vue';
import Xbannerb from '../components/Xbannerb.vue';
import Xrecommend from '../components/Xrecommend.vue';
// import Xfooter from '../components/Xfooter.vue';
export default {
  // data(){
  //   return {
  //     name:"微信"
  //   }
  // },
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xheader,
    Xbannerb,
    Xrecommend,
    // Xfooter
  },
  destroyed() {
  }
}
</script>
<style scoped>
.toppage{
  background:#EFEFF4;
  padding-bottom:10%;
  padding-top:15%;
}

</style>

