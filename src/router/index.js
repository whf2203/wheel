import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

// 加载路由页面
const CarType = () =>
    import ('@/views/CarType');
const ColorType = () =>
    import ('@/views/ColorType');
const Detail = () =>
    import ('@/views/Detail');
const Img = () =>
    import ('@/views/Img');
const Index = () =>
    import ('@/views/Index');
const Quotation = () =>
    import ('@/views/Quotation');
const Picture = () =>
    import ('@/views/Picture');

Vue.use(Router);


let router = new Router({
    routes: [{
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/carType',
            name: 'CarType',
            component: CarType
        },
        {
            path: '/colorType',
            name: 'ColorType',
            component: ColorType
        },
        {
            path: '/detail',
            name: 'Detail',
            component: Detail
        },
        {
            path: '/img',
            name: 'Img',
            component: Img
        },
        {
            path: '/quotation',
            name: 'Quotation',
            component: Quotation
        },
        {
            path: '/picture',
            name: 'Picture',
            component: Picture
        },
        {
            path: '*',
            redirect: '/index'
        }
    ]
})

router.beforeEach((to, from, next) => {
    store.commit('changeLoading', true);
    next();
});

router.afterEach(() => {
    store.commit('changeLoading', false);
})
export default router;