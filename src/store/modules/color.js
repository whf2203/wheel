import { getModelImageYearColor } from '@/api/index';
const state = {
    colorList: [],
    currentName: ''
}

const mutations = {
    updateColor(state, payload) {
        state.colorList = payload;
        // console.log(payload);
    },
    updateName(state, payload) {
        state.currentName = payload;
    }
}

const actions = {
    getModelImageYearColor({ commit }, payload) {
        getModelImageYearColor(payload).then(res => {
            commit('updateColor', res.data);
        })
    },
    getName({ commit }, payload) {
        commit('updateName', payload)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}