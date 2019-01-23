<template>
    <div class="toppage">
        <Xheader  />
       <Xbanner />
       <Xbannerb />
       <Xshoplist />
       <Xbox />
       <XTotop />
       <Xrecommendt />
       <Xrecommend />
    </div>
</template>
<script>
// 引用组件
import Xheader from '../components/Xheader.vue';
import Xbanner from '../components/Xbanner.vue';
import Xbannerb from '../components/Xbannerb.vue';
import Xshoplist from '../components/Xshoplist.vue';
import Xbox from '../components/Xbox.vue';
import XTotop from '../components/XTotop.vue';
import Xrecommend from '../components/Xrecommend.vue';
import Xrecommendt from '../components/Xrecommendt.vue';
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
    Xbanner,
    Xshoplist,
    Xbox,
    XTotop,
    Xrecommend,
    Xbannerb,
    Xrecommendt
    // Xsearch,
    // Xpanel,
    // Xgallery,
    // Xloading
  },
  destroyed() {
  }
}
</script>
<style scoped>
.toppage{
  background:#EFEFF4;
  padding-bottom:15%;
  padding-top:15%;
}

</style>

