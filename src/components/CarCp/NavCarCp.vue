<template>
    <div class="continer">
        <div class="d-flex justify-content-center mt-3 ">
            <button class="btn btn-warning btn-lg rounded  text-white border">DONATE</button>

            <router-link class="icon-margin" to="/carhome/"><i class="fa fa-instagram" style="font-size:36px; color:red"></i></router-link>
            <router-link class="icon-margin" to="/carhome/carpage2"><i class="fa fa-twitter" aria-hidden="true" style="font-size:36px;"></i></router-link>
            <router-link class="icon-margin" to="/carhome/"><i class="fa fa-facebook" style="font-size:36px; color:red"></i></router-link>

            <input type="text" placeholder="Email Address" class="bg-dark mr-3 ml-3 rounded text-white nav-link mt-2 form-control">
            <button class="bg-info nav-link text-white font-weight-bold rounded mr-3 ml-3">GET UPDATED</button>
        </div>

    </div>  
</template>

<script>
    export default {
        name:'NavCarCp'
    }
</script>

<style lang="scss" scoped>
.btn-bg-color{
    background-color: rgb(236, 10, 217);
    font-size: 2rem;
    font-weight: bold;
}
.icon-margin{
    width: 40px;
    height: 40px;
    margin-right: 10px;
    margin-left: 10px;
}
.inputemail:focus{
    text-shadow: 5px 8px 12px red;
    color: blue;
}
</style>