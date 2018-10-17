import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

// 引入modules
import index from './modules/index';
import detail from './modules/detail';
import quotation from './modules/quotation';
import img from './modules/img';
import city from './modules/city';
import picture from './modules/picture';
import color from './modules/color';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: true
    },
    mutations: {
        changeLoading(state, payload) {
            state.loading = payload;
        }
    },
    modules: {
        index,
        detail,
        quotation,
        img,
        city,
        picture,
        color
    },
    plugins: [Logger()]
})