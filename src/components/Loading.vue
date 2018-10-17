<template>
    <div class='loading' v-show="loading">
        <img src="../assets/loading.gif"/>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState({
            loading:state=>state.loading
        })
    }
}
</script>

<style lang="scss" scoped>
.loading{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    background:rgba(0,0,0,.3);
    z-index: 99;
    img{
        height:2rem;
    }
}
</style>



