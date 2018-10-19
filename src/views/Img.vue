<template>
    <div class="wrap" ref="wrap">
        <section ref="section" @click="imgClick">
            <!-- src="src/assets/default.png" -->
            <img v-for="(item,index) in imgList" :key="index" src="@/assets/default.png" :data-src="`${item.Url.replace('{0}',item.LowSize)}`" :data-id="index"/>
        </section>
        <!-- 轮播图片 -->
        <section class="swiper" v-show="showSwiper" @click="swiperClick">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item, index) in imgList" :key="index">
                    <img :data-src="`${item.Url.replace('{0}', item.HighSize)}`" class="swiper-lazy"/>
                    <div class="swiper-lazy-preloader"></div>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            <p>{{`${1+current*1}/${imgList.length}`}}</p>
        </section>
    </div>    
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex';
import {debounce} from '@/utils/utils';
import {lazyLoad} from '@/utils/lazyLoad'; // 懒加载
import 'swiper/dist/css/swiper.css'; // swiper样式
import { swiper, swiperSlide } from 'vue-awesome-swiper'; //引入swiper
export default {
    computed:{
        ...mapState({
            imgList:state=>state.img.imgList,
            isFetching:state=>state.img.isFetching,
            Page:state=>state.img.Page,
            current: state=>state.img.current,
            showSwiper: state=>state.img.showSwiper
        }),
        swiperOption(){
            let that = this;
            return {
                on: {
                    slideChange: function(){
                        if (this.activeIndex > (that.Page-1)*30-5){
                            that.getCategoryImageList({
                                SerialID:that.$route.query.SerialID,
                                ImageID: that.$route.query.ImageID
                            });
                        }
                        that.changeSwiper({
                            id: this.activeIndex,
                            show: true
                        })
                    },
                },
            }
        },
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    methods:{
        ...mapActions({
             getCategoryImageList:'img/getCategoryImageList'
        }),
        ...mapMutations({
            changeSwiper: 'img/changeSwiper'
        }),
        // 监听列表滚动
        scroll(){
            let scrollTop=this.$refs.wrap.scrollTop;
            let height=this.$refs.section.getBoundingClientRect().height;
            console.log('scrollTop...',scrollTop);
            console.log('height...',height);
            if(scrollTop>((height-window.innerHeight)-20) && !this.isFetching){
                console.log('加载下一页');
                this.getCategoryImageList({
                    SerialID:this.$route.query.SerialID,
                    ImageID: this.$route.query.ImageID
                })
            }
        },
        // 点击图片
        imgClick(e){
            let id = e.target.dataset.id;
            this.changeSwiper({
                id,
                show: true
            });
            this.swiper.slideTo(id, 1000, false)
        },
        // 点击swiper
        swiperClick(e){
            if (e.target == e.currentTarget){
                this.changeSwiper({
                    show:false
                })
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    updated(){
        if(this.Page == 2 && this.imgList.length){
            lazyLoad('.wrap');
        }
    },
    mounted(){
        this.getCategoryImageList({
            SerialID:this.$route.query.SerialID,
            ImageID: this.$route.query.ImageID
        });
        let func=debounce(this.scroll,100);
        this.$refs.wrap.addEventListener('scroll',func)
    }

}
</script>
<style lang="scss" scoped>
.wrap{
    height:100%;
    overflow-y:scroll;
}
section:first-child{
    display:flex;
    align-items: center;
    justify-content:space-between;
    flex-wrap:wrap;
    img{
        width:2.46rem;
        height:2rem;
        background-size:cover;
        background-repeat:no-repeat;
        background-position: center;
    }
}
.swiper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    background: rgba(0,0,0,1);
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        height: 5rem;
        border: none;
    }
    p{
        position: absolute;
        bottom: .5rem;
        left: 0;
        color: #fff;
        font-size: .34rem;
        text-align: center;
        width: 100%;
    }
}
.swiper-lazy-preloader{
    color: red;
}
</style>
