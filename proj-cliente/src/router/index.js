import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/catalogo",
      name: "catalog",
      component: () => import("../views/CatalogView.vue"),
    },
    {
      path: "/carrinho",
      name: "shoppingCart",
      component: () => import("../views/ShoppingCartView.vue"),
    },
  ],
});

export default router;
