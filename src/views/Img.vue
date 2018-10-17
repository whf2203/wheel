<template>
    <div class="wrap" ref="wrap">
        <section ref="section">
            <!-- src="src/assets/default.png" -->
            <img v-for="(item,index) in imgList" :key="index" src="@/assets/default.png" :data-src="`${item.Url.replace('{0}',item.LowSize)}`"/>
        </section>
    </div>    
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex';
import {debounce} from '@/utils/utils';
import {lazyLoad} from '@/utils/lazyLoad';
export default {
    computed:{
        ...mapState({
            imgList:state=>state.img.imgList,
            isFetching:state=>state.img.isFetching,
            Page:state=>state.img.Page
        })
    },
    methods:{
        ...mapActions({
             getCategoryImageList:'img/getCategoryImageList'
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
        }
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
section{
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
</style>
