<template>
    <div class="continer pl-2 pr-2">
        <div class="row">
            <div class="col-sm-4 bg-leftside"><left-side-cp /></div>
            <!-- <div class="col-sm-8"><router-view /></div> -->
            <div class="col-sm-8">
            <router-view v-slot="{ Component, route }">
                <transition :name="route.meta.transition">
                    <component :is="Component" />
                </transition>
            </router-view>
            </div>
        </div>
        
    </div>
</template>

<script>
import LeftSideCp from '../../components/BookCp/LeftSideCp.vue'
    export default {
  components: { LeftSideCp },
        name:'BooksHome'
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
.bg-leftside{
    background-color: $bg-leftside;
}

//ts-software
.ts-software-enter-active,
.ts-software-leave-active{
  transition: all 0.4s ease-in 0.3s;
}
.ts-software-enter-from,
.ts-software-leave-to{
  opacity: 0;
  // transform:scale(2);
  transform:rotate(30deg);
}

//ts-bookhome
.ts-bookhome-enter-active,
.ts-bookhome-leave-active{
  transition: all 0.4s ease-in 0.3s;
}
.ts-bookhome-enter-from,
.ts-bookhome-leave-to{
  opacity: 0;
  transform:rotate(30deg);
}
</style>