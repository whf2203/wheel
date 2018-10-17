import { getCategoryImageList } from '@/api/index';
const state = {
    imgList: [],
    Page: 1, // 页码
    isFetching: false
}

const mutations = {
    updateImgList(state, payload) {
        // console.log(payload);
        state.imgList = state.imgList.concat(payload.List);
        state.Page++;
        state.isFetching = false;
    },
    startFetching(state) {
        state.isFetching = true;
    }
}

const actions = {
    // 获取图片列表数据
    getCategoryImageList({ commit, state }, payload) {
        // console.log('payload', payload);
        payload.Page = state.Page;
        if (state.isFetching) {
            return;
        }
        commit('startFetching');
        getCategoryImageList(payload).then(res => {
            // console.log(res);
            commit('updateImgList', res.data);
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}