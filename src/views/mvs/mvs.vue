<template>
  <div>
    <input type="button" value="发送" @click="request()" />
    <div v-for="(item, index) in songlists" :key="index">
      {{ item.name }}
    </div>
    <input type="text" />
    <br />
    <br />
    <br />
    <router-link :to="{ name: 'mvsChild' }">下一页</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "mvs",
  data() {
    return {};
  },
  mounted() {
    console.log("进入mvs");
  },
  computed: {
    songlists() {
      return this.$store.state.songList;
    }
  },
  // beforeRouteEnter(to, from, next) {},
  methods: {
    // request() {
    //   this.$store.dispatch("getNewSong");
    // },
    ...mapActions({
      request: "getNewSong" // 将 `this.request()` 映射为 `this.$store.dispatch('getNewSong')`
    })
  }
};
</script>
