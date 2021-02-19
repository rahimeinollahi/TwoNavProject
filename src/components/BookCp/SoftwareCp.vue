<template>
    <div id="home-software" class="continer">
       <div class="row">
           
           <div class="col-sm-10"  >
               <div v-for="value in softwareRside" :key="value" :id="value.id">
                         <h2>{{value.textCtn}}</h2>
                       <span><a href="#home-software"><i class="fas fa-home"></i></a></span>
                   
                   <p>{{value.mainCtn}}</p>
               </div>
           </div>
           <div class="col-sm-2 bg-dark ">
               <a v-for="item in softwareRside" 
                    class="btn-block  d-flex justify-content-center btn btn-light mr-1 "
                    :key="item.id" :href="'#'+item.href" 
                    data-trigger="hover"
                    :title="item.title" data-toggle="popover" 
                    data-placement="left"
                    data-content="Content">{{item.title}}</a>
           </div>

          
       </div>
    </div>
</template>

<script>
import $ from 'jquery';
import {mapState} from 'vuex'
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});
    export default {
        name:'SoftwareCp',
        computed:mapState(['softwareRside'])
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
.fix-sw{
    // scroll-behavior: smooth;
    // overflow-y: scroll;
    // height: 50%;  
    overflow: auto;
    // overflow-x: scroll;

}

h2{
    text-shadow: 5px 5px 15px $text-sh-color;
}
p{
    line-height: 50px;
    text-align: justify;
    text-indent: 50px;
}
.h100p{
    height: 100%;
}



</style>