<template>
    <div class="citybox">
        <div class="place">
            <p>自动定位</p>
            <p>北京</p>
        </div>
        <section>
            <div class="province">
                <p>省市</p>
                <ul @click="e=>getCityList(e.target.dataset.id)">
                    <li v-for="(item,index) in provinces" :key="index" :data-id="item.CityID">
                         <span>{{item.CityName}}</span>
                         <img src="@/assets/icon.png">
                    </li>
                </ul>
            </div>
        </section>
        
        <section :class="isShowCity ? 'active city' : 'city'" @click="cityClick">
            <div>
                <ul class="list">
                    <li v-for="(value,key) in cities" :key="key" :data-id="value.CityID">
                        {{value.CityName}}
                    </li>
                </ul>
            </div>
        </section>
    </div>

</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
    computed:{
        ...mapState({
            provinces:state=>state.city.provinces,
            cities:state=>state.city.cities,
            isShowCity:state=>state.city.isShowCity
        })
    },
    methods:{
        ...mapActions({
            getCityList:'city/getCityList'
        }),
        ...mapMutations({
            updateCity:'quotation/updateCity',
            hideCity:'city/hideCity'
        }),
        cityClick(e){
            console.log(e);
            this.hideCity();
            // console.log(e.target.tagName);
            if(e.currentTarget == e.target){
                // 点到section了,关闭遮罩
                console.log('点击关闭');
            }else if(e.target.tagName == 'LI'){
                console.log('点击到了城市');
                this.updateCity({
                    name:e.target.innerText
                })
            }
            
        }
    },
    mounted(){
        this.getCityList();
    }
}
</script>
<style lang="scss">
.citybox{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    transform: translate3d(0,100%,0);// translate3d 开启硬件加速
    transition: all .3s ease;
    background: #fff;
    overflow-y: auto;
    z-index:99;
}
.citybox.change{
    transform: translate3d(0,0,0);
    transition: all .3s ease;
}
.place{
    width:100%;
    p{
        box-sizing: border-box;
        &:first-child{
            background: #f4f4f4;
            font-size:.24rem;
            padding-left:.2rem;
            height:.4rem;
            line-height: .4rem;
        }
        &:last-child{
            height: .8rem;
            line-height: .8rem;
            font-size:.28rem;
            padding-left:.4rem;
        }
    }
}
.province{
    width:100%;
    &>p{
        background: #f4f4f4;
        font-size:.24rem;
        padding-left:.2rem;
        height:.4rem;
        line-height: .4rem;
    }
    ul{
        width:100%;
        li{
            height: .8rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left:.3rem;
            margin-left:.1rem;
            border-bottom: .01rem solid #eee;
            padding-right: .2rem;
            span{
                display: block;
                font-size: .28rem;
            }
            img{
                width:.4rem;
                height: .4rem;
            }
        }
    }
}
.city{
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height:100%;
    background: #fff;
    transform: translate3d(0,0,0);
    // 在dom上盖一层设置为visibility,可以实现点击穿透的效果
    visibility:hidden;
    z-index:101;    
}
.city>div{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    transform: translate3d(100%,0,0);
    background: #fff;
    overflow-y: scroll;
}
.city.active{
    background: rgba(0,0,0,.5);
    visibility: visible;
}
.city.active>div{
    transform: translate3d(30%,0,0);
    transition: all .3s ease;
}
.list{
    width:100%;
    overflow: hidden;
    li{
        width:100%;
        height:.8rem;
        line-height: .8rem;
        font-size:.28rem;
        padding-left:.3rem;
        margin-left:.1rem;
        border-bottom:.01rem solid #eee;
        box-sizing: border-box;
    }
}
</style>


