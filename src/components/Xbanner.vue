<template>
  <div>
        <mt-swipe :show-indicators="false" style="height:150px;">
          <mt-swipe-item>
            <div class="slide-item" style="width: 375px; pointer-events: auto;">
            <a href="http://m.ybzha.com/post/detail/6705">
              <img
                src="http://wap.ybzha.com/uploads/home/adv/5bbf2feb17c62.jpg"
                style="height: 150px;"
              >
            </a>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div class="slide-item" style="width: 375px; pointer-events: auto;">
            <img
              src="http://wap.ybzha.com/uploads/home/adv/5c176a1446907.jpg"
              style="height: 150px;"
            >
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div class="slide-item" style="width: 375px; pointer-events: auto;">
            <a href="https://v.qq.com/x/page/c07830pefaz.html">
              <img
                src="http://wap.ybzha.com/uploads/home/adv/5bbf2f11408df.jpg"
                style="height: 150px;"
              >
            </a>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div class="slide-item" style="width: 375px; pointer-events: auto;">
            <a href="http://wap.ybzha.com/creative/index">
              <img
                src="http://wap.ybzha.com/uploads/home/adv/5bef0ec5b9534.jpg"
                style="height: 150px;"
              >
            </a>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      
        
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
import Vue from "vue";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {};
</script>