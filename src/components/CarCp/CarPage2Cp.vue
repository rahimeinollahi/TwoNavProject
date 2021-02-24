<template>
    <div class="continer">
        <div  class="row">
            <div  class="col-md-4 mt-1" v-for="item in getDataPage2" :key="item.id">
                <div id="image-gallery-page2" class="thumbnail" >
                            <div clcard p-1>
                            <img class="img-fluid " :src="item.url" alt="item.alt" style="width:100%">
                                <div id="image-btn" class="caption list-group-item list-group-item-action ">
                                    <p class="text-center ">{{item.text}}}</p>
                                </div>
                        </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
    export default {
        name:'CarPage2Cp',
        computed:{
            getDataPage2()
            {
                return this.$store.state.carIndex.carPage2;
            }
        }
    }
</script>

<style lang="scss" scoped>
#image-gallery-page2:hover{
box-shadow: 2px 2px 8px blue;
}
img{
height: 180px;
object-fit: fill;
}
</style>