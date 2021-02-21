<template>
    <div id="homepage-hw-page2" class="continer ">
        
        <div class="jumbotron mt-2">
            <div class="row">
                <div class="col-sm-6 card">
                    <h4 class="text-center mt-2"><em class="text-info"> Testing  heade one page 2 of <strong>hardware</strong></em></h4>
                 <p class="p-page2" id="hd-page2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptate ea quidem a perspiciatis eligendi neque modi quae iusto fugiat facilis similique omnis quasi magnam! Enim animi obcaecati possimus omnis.
                </p>
                </div>
                <div class="col-sm-6 card">
                      <h4 class="text-center mt-2"><em class="text-info"> Testing  header twopage 2 of <strong>hardware</strong></em></h4>
                 <p class="p-page2" id="hd-page2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptate ea quidem a perspiciatis eligendi neque modi quae iusto fugiat facilis similique omnis quasi magnam! Enim animi obcaecati possimus omnis.
                </p>
                </div>
            </div>
        </div>
            <div class="row m-1  d-flex justify-content-center" >
                <div id="img-gallery-page1" class="col-md-4 border mt-1 p-1" v-for="item in hardwarePage2" :key="item.id">
                    <div class="thumbnail">
                        <router-link class="" :to="{path:item.router}">
                            <img class="img-fluid" :src="item.url" :alt="item.alt">
                            <p class=" mt-1 text-center btn-block btn btn-dark nav-link">{{item.imgText}}</p>
                        </router-link>
                    </div>
                </div>
        </div>

            <div class="d-flex justify-content-center mt-3">
                <a href="#page-hardware-nav" class="btn btn-info btn-lg ">
                  <span class="glyphicon glyphicon-home"></span> Home
                </a>
            </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        name:'HardwarePage2Cp',
        computed:mapState(['hardwarePage2'])
    }
</script>

<style lang="scss" scoped>
@import '../../../assets/sass/base/_variable.scss';
    img:hover{
        border: 2px solid $img-border-page-1-hover-color;
        opacity: 0.3;
    }
    .btn:hover{
        background-color: $btn-border-page-1-hover-color;
        color:  $text-border-page-1-hover-color;
    }
    #img-gallery-page2:hover{
        box-shadow: 2px 2px 10px $img-border-page-1-hover-color;
    }
    #hd-page2{
        line-height: 50px;
        text-indent: 50px;
    }
    h4{
 text-decoration: underline;       
  // border-bottom: 1px solid red;
    }
    .p-page2
    {
        text-align: justify;
    }
</style>