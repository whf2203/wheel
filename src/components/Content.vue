<template>
    <div class="content">
        <div class="con_list" v-for="(value,key,index) in changeList" :key="index">
            <p>{{key}}</p>
            <ul v-for="(item,key) in value" :key="key">
                <li class="tit">{{item.car_name}}</li>
                <li class="horse_power">{{item.horse_power}}马力7档</li>
                <li class="price">
                    <span class="refer_price">指导价 {{item.market_attribute.official_refer_price}}</span>
                    <span class="price_min">{{item.market_attribute.dealer_price_min}}起</span>
                </li>
                <router-link tag="li" class="ask" :to="{
                    path:'/quotation',
                    query:{
                        carId:item.car_id,
                        cityId:cityNum
                    }
                }">询问底价</router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions,maoMutation} from 'vuex';
export default {
    props:{
        changeList:{
            type:Object,
            default:{}
        }
    },
    computed:{
        ...mapState({
            cityNum:state=>state.quotation.cityNum
        })
    },
    mounted(){
        
    }
}
</script>
<style scoped lang="scss">
.content{
    width:100%;
}
.con_list{
    width:100%;
    background: #eee;
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
        background: #fff;
        li{
            width:100%;
        }
        .tit{
            padding-left:.16rem;
            line-height: .65rem;
            font-size:.32rem;
            color:#3d3d3d;
            box-sizing: border-box;
        }
        .horse_power{
            color:#ccc;
            padding-left:.16rem;
            font-size:.3rem;
            box-sizing: border-box;
        }
        .price{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: .6rem;
            border-bottom: 1px solid #eee;
            span{
                margin-right: .2rem;
            }
            .refer_price{
                font-size:.25rem;
                color:#666;
            }
            .price_min{
                font-size:.3rem;
                color:red;
            }
            
        }
        .ask{
            height: .8rem;
            font-size: .32rem;
            color: #00afff;
            font-weight: 500;
            text-align: center;
            line-height: .8rem;
            margin-bottom:.15rem;
        }
    }
}
</style>

