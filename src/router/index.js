import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../views/layout/layout.vue";
import index from "../views/index/index.vue";
import songs from "../views/songs/songs.vue";
import mvs from "../views/mvs/mvs.vue";
import mvsChild from "../views/mvs/mvs-child.vue";
Vue.use(VueRouter);

// 需要显示在侧边栏菜单的页面
export const menuRoutes = [
  {
    path: "/index",
    name: "index",
    component: index,
    meta: {
      title: "发现音乐",
      icon: "icon-music"
    }
  },
  {
    path: "/playlists",
    name: "playlists",
    component: () => {
      import("../views/playlists/playlists.vue");
    },
    meta: {
      title: "推荐歌单",
      icon: "icon-music"
    }
  },
  {
    path: "/songs",
    name: "songs",
    component: songs,
    meta: {
      title: "最新音乐",
      icon: "icon-music"
    }
  },
  {
    path: "/mvs",
    name: "mvs",
    component: mvs,
    meta: {
      title: "最新MV",
      icon: "icon-music"
    }
  }
];
const routes = [
  {
    path: "/",
    name: "layout",
    component: layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: index
      },
      {
        path: "/playlists",
        name: "playlists",
        component: () => import("../views/playlists/playlists.vue") // 懒加载
      },
      {
        path: "/songs",
        name: "songs",
        component: songs
      },
      {
        path: "/mvs",
        name: "mvs",
        component: mvs,
        meta: {
          keepalive: false
        },
        children: [
          {
            path: "/mvs/mvsChild",
            name: "mvsChild",
            component: mvsChild
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 })
});

export default router;
