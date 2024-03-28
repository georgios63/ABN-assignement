import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowDetails from "../views/ShowDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shows/:id",
      name: "ShowDetails",
      component: ShowDetails,
      props: true,
    },
  ],
});

export default router;
