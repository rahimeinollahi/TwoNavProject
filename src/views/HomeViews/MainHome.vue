<template>
  <div>
    <!-- <nav-home-cp /> -->
    <nav-home-cp />
     <router-view />
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
