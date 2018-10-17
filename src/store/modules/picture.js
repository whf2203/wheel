import { getImageList } from '@/api/index';
const state = {
    typeList: []
}
const mutations = {
    updateList(state, payload) {
        console.log(payload);
        state.typeList = payload;
    }
}
const actions = {
    getImageList({ commit }, payload) {
        getImageList(payload).then(res => {
            commit('updateList', res.data);
        })
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}