import { getImageList } from '@/api/index';
const state = {
    typeList: [],
    currentType: ''
}
const mutations = {
    updateList(state, payload) {
        // console.log(payload);
        state.typeList = payload;
    },
    updateType(state, payload) {
        state.currentType = payload;
    }
}
const actions = {
    getImageList({ commit }, payload) {
        getImageList(payload).then(res => {
            console.log(res.data);
            commit('updateList', res.data);
        })
    },
    getType({ commit }, payload) {
        commit('updateType', payload);
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}