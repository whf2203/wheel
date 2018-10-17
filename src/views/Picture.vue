<template>
    <div class="car-img">
        <div class="head">
            <p @click="goColorPage"><span>颜色</span></p>
            <router-link tag="p" to="/carType"><span>车款</span></router-link>
        </div>
        <div class="list">
            <div v-for="(item,index) in typeList" :key="index">
                <div class="title" @click="goImgPage(item.Id)">
                    <p>{{item.Name}}</p>
                    <p>{{item.Count}}张></p>
                </div>
                <ul>
                    <li v-for="(value,key) in item.List" :key="key">
                        <img :src="`${value.Url.replace('{0}',value.LowSize)}`">
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
    computed:{
        ...mapState({
            typeList:state=>state.picture.typeList
        })
    },
    methods:{
        ...mapActions({
            getImageList:'picture/getImageList'
        }),
        goColorPage(){
            this.$router.push({
                path:'/colorType',
                query:{
                    SerialID:this.$route.query.SerialID
                }
            })
        },
        goImgPage(id){
            this.$router.push({
                path:'/img',
                query:{
                    SerialID:this.$route.query.SerialID,
                    ImageID:id
                }
            })
        }
    },
    mounted(){
        this.getImageList(this.$route.query.SerialID);
    }
}
</script>
<style lang="scss" scoped>
.car-img{
    width:100%;
    height:100%;
    overflow-y: auto;
}
.head{
    position: fixed;
    background: #fff;
    top: 0;
    width: 100%;
    height: .9rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    z-index: 99;
    border-bottom:.15rem solid #eee;
    p{
        -webkit-box-flex: 1;
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        color: #454545;
        display: inline-block;
        &:first-child{
            border-right: .01rem solid #eee;
        }
        span{
            max-width: 2.6rem;
            display: inline-block;
            vertical-align: middle;
            line-height: 1.25;
            font-size: .28rem;
        }
    }
    p:after{
        content: "";
        display: inline-block;
        padding-top: .16rem;
        padding-right: .16rem;
        border-top: 2px solid #ccc;
        border-right: 2px solid #ccc;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
        margin-left: .2rem;
        vertical-align: 5%;
    }
}
.list{
    width:100%;
    margin-top:.9rem;
    &>div{
        width:100%;
        position: relative;
        ul{
            width:100%;
            display: flex;
            justify-content: space-between;
            flex-wrap:wrap;
            border-bottom: .12rem solid #fff;
            
            li{
                width:2.46rem;
                height:2.46rem;
                margin-bottom:.05rem; 
                img{
                    width:100%;
                    height:100%;
                    background-size:cover;
                    background-repeat:no-repeat;
                    background-position: center;
            }
        }
    }
    .title{
        width:2.46rem;
        height:2.46rem;
        background: rgba(56,90,130,.5);
        color:#fff;
        position: absolute;
        left:0;
        top:0;
        text-align: center;
        p{
            &:first-child{
                font-size: .28rem;
                margin-top: .8rem;
            }
        }
    }
}
    
}
</style>

