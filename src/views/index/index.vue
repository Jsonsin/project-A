<template>
  <div class="container">
    <!-- banner start -->
    <el-carousel
      :interval="4000"
      type="card"
      class="banner-carousel"
      height="200px"
    >
      <el-carousel-item v-for="banner in banners" :key="banner.scm">
        <img :src="banner.imageUrl" class="banner-img" />
      </el-carousel-item>
    </el-carousel>
    <!-- banner end -->
    <!-- 推荐歌单 -->
    <div class="title">推荐歌单</div>
    <div class="songlist">
      <div
        class="song-item"
        v-for="(item, index) in songList"
        :key="index"
        @click="onClickCard"
        :desc="item.copywriter"
        :id="item.id"
      >
        <div class="song-picture">
          <img :src="item.picUrl" alt="" />
        </div>
        <div class="song-description">{{ item.name }}</div>
      </div>
    </div>
    <!-- 推荐歌单 end -->
  </div>
</template>
<script>
import { getsonglist, getBanner } from "../../request/api";
export default {
  data() {
    return {
      banners: [],
      songList: []
    };
  },
  mounted() {
    this.getbanner();
    this.getsongList();
  },
  methods: {
    async getbanner() {
      //解构赋值
      const { banners } = await getBanner({
        type: 0
      });
      this.banners = banners;
      console.log(this.banners);
    },
    async getsongList() {
      const { result } = await getsonglist({
        limit: 10
      });
      this.songList = result;
    },
    onClickCard() {
      this.$router.push(`/playlists/${this.id}`);
    }
  }
};
</script>
<style lang="less" scoped>
.banner-carousel {
  /deep/ .el-carousel__container {
    height: 240px !important;
  }
  .banner-img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
}
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
