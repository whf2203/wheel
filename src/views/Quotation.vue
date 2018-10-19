<template>
    <div class="wrap">
        <header>
            <p>可向多个商家咨询最低价，商家及时回复</p>
            <img src="../assets/ask.png">
        </header>
        <section>
            <dl class="car_info">
                <dt><img :src="inquiryData.details.serial.Picture"></dt>
                <dd>
                    <h3>{{inquiryData.details.serial.AliasName}}</h3>
                    <p>{{inquiryData.details.car_name}}</p>
                </dd>
                <img src="../assets/right.png">
            </dl>
            <div class="self-info">
                <p>个人信息</p>
                <ul>
                    <li>
                        <span>姓名</span>
                        <input type="text" placeholder="输入你的真实中文姓名" maxlength="4">
                    </li>
                    <li>
                        <span>手机</span>
                        <input type="tel" placeholder="输入你的真实手机号码" maxlength="11">
                    </li>
                    <li @click="showCity(true)">
                        <span>城市</span>
                        <p class="name">{{currentCity ? currentCity:city}}<img src="../assets/right.png"></p>
                    </li>
                </ul>
                <div class="quotation">
                        <button>询最低价</button>
                </div>
            </div>
            <div class="dealer-info">
                <p>选择报价经销商</p>
                <ul>
                    <li v-for="(item,index) in inquiryData.list" :key="index" @click="clickItem(index)" ref="item_con" :class="index < 3 ? 'active' : ''">
                        <p>
                            <span>{{item.dealerShortName}}</span>
                            <span>{{item.promotePrice}}万</span>
                        </p>
                        <p>
                            <span>{{item.address}}</span>
                            <span>售{{item.saleRange}}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        <footer>
            <button>询最低价</button>
        </footer>
        <City :class="isShowCity ? 'change' : ''"></City>
    </div>    
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex';
import City from '@/components/City';
export default {
    computed:{
        ...mapState({
            inquiryData:state=>state.quotation.inquiryData,
            isShowCity:state=>state.quotation.isShowCity,
            currentCity:state=>state.quotation.currentCity,
            city:state=>state.quotation.city
        })
    },
    methods:{
        ...mapMutations({
            showCity:'quotation/showCity'
        }),
        ...mapActions({
            getLocation:'quotation/getLocation',
            getInquiryList:'quotation/getInquiryList'
        }),
        clickItem(idx){
            if(this.$refs.item_con[idx].getAttribute('class') == 'active'){
                this.$refs.item_con[idx].className='';
            }else{
                this.$refs.item_con[idx].className='active';
            }
        }
    },
    mounted(){
        this.getLocation();
        this.getInquiryList({carId:this.$route.query.carId});
    },
    components:{
        City
    }
}
</script>
<style scoped lang="scss">
.wrap{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
header{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: .6rem;
    background: #79cd92;
    flex-shrink: 0;
    p{
        color: #fff;
        font-size: .3rem;
    }
    img{
        width:.35rem;
        height:.35rem;
    }
}
section{
    width:100%;
    flex:1;
    overflow-y: auto;
    .car_info{
        width:92%;
        margin:0 auto;
        display: flex;
        height:2rem;
        align-items: center;
        dt{
            width:32%;
            img{
                width:100%;
                border:1px solid #eee;
                border-radius: .08rem;
            }
        }
        dd{
            flex:1;
            margin-left:.18rem;
            h3{
                font-size:.38rem;
                font-weight: normal;
                margin-bottom: .2rem;
            }
            p{
                margin-top: .26rem;
                font-size: .32rem;
                line-height: 1.2;
                color: #333;
            }
        }
        &>img{
            width:.5rem;
            height:.5rem;
        }
    }
}
.self-info{
    width:100%;
    &>p{
        height: .5rem;
        line-height: .5rem;
        padding: 0 .2rem;
        font-size: .24rem;
        color: #666;
        background: #eee;
    }
    ul{
        width:100%;
        background: #fff;
        li{
            width:94%;
            margin:0 auto;
            height:.8rem;
            align-items: center;
            border-bottom: .02rem solid #eee;
            display: flex;
            justify-content: space-between;
            position: relative;
            
            input{
                border:0;
                font-size:.3rem;
            }
        }
        .name{
               font-size:.3rem;
               color:#666;
               margin-right: .5rem;
               img{
                   width:.4rem;
                   height:.4rem;
                   position: absolute;
                   right:0;
                   top:50%;
                   margin-top:-.2rem;
               }
        }
    }
    .quotation{
        width:100%;
        background: #fff;
        text-align: center;
        padding-top: .3rem;
        padding-bottom: .28rem;
        button{
            font-size: .32rem;
            color: #fff;
            width: 80%;
            background: #3aacff;
            height: .7rem;
            border-radius: .1rem;
            border:0;
        }
    }
}
.dealer-info{
    width:100%;
    &>p{
        padding: 0 .2rem;
        height: .5rem;
        line-height: .5rem;
        font-size: .24rem;
        color: #666;
        background: #eee;
    }
    ul{
        width:100%;
        li{
            position: relative;
            padding: .26rem 0 .26rem .54rem;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            height: 1.65rem;
            p:first-child {
                font-size: .3rem;
                span{
                    &:last-child{
                        font-size: .24rem;
                        float: right;
                        color: red;
                        margin-right: .2rem;
                    }
                }
            }
            p:last-child{
                margin-top: .1rem;
                font-size: .24rem;
                color: #a2a2a2;
                span{
                    &:first-child{
                        display: inline-block;
                        max-width: 4.6rem;
                    }
                    &:last-child{
                        float: right;
                        margin-right: .2rem;
                    }
                }
            }
        }
        li:before{
                content: "";
                display: inline-block;
                width: .32rem;
                height: .32rem;
                border-radius: 50%;
                border: 2px solid #ccc;
                box-sizing: border-box;
                position: absolute;
                left: .05rem;
                top: 50%;
                -webkit-transform: translate3d(0,-50%,0);
                transform: translate3d(0,-50%,0);
        }
        li.active:before{
            background: #3aacff;
            border: none;
        }
       li.active:after {
            content: "";
            display: inline-block;
            padding-top: .17rem;
            padding-right: .1rem;
            border: 2px solid #fff;
            -webkit-transform: rotate(40deg) translate3d(0,-50%,0);
            transform: rotate(40deg) translate3d(0,-50%,0);
            position: absolute;
            left: .07rem;
            border-left: none;
            border-top: none;
            top: 47%;
        }
    }
}
footer{
    width:100%;
    flex-shrink: 0;
    button{
        width:100%;
        height: 1rem;
        background: #3aacff;
        text-align: center;
        line-height: 1rem;
        font-size:.34rem;
        color:#fff;
        border:0;
    }
}

</style>