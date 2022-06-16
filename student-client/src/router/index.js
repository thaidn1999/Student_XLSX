import Vue from "vue";
import VueRouter from "vue-router";
import student from "../components/student.vue"
import search from "../components/search.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: student,
  },
  {
    path: "/search",
    name: "Search",
    component: search,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
