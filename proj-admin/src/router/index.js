import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/livros",
      name: "book",
      component: () => import("../views/BookView.vue"),
    },
    {
      path: "/categorias",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/autores",
      name: "author",
      component: () => import("../views/AuthorView.vue"),
    },
    {
      path: "/editoras",
      name: "publisher",
      component: () => import("../views/PublisherView.vue"),
    },
  ],
});

export default router;
