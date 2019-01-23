<template>
  <div class="page_search" style="background:#fff;">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-1" style="text-align: left;">
          <span class="cat">分类</span>
        </div>
        <div class="col-xs-9 search_box">
          <span class="search_icon"></span>
          <input type="text" placeholder="请输入搜索关键字" class="search_input" @click="haveborder">
        </div>
        <div class="col-xs-2">
          <span ref="border" class="search_btn" :class="{'haveborder':haveBorder}">搜索</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      haveBorder: false
    };
  },
  methods: {
    haveborder() {
      this.haveBorder = !this.haveBorder;
    }
  }
};
</script>


<style scoped>
.page_search{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:99;
}
.search_btn {
  display: block;
  position: absolute;
  width: 40px;
  text-align: center;
  line-height: 30px;
  z-index: 3;
  top: 8px;
  left: 81%;
  color: #333333;
  border: 1px solid #fff;
  border-radius: 6px;
}
.search_input {
  width: 100%;
  padding: 7px 50px 7px 32px !important;
  border-radius: 20px;
  background: #eeeeee;
}
.haveborder {
  border: 1px solid rgb(204, 204, 204);
}
</style>


