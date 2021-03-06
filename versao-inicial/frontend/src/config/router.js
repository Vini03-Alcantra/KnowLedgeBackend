import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../components/home/Home.vue"
import AdminPages from "../components/admin/AdminPages"
import ArticlesByCategory from '../components/articles/ArticleByCategory'
Vue.use(VueRouter)

const routes = [{
    name: "home",
    path: "/",
    component: Home
}, {
    name: "adminPages",
    path: "/admin",
    component: AdminPages
}, {
    name: "articlesByCategory",
    path: '/categories/:id/articles',
    component: ArticlesByCategory
}]

export default new VueRouter({
    mode: "history",
    routes
})
