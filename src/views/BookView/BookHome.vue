<template>
    <div class="continer pl-2 pr-2">
        <div class="row">
            <div class="col-sm-4 bg-leftside"><left-side-cp /></div>
            <div class="col-sm-8"><router-view /></div>
        </div>
        
    </div>
</template>

<script>
import LeftSideCp from '../../components/BookCp/LeftSideCp.vue'
    export default {
  components: { LeftSideCp },
        name:'BooksHome'
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';
.bg-leftside{
    background-color: $bg-leftside;
}
</style>