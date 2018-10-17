<template>
    <div class="colorBox">
        <p>全部颜色</p>
        <div class="content">
            <p>
                <span v-for="(item,index) in listKey" :key="index" @click="change(index)" :class="index == id ? 'active' : ''">
                    {{item}}
                </span>
            </p>
            <ul class="color">
                <li v-for="(value,key) in changeList" :key="key">
                    <span :style="`background:${value.Value}`"></span>
                    {{value.Name}}
                </li>
            </ul>
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
            colorList:state=>state.color.colorList
        }),
        listKey(){
            return Object.keys(this.colorList).sort((a,b)=>{
                return a<b;
            })
        },
        changeList(){
            return this.colorList[this.listKey[this.id]];
        }
    },
    methods:{
        ...mapActions({
            getModelImageYearColor:'color/getModelImageYearColor'
        }),
        change(idx){
            this.id=idx;
        }
    },
    mounted(){
        this.getModelImageYearColor(this.$route.query.SerialID);
    }
}
</script>
<style lang="scss" scoped>
.colorBox{
    width:100%;
    height:100%;
    background: #f4f4f4;
    &>p{
        margin: .15rem 0;
        font-size: .34rem;
        color: #00afff;
        background: #fff;
        text-align: center;
        line-height: .8rem;
        height: .8rem;
    }
}
.content{
    width:100%;
    &>p{
        margin-top: .15rem;
        padding-left: .2rem;
        font-size: .3rem;
        line-height: .76rem;
        height: .76rem;
        background: #fff;
        overflow-x: scroll;
        white-space: nowrap;
        box-sizing: border-box;
        span{
            padding-right: .42rem;
        }
        span.active{
            color:#00afff;
        }
    }
}
.color{
    width:100%;
    margin-top: .15rem;
    padding: 0 .2rem;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
    li{
        width:48%;
        line-height: .68rem;
        border:.01rem solid #3aacff;
        border-radius: .05rem;
        margin:.2rem 0;
        display: flex;
        align-items: center;
        span{
            width:.4rem;
            height: .4rem;
            display: block;
            margin:0 .15rem;
        }
    }

}
</style>
