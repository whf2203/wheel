<template>
    <div :class="isShowList ? 'mask active' : 'mask'" ref="container"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend">
            <div v-for="(value,index) in brandArr" :key="index" class="content">
                <p>{{value.GroupName}}</p>
                <router-link tag="dl" v-for="(item,key) in value.GroupList" :key="key" 
                :to="{
                    path:'/detail',
                    query:{
                        id:item.SerialID
                    }
                }">
                    <dt>
                        <img :src="item.Picture"/>
                    </dt>
                    <dd>
                        <h3>{{item.AliasName}}</h3>
                        <p>{{item.DealerPrice}}</p>
                    </dd>
                </router-link>
            </div>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
    computed:{
        ...mapState({
            brandArr:state=>state.index.makeList,
            isShowList:state=>state.index.isShowList
        })
    },
    methods:{
            ...mapMutations({
                hideMakelist: 'index/hideMakelist'
            }),
            touchstart(e){
                this.offsetX = 0;
                this.touch  = e.touches[0];
                _hmt.push(['_trackEvent','汽车报价','tap','品牌点击'])
            },
            touchmove(e){
                let touch = e.touches[0];
                // this.touch.pageX是鼠标距离msak盒子的距离
                // touch.pageX是msak盒子距离当前屏幕左边的距离
                this.offsetX = touch.pageX - this.touch.pageX;
                // console.log(this.offsetX);
                if (this.offsetX > 0){
                    // console.log(this.$refs.container);
                    this.$refs.container.style = `transform:translate3d(${this.offsetX}px, 0, 0)`;
                }
            },
            touchend(e){
                this.$refs.container.style = ``;
                // console.log('offsetX...', this.offsetX);
                if (this.offsetX > 100){
                    this.hideMakelist();
                }
            },

    },

    mounted(){
    },
    updated(){
        // console.log(this.brandArr);
    }
}
</script>
<style lang="scss">
.mask{
    width:75%;
    height: 100%;
    z-index:99;
    position:fixed;
    right:0;
    top:0;
    overflow-y: auto;
    // 为了解决ios上滑动问题
    -webkit-overflow-scrolling: touch;
    background: #fff;
    transform: translate3d(100%,0,0);// 隐藏mask
    transition: transform .3s linear;
}
.content{
    width:100%;
    &>p{
        width:100%;
        height: .4rem;
        background: #eee;
        padding-left:.2rem;
        color:#666;
        line-height: .4rem;
        font-weight: normal;
        font-size: .3rem;
        box-sizing: border-box; 
    }
    dl{
        width:96%;
        height:1.5rem;
        margin:0 auto;
        display: flex;
        border-bottom:1px solid #ccc;
        align-items: center;
        dt{
            width:33%;
            margin-left:.3rem;
            img{
                width: 100%;
            }
        }
        dd{
            margin-left:.15rem;
            h3{
                font-weight: normal;
                margin-bottom:.18rem;
            }
            p{
                color:red;
            }
        }
    }
}
.mask.active{
    transform: translate3d(0,0,0);
    transition: transform .3s linear;
}
</style>

