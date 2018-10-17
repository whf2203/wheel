import { mergeCar, sortCar, filter } from '@/utils/index';
const state = {
    getDetailList: [],
    list: {}
}
const mutations = {
    upDetailList(state, payload) {
        // 详情数据
        let obj = {};
        obj['2017'] = mergeCar(sortCar(filter(2017, payload.list)));
        obj['2018'] = mergeCar(sortCar(filter(2018, payload.list)));
        obj['全部'] = mergeCar(sortCar(payload.list));
        // console.log(obj);
        state.list = obj;
        state.getDetailList = payload;
        // console.log(payload);
    }
}

import { getDetailList } from '@/api/index.js';
const actions = {
    getDetailList({ commit }, payload) {
        getDetailList(payload).then(res => {
            commit('upDetailList', res.data)
        })
    }

}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}