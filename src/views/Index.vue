<template>
    <div class="wrapper" ref="wrapper">
        <!--loading组件 -->
        <loading v-if="LOADING"/> 
        <div class="menu" refs="menu">
            <div v-for="(value,key,index) in brandObj" :key="index" class="menuList" ref="menuList">
                <h2>{{key}}</h2>
                <ul>
                    <li v-for="(item,idx) in value" :key="idx" @click="sendId(item.MasterID)">
                        <img src="" :data-src="item.CoverPhoto">
                        <p>{{item.Name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div v-show="isShowLetter" class="letter">
            <span>{{letter}}</span>
        </div>
        <div class="letterList"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        ref="letterList">
            <p v-for="(item,index) in letters" :key="index">
                {{item}}
            </p>
        </div>
        <Makelist></Makelist>
    </div>    
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex';
import Loading from '../components/Loading';
import Makelist from '../components/Makelist';
import {lazyLoad} from '@/utils/lazyLoad';
export default {
    name:"app",
    data(){
        return{
            LOADING:true
        }
    },
    components:{
        Loading,
        Makelist
    },
    computed:{
        ...mapState({
            letters:state=>state.index.letters,
            brandObj:state=>state.index.brandList,
            letter: state=>state.index.letter,
            isShowLetter: state=>state.index.isShowLetter
        })
    },
    methods:{
        ...mapMutations({
            showLetter:'index/showLetter',
            changeLetter: 'index/changeLetter'
        }),
        ...mapActions({
            getIndex:'index/getBrandList',
            sendId:'index/getMakeList'
        }),
        touchStart(e){
           this.showLetter(true);
                let letter = e.target.innerHTML;
                 if (this.letter != letter){
                    // 改变当前字母
                    this.changeLetter(letter);
            }
        },
        touchMove(e){
            // 计算字母下标
            let index = Math.floor((e.touches[0].pageY - this.offsetTop)/this.letterH);
            console.log(index);
            // 处理下临界值
            if (index < 0){
                index = 0;
            }else if (index > this.letters.length-1){
                index = this.letters.length-1;
            }
             let offsetTop = this.$refs.menuList[index].offsetTop;
            // 滚动元素到对应位置
            // 计算wrapper向下滚动的距离
             this.$refs.wrapper.scrollTop = offsetTop;
             this.changeLetter(this.letters[index]);
        },
        touchEnd(){
            this.showLetter(false);
        }
    },
    mounted(){
        this.getIndex();
    },
    updated(){
        lazyLoad('.wrapper');
        // 获取字母列表距离顶部的高度
        this.offsetTop=this.$refs.letterList.getBoundingClientRect().top;
        // 获取每个字母的高度
        this.letterH=this.$refs.letterList.children[0].getBoundingClientRect().height;
        this.LOADING=false;
    }
}
</script>
<style lang="scss">
.wrapper{
    width:100%;
    height: 100%;
    overflow-y: scroll;
}
.menu{
    width:100%;
    height:100%;
    .menuList{
        width: 100%;
        h2{
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
        ul{
            width:100%;
            li{
                width:92%;
                margin:0 auto;
                display: flex;
                height: 1.1rem;
                border-bottom:1px solid #ccc;
                align-items: center;
                img{
                    height: .8rem;
                }
                p{
                    font-size:.33rem;
                    margin-left:.3rem;
                }
            }
        }
    }
}
.letterList{
        width:.6rem;
        text-align: center;
        position: fixed;
        right: 0;
        top:50%;
        transform: translate3d(0, -50%, 0);
        p{
            font-size:.27rem;
            color:#666;
            line-height: .4rem;
        }
}
.letter{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        font-size: .8rem;
        color: #fff;
        text-align: center;
        background: rgba(0,0,0,.8);
        border-radius: .1rem;
}
</style>