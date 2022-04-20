<!-- <template>
  <div class="nav-menu-wrapper">
    <div v-if="showLogo" class="el-menu el-menu--horizontal logo-box">
      <img class="set-img" src="@/assets/logo2.png" alt="图片" title="欢迎" />
    </div>
    <el-menu
      :default-active="activeIndex2"
      class="menu-box"
      :mode="directionType"
      text-color="#000000"
      active-text-color="#3261d0"
      @select="handleSelect"
    >
      <template v-for="(item, index) in menuList" :key="item.path">
        <template v-if="!item.children">
          <el-menu-item :index="item.meta?.index" @click="handleRoute(item)">{{
            item.meta?.title
          }}</el-menu-item>
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
    <div class="el-menu el-menu--horizontal combine-btn-box">
      <span class="child-item">登录</span>
      <span class="child-item">注册</span>
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

const activeIndex2 =
  computed(mapState(["currentMenu"]).currentMenu.bind({ $store: store })) ||
  ref<string>("1");

const menuList = router.options.routes[0].children;
console.log(menuList, 666);

const handleSelect = (key: string, keyPath: string) => {
  //console.log(key, keyPath)
  store.commit("SET_CURRENT_MENU", key);
};
const handleRoute = (item: any) => {
  router.push(item.path);
};
</script>
<style lang="scss">
@import "./style.scss";
</style> -->
