<template>
    <div class="continer">
        <div class="jumbotron mt-1">
            <h3 class="text-danger">For the testig page ...</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, totam? Placeat repudiandae dolorem tenetur magni debitis adipisci unde accusamus optio est commodi nam odit veritatis dolor ex facere, eligendi excepturi!</p>
        </div>
        <hr class="bg-warning">
        <div  class="row m-2 " v-for="item in javaItem" :key="item.id">
            <div  class="col-sm">
                <h3>{{item.header}}</h3>
                <p class="">{{item.text}}</p>
            </div>
               <img @click="add"  class="rounded col-sm-2 img-fluid img-thumbnail mx-auto" :src="item.imgurl" alt="image java photo" >

            <!-- <div class="col-sm-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero ex eius ab? Voluptatum amet delectus eos, officia, maiores ipsum quidem doloremque sit provident alias ab vel, obcaecati repellendus rem?</p>
            </div> -->
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        name:'JavaCp',
        computed:mapState(['javaItem']),
        methods:{
            add(){
                alert('added feauter in soon..')
            }
        }
    }
    
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
// $text-sh-color:red;
// $text-sh-color2:red;
// $img-br-color:yellow;
h3{
    text-shadow: 2px 3px 12px $text-sh-color,
    5px 6px 15px $text-sh-color2;
}
img{
//   max-width: 100px;
    object-fit: cover;
    max-height: 120px;
    
}
img:hover{
    border: 1px solid  $img-br-color;
    opacity: 0.6;
}
p{
text-align: justify;
line-height: 30px;
}
</style>