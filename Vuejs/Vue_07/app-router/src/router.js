import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Cursos from "./views/Cursos.vue"

/*  
    Permite termos acesso ao objeto $router dentro da nossa instância Vue - main.js 
    Dentro dos componentes podemos acessar também $route. 
*/ 
Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/cursos",
            component: Cursos
        }
    ]
})