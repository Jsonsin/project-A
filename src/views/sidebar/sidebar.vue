<template>
  <div class="sidebar">
    <ul>
      <li>
        <div>1</div>
        <div class="right">1.1</div>
      </li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.sidebar {
  width: 20%;
}
ul,
li {
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  height: 100px;
  align-items: center;
}
.right {
  margin-left: auto;
  margin-right: 20px;
}
</style>
