<template>
    <div class="continer">
        <div class="jumbotron mt-2">
            <h2 class="text-center">Oxford Artificial Intelligence Programme</h2>
            <p class="text-center justigy-content-center astar-header-font">Understand AI, its potential for business, and the opportunities for its implementation</p>
           
            <div class="text-center justify-content-center">
                 <button class="bg-warning btn btn-warning p-3"> VIEW PROSPECTUS</button>
            </div>
        </div>

        <div class="row justify-content-around" >
            <div class="col-sm-2 text-center" v-for="item in getAStar" :key="item.id">
                <img class="rounded img-fluid" :src="item.url" :alt="item.alt">
                <div class="text-center">
                    <h4>{{item.headerText}}</h4>
                    <p>{{item.ctnText}}</p>
                </div>
            </div>
        </div>

        <div  class="p-ctn justify-content-center text-center mt-3 text-white p-5">
            <p class="mt-3 parg-font"  v-for=" value in getCtn" :key="value.id">{{value.content}}</p>
        </div>

        <div class="bg-light">
            <p class="text-center mt-5">You'll walk away with:</p>

            <div id="p-count" v-for="itemcount in getCountP" :key="itemcount.id" class="text-left">
                <span  class="text-warning text-big-font ">{{itemcount.id}}</span>
                <span class="text-big-font p-count-margin-left"><span class="astar-head-font" style="font: 1em sans-serif;">{{itemcount.text}}</span><strong>{{itemcount.textBold}}</strong></span><br><br>
            </div>
        </div>
    </div>
</template>

<script>
// import {mapState} from 'vuex';
    export default {
        name:'AStarCp',

        computed:{
            getAStar(){
                return this.$store.state.ast.asartItem;
            },
            getCtn(){
                return this.$store.state.ast.middleAStart;
            },
            getCountP(){
                return this.$store.state.ast.countCtn;
            }
        }
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'astar-head-font';
    src: url('../../assets/fonts/AlexBrush-Regular.ttf');
}
@font-face {
    font-family: 'p-font-astart';
    src: url('../../assets/fonts/AlexandriaFLF.ttf');
}
.parg-font{
    font-family:'p-font-astart' ;
}
.astar-header-font
{
    font-family: 'astar-head-font';
}
h2{
    font-weight: bold;
}
button{
    font-weight: bold;
}
.jumbotron{
    border-bottom: 1px solid rgb(29, 28, 28);
}
.p-ctn{
    line-height: 30px;
    background-color: #28527a;
}
.text-big-font{
    font-size: 4rem;
    font-weight: bold;
    
}
@font-face {
    font-family: 'p-count';
    src: url('../../assets/fonts/myf.ttf');
}
.text-big-font{
    font-size: 20px;

}
#p-count{
    font-family:'p-count' ;
}
.p-count-margin-left{
    margin-left: 80px;
}
</style>