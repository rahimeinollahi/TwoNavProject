<template>
  <div id="main-home-page">
    <!-- <nav-home-cp /> -->
    <nav-home-cp />
     <!-- <router-view /> -->
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition">
          <component :is="Component" />
        </transition>
    </router-view>
  </div>
</template>

<script>
import NavHomeCp from '../../components/MainHomeCp/NavHomeCp.vue'

export default {
  name: 'Home',
  components: 
    {NavHomeCp
  }
}
</script>
<style lang='scss' scoped>

</style>
