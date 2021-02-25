<template>
    <div class="continer">
        <nav-car-cp />
        <div class="btn-light justify-content-center text-center mt-2 pt-3">
            <h6 class="color-pink mt-3">right-link</h6>
            <h6 class="color-pink2 mt-3">NERISE</h6>
            <h6 class="font-weight-bold text-warning mt-3">Celebrating a decade of partnership</h6>
            <p class="color-pink2 pt-3 mt-3">Through 10 years of partnership, Aerie has generously contributed over $2 million dollars to fuel Bright Pink’s mission. Learn more about our partners and join in on the fun by working with us.</p>
            
            <button @click="alertTest" class="btn-warning rounded mb-3   text-dark font-weight-bold">LEARN ABOUT ABOUT PARTNER</button>
        </div>
        <!-- <router-view /> -->
        <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
import NavCarCp from '../../components/CarCp/NavCarCp.vue'
    export default {
        name:'CarHome',
        components:{
            NavCarCp,

        },
        methods:{
                alertTest(){
                    alert('NOT WORK SORRY MY FRIEND')
                }
            }
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'recover-header-font';
    src: url('../../assets/fonts/AguafinaScript-Regular.ttf');
}
@font-face {
    font-family: 'recover-header-font2';
    src: url('../../assets/fonts/AguafinaScript-Regular.ttf');
}
    .color-pink{
       color: rgb(238, 8, 180);
       font-family: 'recover-header-font';
       font-size: 20px;
    }
    .color-pink2{
       color: rgb(122, 101, 117);
       font-family: 'recover-header-font2';
       font-size: 20px;
    }

    //ts carpage1
.ts-carpage1-enter-active,
.ts-carpage1-leave-active{
  transition: all 0.5s ease-out 0.5s;
}
.ts-carpage1-enter-from,
.ts-carpage1-leave-to{
  opacity: 0;
  -ms-transform:translate(35px);
  transform:translate(35px);
}
//ts carpage2
.ts-carpage2-enter-active,
.ts-carpage2-leave-active{
  transition: all 0.5s ease-out 0.5s;
}
.ts-carpage2-enter-from,
.ts-carpage2-leave-to{
  opacity: 0;
  -ms-transform:translate(35px);
  transform:translate(35px);
}
</style>