<template>
    <div id="home-al" class="continer mt-3 pl-1 pr-1">
             <h2 class="header-al">For other uses, see Algorithm (disambiguation).</h2>
            <p class="p-intend">As an effective method, an algorithm can be expressed within a finite amount of space and time,[3] and in a well-defined formal language[4] for calculating a function.[5] Starting from an initial state and initial input (perhaps empty),[6] the instructions describe a computation that, when executed, proceeds through a finite[7] number of well-defined successive states, eventually producing "output"[8] and terminating at a final ending state. The transition from one state to the next is not necessarily deterministic; some algorithms, known as randomized algorithms, incorporate random input.[9</p>
                <hr class="bg-danger">

            <div class="row pl-3 d-flex justify-content-center" > 
                <div id="al-card" class="media  col-sm-5 mt-2 mx-1 " v-for="item in getDataAl" :key="item.id">
                    <router-link to='/carhome/carpage2'><img :src="item.imgurl" alt="John Doe" class="mr-3 mt-3 rounded-circle card" style="width:60px;"></router-link>
                   
                    <div id="al-hieht" class="media-body pt-3 ">
                        <h4 class="text-primary">{{item.title}}<small><i class="text-danger">{{item.price}}</i></small></h4>
                        <p>{{item.breif}}</p>      
                    </div>
                </div>

            </div>
    </div>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('some/nested/module')
// const { mapState } = createNamespacedHelpers('../../store/module/algorithm.js')
    export default {
        name:'AlgorithmCp',
        computed:{
            getDataAl(){
                return this.$store.state.d.alItem;  
            }
        }
    }
</script>

<style lang="scss" scoped>
@import'../../assets/sass/base/_variable.scss';
#home-al{
   background-image: linear-gradient(to  right, #ffeeee , #fffeee);
}

#al-card{
    border: 1px solid $border-algorithm-card-color;
}
#al-card:hover{
    opacity: 0.5;
    border: 1px solid $border-img-color;
}
img:hover{
    border: 1px solid $border-img-color;
    padding: 2px;
}
.header-al{
    text-shadow: 2px 3px 12px red;
}
.p-intend{
    text-indent: 15px;
    text-align: justify;
    line-height: 45px;
}
</style>