import Vue    from "vue";
import Router from "vue-router";
import routes from "vue-auto-routing"
Vue.use(Router);

export default new Router({
    routes,
    mode: 'history',
    base: '/',
})