
<template class="container">
<Header></Header>
 <router-view></router-view>
 <Footer></Footer>
</template>


<script setup lang="ts">
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/header/index.vue";

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
// .container{
//   padding-bottom: 50px;
// }
//   .footer {
//   position: absolute; /* 放到页面最底部 */
//   bottom: 0;
//   left: 0;
//   height: 50px;
//   width: 100%; 
//   }
   

</style>
