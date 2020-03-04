import Vue from "vue";
import Vuex from "vuex";
import { getnewsong, getsonglist } from "../request/api";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 状态
    songList: []
  },
  mutations: {
    // 同步
    getNewSongList(state, obj) {
      // console.log(obj);
      state.songList = obj;
    },
    getOldSongList(state, obj) {
      // console.log(obj);
      state.songList = obj;
    }
  },
  actions: {
    //异步
    getNewSong(context, p) {
      getnewsong(p)
        .then(res => {
          // console.log(res.result);
          let songlist = res.result;
          context.commit("getNewSongList", songlist);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getOldSong(context, p) {
      console.log(context); // vuex的实例
      getsonglist(p)
        .then(res => {
          // console.log(res.result);
          let songlist = res.result;
          context.commit("getOldSongList", songlist);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  modules: {}
});
