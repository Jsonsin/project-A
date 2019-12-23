import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../views/layout/layout.vue";
import index from "../views/index/index.vue";
Vue.use(VueRouter);

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
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
