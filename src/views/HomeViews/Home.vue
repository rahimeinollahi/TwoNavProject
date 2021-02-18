<template>
  <div>
     <home-cp />
     <router-view />
  </div>
</template>

<script>
import HomeCp from '../../components/MainHomeCp/HomeCp.vue'

export default {
  name: 'Home',
  components: {
    HomeCp
  }
}
</script>
