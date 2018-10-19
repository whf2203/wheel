import { getCityList } from '@/api/index';

const state = {
    isShowCity: false,
    locationCity: '', // 定位城市
    cities: [], // 城市数据
    provinces: [] // 省份
}

const mutations = {
    // 城市数据
    updateCities(state, payload) {
        console.log(payload.data);
        state.cities = payload.data;
        state.isShowCity = true;
    },
    // 省份数据
    updateProvinces(state, payload) {
        state.provinces = payload.data;
    },
    // 隐藏城市列表
    hideCity(state, payload) {
        state.isShowCity = false;
    }
}

const actions = {
    getCityList({ commit }, payload) {
        if (payload) {
            // 如果payload有数据,获取城市列表
            getCityList(payload).then(res => {
                commit('updateCities', res);
            })
        } else {
            // 如果payload没有数据，获取省份数据
            getCityList().then(res => {
                commit('updateProvinces', res);
            })
        }

    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}