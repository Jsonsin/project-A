<template>
  <div class="container">
    <navbar />
    <div class="main">
      <sidebar />
      <mains />
    </div>
    <foot />
  </div>
</template>
<script>
import sidebar from "../sidebar/sidebar";
import navbar from "../navbar/navbar";
import mains from "../index/index";
import foot from "../footer/footer";
export default {
  components: { sidebar, mains, navbar, foot },
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
}
</style>
