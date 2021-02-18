<template>
    <div class="continer">
        <nav-home-cp />
        <nav-menu-cp />
        <hr class="bg-danger">
        <p>main home page.... test again..</p>
    </div>
</template>

<script>
import NavHomeCp from "./NavHomeCp.vue"
import NavMenuCp from './NavMenuCp.vue'

    export default 
{
        name:'HomeCp',
          components: { NavHomeCp, NavMenuCp },
    }
</script>

<style lang="scss" scoped>

</style>