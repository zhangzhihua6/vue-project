<template>
  <div>
    <div
      class="listBox"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <!---->
      <div class="product_item" v-for="(n,index) in date" :key="index">
        <div class="item_div">
          <div class="product_img">
            <!---->
            <img src alt class="shade_img" style="display: none;">
            <img :src="n.goods_image" class="photo">
          </div>
          <div class="product_info">
            <div class="product_title" v-text="n.goods_name"></div>
          </div>
          <div class="product_price">
            <span class="product_price_l">￥</span>
            <span v-text="n.goods_price"></span>
            <!---->
          </div>
        </div>
      </div>

      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { InfiniteScroll } from "mint-ui";

Vue.use(InfiniteScroll);
export default {
  data() {
    return {
      date: []
    };
  },
  methods: {
    async getdate() {
      let data = await this.$axios.get("http://localhost:3000/yubazha");
      this.date = this.date.concat(data.data.data);
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.getdate();
        this.loading = false;
      }, 1000);
    },
    menu() {
      this.scroll =window.scrollY;
      if(this.scroll>=10){
        this.isshow='block';
      }
      if(this.scroll<=10){
        this.isshow='none';
      }
    }
  },
  created() {
    this.getdate();
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  }
};
</script>
<style scoped>
</style>
