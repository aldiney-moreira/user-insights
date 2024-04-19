import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Form from "@/pages/Form.vue";
import Report from "@/pages/Report.vue";
import Users from "@/pages/Users.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/formulario",
    name: "Form",
    component: Form,
  },
  {
    path: "/relatorio",
    name: "Report",
    component: Report,
  },
  {
    path: "/usuarios",
    name: "UsersList",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
