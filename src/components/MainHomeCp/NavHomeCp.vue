<template>
    <div class="continer mt-3 p-2">
                <div id="nav-home-br" class="row nav ">
                    <ul class="nav nav-tabs col-sm-6 ">
                        <li v-for="item in getNavData" :key="item.id" :class="item.class">
                            <div v-if="item.id===1">
                            <router-link class="nav-link active " :to="item.router">{{item.linkName}}</router-link>
                            </div>
                            <div v-else>
                            <router-link class="nav-link" :to="item.router">{{item.linkName}}</router-link>
                            </div>
                        </li>
                    </ul>
                    <div class="col-sm-6">
                        <ul class="nav nav-tabs mr-2 mt-1">
                            <li class="nav-item btn-block">
                                <input class="nav-link form-control " type="text" name="txtserch" id="txtseacrch" placeholder="search item">
                            </li>
                        </ul>
                    </div>
                </div>
            
    </div>
</template>

<script>
    export default {
        name:'NavHomeCp',
        computed:{

            getNavData(){
                return this.$store.state.a.navHome
            }
        }
    }
</script>

<style lang="scss" scoped>
#nav-home-br{
    border-bottom: 1px solid black;
}
</style>