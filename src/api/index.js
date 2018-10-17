// 动态判断域名
// const host = /localhost/.test(window.location.host) ? 'http://baojia-test.chelun.com' : 'https://baojia.chelun.com';
const host = 'https://baojia.chelun.com';

function sendRequest(url, method = 'GET', data = {}) {
    let params = {
        method
    };
    // 判断如果是一个post请求，带上请求体信息
    if (method == 'POST') {
        params.body = JSON.stringify(data);
    }

    // 判断请求查询url是否携带query
    if (url.indexOf('?') == -1) {
        url += `?_=${+new Date()}`
    } else {
        url += `&_=${+new Date()}`
    }
    return fetch(host + url, params).then(res => res.json()).then(body => body);
}

/**
 *  获取车辆品牌数据
 *  @return promise
 */
export let getBrandList = () => {
        return sendRequest('/v2-car-getMasterBrandList.html');
    }
    /**
     *  获取车系数据
     *  @param id
     *  @return promise
     */

export let getMakeList = (id) => {
    return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`);
}

/**
 * 获取详情数据
 * @param id
 * @return promise
 */
export let getDetailList = (id) => {
    return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}`);
}

/**
 * 获取城市值
 * @return promise
 */
export let getLocation = () => {
    return sendRequest(`/location-client.html`);
}

/**
 * 获取询价页面数据
 * @return promise
 */
export let getInquiryData = (carid, cityid) => {
    return sendRequest(`/v2-dealer-alllist.html?carId=${carid}&cityId=${cityid}`);
}

/**
 * 获取图片分类数据
 * @param id 携带参数SerialID
 * @return promise
 */
export let getImageList = (id) => {
    return sendRequest(`/v2-car-getImageList.html?SerialID=${id}`);
}



/**
 * 获取图片列表的接口
 * @param {*} serialId 车系id
 * @param {*} imgId 图片分类id
 * @param {number} [page=1] 分页页码数
 * @param {number} [PageSize=30] 分页每页数量
 * @param {*} carId 车型id
 * @param {*} colorId 颜色id
 * @return promise
 */
export let getCategoryImageList = (param) => {
    let search = ``;
    for (let k in param) {
        search += `&${k}=${param[k]}`;
    }
    // 补充Page与PageSize
    if (!param['Page']) {
        search += `&Page=1`;
    }
    if (!param['PageSize']) {
        search += `&PageSize=30`;
    }
    return sendRequest(`/v2-car-getCategoryImageList.html?${search.slice(1,search.length)}`);
}

/**
 * 获取城市数据
 * @param provinceId 省份id
 * @return promise 返回一个promise
 */
export let getCityList = (provinceId) => {
    let search = ``;
    if (provinceId) {
        search += `provinceid=${provinceId}`;
    }
    return sendRequest(`/v1-city-alllist.html?${search}`);
}

/**
 * 获取汽车颜色数据
 * @param id 携带参数SerialID
 * @return promise
 */

export let getModelImageYearColor = (id) => {
    return sendRequest(`/v2-car-getModelImageYearColor.html?SerialID=${id}`);
}