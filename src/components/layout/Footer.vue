<template>
  <div class="website-footer">
    <p>©2020 - 2022 By 羽蒙Y</p>
    <a href="https://beian.miit.gov.cn/" target="_blank"
      >蜀ICP备2020034730号-1</a
    >
    <!-- <div class="info-item"> -->
    <!-- <p>©2020 - 2021 By 羽蒙Y</p>
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >蜀ICP备2020034730号-1</a
      > -->
    <!-- </div> -->
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>

.website-footer {
  width: 100%;
  line-height: 2;
  position: relative;
  padding: 10px 20px;
  color: #eee;
  font-size: 14px;
  text-align: center;
  background: linear-gradient(-45deg, #ee7752, #ce3e75, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: Gradient 10s ease infinite;
}
.website-footer a {
  color: #eee !important;
}
@keyframes Gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
//   .title {
//     // color: $text-color-main;
//     @include common-title();
//   }
//   .title,
//   .info-item {
//     box-sizing: border-box;
//   }
//   .info-item {
//     padding: 4px;
//     overflow: hidden;
//     text-align: center;
//   }
</style>
