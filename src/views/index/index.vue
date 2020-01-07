<template>
  <div class="container">
    <div class="title">推荐歌单</div>
    <div class="songlist">
      <div class="song-item" v-for="(item, index) in songList" :key="index">
        <div class="song-picture">
          <img :src="item.picUrl" alt="" />
        </div>
        <div class="song-description">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { getnewsong, getsonglist } from "../../request/api";
export default {
  data() {
    return {
      songList: []
    };
  },
  mounted() {
    this.getsongList();
    this.getnewSong();
  },
  methods: {
    async getsongList() {
      const res = await getsonglist({
        limit: 10
      });
      this.songList = res.result;
      console.log(this.songList);
    },
    async getnewSong() {
      try {
        const res = await getnewsong();
        console.log(res.result);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 87%;
  padding: 0 10%;
  box-sizing: border-box;
  .title {
    font-size: 20px;
  }
  .songlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .song-item {
    height: 300px;
    width: calc(20% - 20px);
    .song-picture {
      height: 90%;
      border-radius: 5px;
      overflow: hidden;
      img {
        background-size: 100% 100%;
      }
    }
    .song-description {
      height: 10%;
      width: 100%;
      display: flex;
      align-items: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>
