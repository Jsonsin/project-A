<template>
  <div class="container">
    <navbar />
    <div class="main">
      <sidebar />
      <keep-alive :cludes="['mvs']">
        <router-view></router-view>
      </keep-alive>
    </div>
    <foot />
  </div>
</template>
<script>
import sidebar from "../sidebar/sidebar";
import navbar from "../navbar/navbar";
import foot from "../footer/footer";
export default {
  components: { sidebar, navbar, foot },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main {
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
}
</style>
