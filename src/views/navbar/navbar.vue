<template>
  <div>
    <div class="header">
      <div class="homepage">主页</div>
      <div class="search">
        <input type="text" placeholder="搜索" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
// 不想转换rem的样式后加上 /* no*/
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  border-bottom: 1px solid #f9f9f9; /* no*/
  background-color: #f9f9f9;
  .homepage {
    margin-left: 5%;
    height: 100%;
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .search {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    input {
      height: 30px;
      width: 200px;
      margin-right: 30px;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding-left: 10px;
    }
  }
}
</style>
