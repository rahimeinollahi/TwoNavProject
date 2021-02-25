<template>
    <div class="continer">
         <nav-menu-cp />
         <!-- <home-cp /> -->
        <!-- <router-view /> -->
            <router-view v-slot="{ Component, route }">
                <transition :name="route.meta.transition">
                  <component :is="Component" />
                </transition>
          </router-view>
   </div>
</template>

<script>
// import HomeCp from '../../components/MainHomeCp/HomeCp.vue'
import NavMenuCp from '../../components/MainHomeCp/NavMenuCp.vue'
    export default {
  components: { NavMenuCp },
//   components: { NavMenuCp },
        name:'HomePage',
        
    }
</script>

<style lang="scss" scoped>


</style>