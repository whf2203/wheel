const state = {
        letters: [], // 品牌首字母数据
        brandList: {},
        makeList: [], // 车系列表数据
        isShowList: false // 是否显示车系列表
    }
    // 同步改变
const mutations = {
    updateBrand(state, payload) {
        // 品牌数据
        let letters = [];
        let brandList = {};
        payload.forEach((item, index) => {
            let letter = item.Spelling[0];
            // 判断这个字母是否在字母列表中
            if (letters.indexOf(letter) == -1) {
                // 把字母添加到字母列表
                letters.push(letter);
                // 同时在brandList添加一个key为letter的项，值为[item]
                brandList[letter] = [item];
            } else {
                brandList[letter].push(item);
            }
        })
        state.letters = letters;
        state.brandList = brandList;
    },
    updateType(state, payload) {
        // 车系数据
        // console.log(payload);
        state.makeList = payload;
        state.isShowList = true;
    },
    // 隐藏车系数据
    hideMakelist: (state) => {
        state.isShowList = false;
    },

    // 显示车系数据
    showMakelist: (state) => {
        state.isShowList = true;
    }
}

// 异步改变
import { getBrandList, getMakeList } from '@/api/index.js';
const actions = {
    getBrandList({ commit }) {
        getBrandList().then(res => {
            commit('updateBrand', res.data);
        })
    },
    getMakeList({ commit }, payload) {
        getMakeList(payload).then(res => {
            commit('updateType', res.data)
        })
    }

}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}