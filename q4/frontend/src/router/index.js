import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Book from "../views/Book.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Top Books of All Time"
    }
  },
  {
    path: "/books/:id",
    component: Book
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
