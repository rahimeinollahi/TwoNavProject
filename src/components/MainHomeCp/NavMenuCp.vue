<template>
    <div class="continer">
        <ul id="bg-nav-menu" class="nav nav-pills justify-content-center ">
            <!-- <li class="nav-item">
                 <a class="nav-link active" href="#">{{Active}}</a>
            </li> -->

            <li class="nav-item dropdown"  v-for="item in getNavHome" :key="item.id">
            <a class="nav-link dropdown-toggle btn-dark m-2" data-toggle="dropdown" href="#">{{item.nameToggle}}</a>
            <div class="dropdown-menu" v-if="item.parts">
                <!-- <a class="dropdown-item" href="#" v-if="sub in item.parts" :key="sub.id">{{sub.linkItem}}</a></div> -->
                <a class="dropdown-item text-center" href="#" v-for="sub in item.parts" :key="sub.id">{{sub.linkItem}}</a></div>
            </li>
            </ul>
    </div>
</template>

<script>
    export default {
        name:'NavMenu',
         computed:{

            getNavHome(){
                return this.$store.state.b.navMenuItems
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
#bg-nav-menu{
    background-color: $bg-nav-menu-color;
}
</style>