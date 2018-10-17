import { getModelImageYearColor } from '@/api/index';
const state = {
    colorList: []
}

const mutations = {
    updateColor(state, payload) {
        state.colorList = payload;
        console.log(payload);
    }
}

const actions = {
    getModelImageYearColor({ commit }, payload) {
        getModelImageYearColor(payload).then(res => {
            commit('updateColor', res.data);
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}