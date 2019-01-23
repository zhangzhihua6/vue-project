<template>
  <div class="classificationBox" style="background:#fff;">
    <!---->
    <!---->
    <!---->
    <div>
      <div>
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <a href="javascript:;" class="classification pull-left" @click="togoodlist">挂件</a>
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <a href="javascript:;" class="classification pull-left" @click="togoodlist">手镯</a>
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <a href="javascript:;" class="classification pull-left" @click="togoodlist">串珠/手链</a>
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <a href="javascript:;" class="classification pull-left" @click="togoodlist">耳饰</a>
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <a href="javascript:;" class="classification pull-left" @click="togoodlist">戒指</a>
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <a href="javascript:;" class="classification pull-left" @click="togoodlist">项链</a>
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <a href="javascript:;" class="classification pull-left" @click="togoodlist">摆件</a>
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <!---->
        <a href="javascript:;" class="classification pull-left" @click="togoodlist">更多</a>
        <!---->
        <!---->
        <!---->
        <!---->
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
      togoodlist(){
        this.$router.push({name:"goodlist"})
      }
    },
}
</script>
<style scoped>
.pull-left {
    float: left !important;
}
</style>
