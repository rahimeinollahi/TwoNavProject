<template>
    <div class="continer">
        <nav-hardware-cp />
        <!-- <hardware-cp /> -->
        <router-view />
    </div>
</template>

<script>
// import HardwareCp from '../../../components/BookCp/HardwareCp.vue'
import NavHardwareCp from '../../../components/BookCp/HardwareCp/NavHardwareCp.vue'
    export default {
//   components: { HardwareCp, NavHardwareCp },
  components: {  NavHardwareCp },
        name:'Hardware'
    }
</script>

<style lang="scss" scoped>

</style>