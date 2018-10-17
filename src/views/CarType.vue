<template>
    <div class="section">
        <div class="year">
            <p v-for="(value,index) in listKey" :key="index" @click="change(index)"
            :class="index == id ? 'type' : ''">
                {{value}}
            </p>
        </div>
        <div class="content">
            <div class="con_list" v-for="(value,key,index) in changeList" :key="index">
                <p>{{key}}</p>
                <ul v-for="(item,key) in value" :key="key">
                    <li>
                        <p class="title">
                            <span>{{item.market_attribute.year}}款 {{item.car_name}}</span>
                            <span>{{item.market_attribute.dealer_price_min}}起</span>
                        </p>
                        <p class="title_price">
                            <span>{{item.horse_power}}马力7档{{item.trans_type}}</span>
                            <span>指导价 {{item.market_attribute.official_refer_price}}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
    data(){
        return {
            id:0
        }
    },
    computed:{
        ...mapState({
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
    methods:{
        change(index){
            this.id=index;
        }
    },
    mounted(){
        console.log(this.list);
    }
}
</script>
<style lang="scss" scoped>
.section{
    width:100%;
    height: 100%;
    overflow-y: scroll;
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
.content{
    width:100%;
}
.con_list{
    width:100%;
    // background: #eee;
    &>p{
        width: 100%;
        height:.5rem;
        background: #eee;
        color:#666;
        padding-left:.16rem;
        font-size:.26rem;
        line-height: .5rem;
        box-sizing: border-box;
    }
    ul{
        width:100%;
        li{
            width:94%;
            margin: 0 auto;
            border-bottom: 1px solid #eee;
            height: 1.25rem;
            line-height: 1;
            p{
                width:100%;
                padding-top:.22rem;
                &:first-child{
                    span{
                    display:inline-block;
                        &:first-child{
                            width:5rem;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            font-size:.3rem;
                        }
                        &:last-child{
                            float: right;
                            color:red;
                            font-size:.26rem;
                        }
                    }
                }
                &:last-child{
                    span{
                        &:first-child{
                            font-size:.24rem;
                            color:#b3b3b3;
                        }
                        &:last-child{
                            font-size:.24rem;
                            color:#818181;
                            float:right;
                        }
                    }
                }                
            }
        }
    }
}
</style>

