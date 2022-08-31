import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

const routes = [
    { path: "/", component: Login },
    { path: "/home", component: Home },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;