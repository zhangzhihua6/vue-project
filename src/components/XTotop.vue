<template>
  <div>
    <div id="gotop" class="go-top" :style="{'display':`${isshow}`}">
      <div>
        <a href="javascript:;">
          <img src="../assets/customer.png" alt>
        </a>
      </div>
      <div>
        <img src="../assets/back.png" alt @click="totop">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshow: "none",
      scroll: ""
    };
  },
  methods: {
    totop() {
      scrollTo(0, 0);
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
  mounted() {
    window.addEventListener("scroll", this.menu);
  }
  // updated() {
  //
  // },
};
</script>