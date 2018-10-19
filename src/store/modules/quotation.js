import { getLocation, getInquiryData } from '@/api/index';
const state = {
    inquiryData: [], // 询价数据
    cityNum: '', // 城市id
    city: '北京', // 城市数据
    currentCity: '', // 当前选中城市
    isShowCity: false // 是否显示城市菜单
}
const mutations = {
    // 城市ID
    cityId(state, payload) {
        state.cityNum = payload;
    },
    // 询价总数据
    inquiry(state, payload) {
        console.log(payload);
        state.inquiryData = payload;
    },
    showCity(state, payload) {
        state.isShowCity = payload;
    },
    updateCity(state, payload) {
        state.currentCity = payload.name;
        state.isShowCity = false;
    }
}

const actions = {
    getLocation({ commit }) {
        getLocation().then(res => {
            // 获取城市ID
            commit('cityId', res.data.CityID)
        })
    },
    getInquiryList({ commit }, payload) {
        // console.log(payload);
        getLocation().then(res => {
            getInquiryData(payload.carId, payload.cityId || res.data.CityID).then(res => {
                commit('inquiry', res.data);
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}