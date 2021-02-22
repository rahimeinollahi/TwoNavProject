<template>
    <div id="homepage-astart" class="continer">
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

        <div class="bg-light pt-3">
            <h2 class="text-center mt-5">You'll walk away with:</h2>

            <div id="p-count" v-for="itemcount in getCountP" :key="itemcount.id" class="text-left">
                <span  class="text-warning text-big-font ">{{itemcount.id}}</span>
                <span class=" p-count-margin-left"><span class=" font-italic">{{itemcount.text}}</span><strong class="font-weight-bold"> {{itemcount.textBold}}</strong></span><br><br>
            </div>
        </div>
        
        <div class="div-col text-white pt-3 border-top-1-black">
            <h3 class="text-center">Programme outline</h3>

                <div class="row d-flex justify-content-center text-center">
                        <div class="col-sm-4 " >
                            <div class="" v-for="col in getPageCol1" :key="col.id">
                                <h4 class="text-left mt-1">{{col.header}}</h4>
                                <p class="p-colpage mt-3">{{col.contentPage}}</p>
                            </div>
                        </div>
                        <div class="col-sm-4 " >
                            <div class="" v-for="col2 in getPageCol2" :key="col2.id">
                                <h4 class="text-left mt-1">{{col2.header}}</h4>
                                <p class="p-colpage mt-3">{{col2.contentPage}}</p>
                            </div>
                        </div>
                </div>
                <p class="text-center">This programme does not require technical skills or the ability to code.123</p>

                <div class="bg-light  text-dark pt-3 text-center border-top-1-black">
                    <div class="">
                        <h3 class="mt-3">Your Programme Director</h3><br>
                    </div>
                    <div class="mt-1 d-flex justify-content-center text-center d-block center-block">
                         <img class=" rounded-circle card img-fluid img-orang p-1 inline-block " src="../../rahim.jpg" alt=" profile-image">
                    </div>
                         <h5 class="mt-3 font-weight-bold">Matthias Holweg</h5>

                         <div class="d-flex justify-content-center mt-3 row">
                             <p class="text-center col-sm-4 mt-3 middle-code-font">American Standard Companies Professor of Operations ManagementSaïd Business School, University of Oxford</p>
                         </div>

                         <div class="d-flex justify-content-center mt-3 row">
                             <p class="text-center col-sm-4 mt-3 parg-font">Matthias is an industrial engineer by training and is interested in how organisations generate and sustain process improvement practices. His research focuses on the evolution and adaption of process improvement methodologies as they are being applied across manufacturing, service, office and public sector contexts.</p>
                         </div>
                         <div class="d-flex justify-content-center mt-3 row">
                             <p class="text-center col-sm-4 mt-3 parg-font">You’ll also hear from a number of guest experts, including renowned industry professionals and global leaders during the programme, who will share their insights and opinions. Download the prospectus to see the full list.</p>
                         </div>
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
            },
            getPageCol1(){
                return this.$store.state.ast.middleCtn;
            },
            getPageCol2(){
                return this.$store.state.ast.middleCtn2;
            },
        }
    }
</script>

<style lang="scss" scoped>
.border-top-1-black{
    border-top:  2px solid #1d1b1b;
}
@font-face {
    font-family: 'astar-head-font';
    src: url('../../assets/fonts/AlexBrush-Regular.ttf');
}
@font-face {
    font-family: 'middle-code-font';
    src: url('../../assets/fonts/AguafinaScript-Regular.ttf');
}
.middle-code-font{
    font-family:  'middle-code-font';
}
@font-face {
    font-family: 'p-font-astart';
    src: url('../../assets/fonts/AlexandriaFLF.ttf');
}
.img-orang{
    border: 1px solid orange;
    margin-top: 1px;
}
.div-col
{
    background-color: #4a47a3;
}
.p-colpage{
    text-align: justify;
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