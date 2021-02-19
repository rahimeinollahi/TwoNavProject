<template>
    <div  class="continer mt-2 pl-3 ">
        <div class="row d-flex justify-content-center text-center h-100  bg-light" v-for="item in leftSideItem" :key="item.id">
            <h3 @click="item.showLink=!item.showLink" class="btn btn-dark btn-block dropdown-toggle">{{item.header}}</h3>
            <div v-if="item.showLink" class="col-sm-12">
                <div class="col-sm-12" v-if="item.parts">
                 <router-link  class="btn btn-light btn-block" v-for="sub in item.parts" :key="sub.id" :to="sub.router">{{sub.linkText}}</router-link > 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        name:'LeftSideCp',
        computed:mapState(['leftSideItem'])
    }
</script>

<style lang="scss" scoped>

</style>