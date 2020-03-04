<template>
  <div>
    <input type="button" value="发送" @click="request()" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    let arr = [1, 2, 3, 4, 5, 6];
    let copy = arr.slice();
    copy.push(7);
    console.log(arr);
    console.log(copy);
  },
  methods: {
    request() {
      this.$store.dispatch("getOldSong");
    }
  }
};
</script>

<style lang="less" scoped></style>
