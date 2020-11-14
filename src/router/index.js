import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect:'roulette', // 起始導到 roulette
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "roulette",
        name: "Roulette",
        component: () => import("../component/roulette.vue")
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
