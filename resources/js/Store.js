import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
Vue.use(Vuex);
const state     = {
    users: [
        {id:1, name: 'John Doe',     slug:'john-doe'},
        {id:2, name: 'Jane Doe',     slug:'jane-doe'},
        {id:3, name: 'Sam Carter',   slug:'sam-sarter'},
        {id:4, name: 'Oliver Sykes', slug:'oliver-sykes'},
        {id:5, name: 'Ronnie Radke', slug:'ronnie-radke'},
    ]
}
const mutations = {}
const actions   = {};
const getters   = {};
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
})