import Vue    from "vue";
import App    from "./App";
import store  from "./Store";
import router from "./Router";
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");