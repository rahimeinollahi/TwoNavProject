<template>
    <div class="continer">
         <nav-menu-cp />
         <!-- <home-cp /> -->
        <router-view />
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