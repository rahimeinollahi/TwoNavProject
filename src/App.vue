<template>
  <div >

  </div>
  <!-- <router-view/> -->
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <component :is="Component" />
    </transition>
  </router-view>  
</template>

<style lang="scss">
//ts carhome
.ts-carhome-enter-active,
.ts-carhome-leave-active{
  transition: all 0.5s ease-out 0.5s;
}
.ts-carhome-enter-from,
.ts-carhome-leave-to{
  opacity: 0;
  -ms-transform:translate(35px);
  transform:translate(35px);
}
//ts bookhome
.ts-bookhome-enter-active,
.ts-bookhome-leave-active{
  transition: all 0.5s ease-out 0.5s;
}
.ts-bookhome-enter-from,
.ts-bookhome-leave-to{
  opacity: 0;
  -ms-transform:translate(35px);
  transform:translate(35px);
}
</style>
