<template>
  <div class="nav-menu-wrapper" style="border: none;">
    <div v-if="showLogo" class="el-menu el-menu--horizontal logo-box">
      <img class="set-img" src="@/assets/logo2.png" alt="图片" title="欢迎" />
      <el-menu
      background-color="rgba(255,255,255,0)"
        :default-active="activeIndex2"
        class="menu-box"
        :mode="directionType"
        text-color="#000000"
        @select="handleSelect">
      
        <template v-for="(item, index) in menuList" :key="item.path">
          <template v-if="!item.children">
            <el-menu-item
              :index="item.meta?.index"
              @click="handleRoute(item)"
              >{{ item.meta?.title }}</el-menu-item
            >
          </template>

          <template v-else>
            <el-sub-menu :index="item.meta?.index">
              <template #title>{{ item.meta?.title }}</template>
              <el-menu-item
                index="subItem.meta?.index"
                v-for="(subItem, index) in item.children"
                :key="subItem.path"
                @click="handleRoute(subItem)"
                >{{ subItem.meta?.title }}</el-menu-item
              >
            </el-sub-menu>
          </template>
        </template>
     
        
      </el-menu>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";
import { mapState } from "vuex";

const router = useRouter();
const store = useStore();

interface Props {
  showLogo?: boolean;
  showSearch?: boolean;
  directionType?: string; // 方向类型，垂直和水平， 默认水平
}
withDefaults(defineProps<Props>(), {
  directionType: "horizontal",
  showLogo: true,
  showSearch: true,
});

const activeIndex2 = computed(mapState(["currentMenu"]).currentMenu.bind({ $store: store })) || ref<string>("1");
const menuList = router.options.routes[0].children
console.log(menuList, 555);

const handleSelect = (obj:any) => {
  
  store.commit('SET_CURRENT_MENU',obj.key);
}
const handleRoute = (item: any) => {
  router.push(item.path)
}
</script>
<style lang="scss" scoped>
.nav-menu-wrapper {
  position: fixed;
  z-index: 1501;
  width: 100%;
  top: 0;
  
  .logo-box {
    border-style:none;
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    //  border-radius: 25px;  //使边缘成为弧形
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
    // padding: 0 0px 0 1px;
        .set-img {
          border-style:none;
      width: 200px;
      height: 60px;
    }
    .menu-box {
  border-style:none;
    justify-content: right; 
    align-items: center;
    flex: 4;
          
}
}
  }

  
//   .combine-btn-box{
//       background: rgba(255, 255, 255, 0.2);
//   -webkit-backdrop-filter: blur(8px);
//   backdrop-filter: blur(8px);
//   border-radius: 25px;
//   box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);
//       height: 61px;
//       line-height: 61px;
//       .child-item{
//           padding: 0 5px;
//           cursor: pointer;
//           //字体变颜色
//           &:hover{
//               color: #3261d0;
//           }
// }
  
</style>
