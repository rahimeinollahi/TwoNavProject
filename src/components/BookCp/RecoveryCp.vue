<template>
    <div class="continer bg-light">
        <div class="row mt-3">
            <div class="col-sm-5 bg-recover mtm-3 left-side-height text-center "> 
                <br><br><h4 class="text-white mt-3">*2/4*</h4><br><br>
                <h1 class="text-white mt-3 p-3  ">Navigation your health in the COVID-19</h1><br><br>
                <h3 class="text-white ">Join team bright pink for the 2021 chicago marathon.</h3>
                <br><br><button class="btn btn-warning mt-3 font text-uppercase font-weight-bold"> learn more</button>
            </div>

            <div class="col-sm-7">
                <img class="img-fluid w-100 h-100 img-thumbnail rounded" src="/../../image-as/recover.jpg" alt="image right side recover">
            </div>
        </div>

        <div class="bg-light text-center mt-3">
            <h3 class="mt-3">Explore our resources & get involved</h3>

                <div class="row justify-content-center">
                        <div class="col-sm-4 border-button-page card p-3 text-center justify-content-md-center" v-for="item in recoverImageItem" :key="item.id">
                                <div class="text-center mt-3">
                                    <img class="rounded  text-center justify-content-md-center mt-2" style="width:60px" :src="item.url" alt=" image cloths">
                                </div>
                                <h3 class="mt-3">{{item.text}}</h3><i class="fas fa-coffee"></i>
                                <router-link class="mt-3 px-3 router-link-hover text-danger font text-uppercase font-weight-bold" :to="{ath:item.router}">{{item.routerText}}}</router-link>
                        </div>
                </div>

                <div class="row  mt-2 bg-middle-page text-white justify-content-beetween text-center set-center-text" >
                    <div class="col-sm-6 justify-content-center text-center mt-2 pt-3">
                        <h2 class="mt-3 p2-3 text-white">Knowledge is power</h2>
                        <h6 class="text-white mt-3 pt-3">Learn what steps you can take now to reduce your risk of breast and ovarian cancer so you can take charge of your health.</h6>
                        <button class="btn text-white btn-info font text-uppercase font-weight-bold mt-3">TAKE CHARGE OF MY HEALTH</button>
                    </div>  
                    <div class="col-sm-6">
                            <img class="img-fluid w-100 h-100 img-thumbnail rounded" src="/../../image-as/image2.webp" alt="image right side recover">
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        name:'RecoveryCp',
        computed:mapState(['recoverImageItem'])
    }
</script>

<style lang="scss" scoped>
.bg-middle-page
{
    background-color: #f543d7;
}
    .bg-recover{
        background-color: #822659;
    }
    .left-side-height{
        height: 500px;
        align-items: center;
        justify-content: center;
        align-content: center;
    }
    img{
        object-fit:fill;
    }
    .border-button-page{
        border-bottom: 3px solid red;
    }
    .router-link-hover:hover{
        // transform: scale(5);
        // -ms-transform: scale(5);
        transform: translateY(-5px);
        -ms-transform: translateY(-5px);
    }
    .set-center-text{
        align-items: center;
        justify-content: center;
        text-align: center;
    }
</style>