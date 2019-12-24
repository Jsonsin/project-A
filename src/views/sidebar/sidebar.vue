<template>
  <div class="sidebar">
    <!-- 让default-active 的值 等于 index 的值 保持导航高亮一致 -->
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
      <router-link
        v-for="(item, index) in menus[0].children"
        :key="index"
        :to="{ name: item.name }"
      >
        <el-menu-item :index="item.path" active-class="menu-item-active">
          <i :class="['iconfont', item.meta.icon]"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>
<script>
import { menuRoutes } from "../../router/index";
export default {
  data() {
    return {
      menus: [
        {
          type: "root",
          children: menuRoutes
        }
      ]
    };
  },
  mounted() {}
};
</script>
<style lang="less">
// 覆盖elementui原有的样式要写在scoped属性外
.el-menu {
  background-color: #f6f6f6 !important;
}
</style>
<style lang="less" scoped>
.sidebar {
  width: 13%;
  background-color: #f6f6f6;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  display: flex;
  height: 75px;
  font-size: 14px; /* no*/
  align-items: center;
  cursor: pointer;
  div:nth-child(1) {
    margin-left: 20px;
    margin-right: 10px;
  }
}
</style>
