<template>
    <div id="page-hardware-nav" class="continer">
        <!-- <div class="collapse navbar-collapse"> -->
            <ul class="nav nav-pills justify-content-end" v-for="item in navHardware" :key="item.id">
            <li class="nav-item dropdown mt-1">
                <a href="#" class="nav-link btn btn-dark mr-3 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{item.headerLink}}</a>
                <div v-if="item.parts" class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                    <router-link
                        v-for="sub in item.parts"
                        :key="sub.id" 
                        class="dropdown-item text-center    list-group-item-action bg-light text-dark" 
                        :to="sub.router">{{sub.textLink}}
                      </router-link>
                </div>
            </li>
        </ul>
        <!-- </div> -->
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        name:'NavHardware',
        computed:mapState(['navHardware'])
    }
</script>

<style lang="scss" scoped>

.dropdown:hover>.dropdown-menu {
  display: block;
  }
</style>