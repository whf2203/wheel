<template>
    <div class="box">
        <div class="con">
            <h1>
                <img :src="detailList.Picture" @click="goImg(detailList.SerialID)">
                <span>{{detailList.pic_group_count}}张照片</span>
            </h1>
            <div class="priceNum">
                <p>
                    <span>{{detailList.market_attribute && detailList.market_attribute.dealer_price}}</span>
                    <span>指导价 <i>{{detailList.market_attribute && detailList.market_attribute.official_refer_price}}{{detailList.market_attribute && detailList.market_attribute.dealer_price_max}}</i></span>
                </p>
                <button>询问底价</button>
            </div>
            <div class="section">
                <div class="year">
                    <p v-for="(value,index) in listKey" :key="index" @click="change(index)"
                    :class="index == id ? 'type' : ''">
                        {{value}}
                    </p>
                </div>
                <Content :changeList="changeList"></Content>
            </div>
        </div>
        <footer>
            <p>询问底价</p>
            <p>本地经销商为你报价</p>
        </footer>
    </div>    
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex';
import Content from '@/components/Content';
export default {
    data(){
        return {
            id:0
        }
    },
    computed:{
       ...mapState({
           detailList:state=>state.detail.getDetailList,// 详情数据
           list:state=>state.detail.list // 相应年份数据
       }),
       listKey(){
           return Object.keys(this.list).sort((a,b)=>{
               return a<b;
           })
       },
        changeList(){
            return this.list[this.listKey[this.id]];
        }
    },
    mounted(){
        // console.log('路由携带参数...',this.$route.query.id);
        this.getDetailList(this.$route.query.id);
    },
    methods:{
        ...mapActions({
            getDetailList:'detail/getDetailList' // 详情总数据
        }),
        change(index){
            this.id=index;
        },
        goImg(id){
            this.$router.push({
                path:'/picture',
                query:{
                    SerialID:id
                }
            })
        }
    },
    components:{
        Content
    }
}
</script>
<style scoped lang="scss">
.box{
    width:100%;
    height: 100%;
    overflow: hidden;
    .con{
        width:100%;
        height: 100%;
        overflow-y: scroll;
    }
}
h1{
    width:100%;
    height:3.7rem;
    position: relative;
    img{
        width:100%;
        height:100%;
    }
    span{
        position: absolute;
        bottom:.4rem;
        right:.2rem;
        background: rgba(0,0,0,.5);
        color:#fff;
        border-radius: .1rem;
        font-weight: normal;
        font-size:.27rem;
        padding:0 .1rem;
        box-sizing: border-box;
    }

}
.priceNum{
    width:100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:.1rem #eee solid;
    p{
        margin-left:.1rem;
        span{
            display: block;
            &:first-child{
                font-size:.35rem;
                color:red;
            }
            &:last-child{
                font-size:.28rem;
                color:#ccc;
                i{
                    font-style:normal;
                }
            }
        }
    }
    button{
        width:3.8rem;
        color:#fff;
        border-radius: .03rem;
        height:.7rem;
        background: #00afff;
        border:0;
        border-radius: .07rem;
        margin-right: .1rem;
    }
}
.year{
    width:100%;
    height:.77rem;
    display: flex;
    align-items: center;
    p{
        margin:0 .2rem;
        color:#000;
    }
    .type{
        color:#3aacff;
    }
}
footer{
    width:100%;
    height: 1rem;
    background: #3aacff;
    text-align: center;
    position:fixed;
    bottom: 0;
    left:0;
    z-index:9999;
    p{
        color:#fff;
        &:first-child{
            font-size:.32rem;
            margin-top:.1rem;
        }
        &:last-child{
            font-size:.26rem;
            margin-top:.06rem;
        }
    }
}
</style>