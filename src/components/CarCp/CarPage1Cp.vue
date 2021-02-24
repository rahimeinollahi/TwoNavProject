<template>
    <div class="continer">
            <div class="mt-3 p-3" v-for="item in getDataPage1" :key="item.id">
                <h1 class="mt-3">{{item.headerName}}</h1>
                <p class="font-weight-light mt-3  p-2">{{item.text}}</p>
            </div>
    </div>
</template>

<script>
    export default {
        name:'CarPage1Cp',
        computed:{
            getDataPage1(){
                return this.$store.state.carIndex.httpItem;
            }
        }
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'font-car-page1';
    src: url('../../assets/fonts/AlexandriaFLF-Italic.ttf');
}
*{font-family: 'font-car-page1' ;}

p{text-indent: 50px;
background-color: #ffeeee;
font-size: 20px;}
h1{
    text-decoration: underline;
    text-shadow: 3px 4px 15px red;
}
</style>