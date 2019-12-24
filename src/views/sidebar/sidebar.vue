<template>
  <div class="sidebar">
    <ul>
      <router-link
        v-for="(item, index) in menus[0].children"
        :key="index"
        :to="{ name: item.name }"
        tag="li"
      >
        <div :class="['iconfont', item.meta.icon]"></div>
        <div>{{ item.meta.title }}</div>
      </router-link>
    </ul>
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
