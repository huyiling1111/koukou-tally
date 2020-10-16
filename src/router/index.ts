import Money from "@/views/Money.vue";
import Label from "@/views/Labels.vue";
import Statistics from "@/views/Statistics.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/money "
  },
  {
    path: "/money",
    component: Money,
  },
  {
    path: "/labels",
    component: Label,
  },
  {
    path: "/statistics",
    component: Statistics,
  },
  // {
  //   path: "*",
  //   component: NotFound,
  // },

];

const router = new VueRouter({
  routes,
});

export default router;
