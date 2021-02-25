<template>
    <div  class="continer  border ">
        
        <div id="login-page" class="mt-3 border  ">
                 <div  class=" m-3  text-center justify-content-center">
            <img src="/../../../image-as/rahim.jpg" class=" mb-6 bg-light  justify-content-center text-center rounded-circle" alt="image photo">
         </div>

            <div class="  justify-content-center mt-3 mb-3 p-3" >
                         <form  class="was-validated " id="form-id">
                            <div class="form-group">
                                <input type="text" class="form-control" id="uname" placeholder=" username is: 'rahim'" name="uname" required v-model="txtusername">
                                <div class="valid-feedback">Valid.</div>
                                <div class="invalid-feedback">Please fill out this field.</div>

                                <input type="password" class="form-control" id="uname" placeholder=" password is: '1'" name="uname" required v-model="txtpass">
                                <div class="valid-feedback">Valid.</div>
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </div>
                             <!-- <button @click="checklogIn" type="submit" class="btn btn-primary btn-block">Submit ok</button> -->
                             <button @click="checklogIn" class="btn btn-primary btn-block">check</button>
                         </form>
                 </div>
        </div>
               
    </div>
</template>

<script>
import $ from 'jquery';
$(document).ready(function(){
    $("#form_id").submit(function(){
        return false;
    });
});

    export default {
        name:'LogInHomeCp',
        data(){
            return{
                txtusername:'',
                txtpass:''
            }
        },
        methods:{
            checklogIn(){
                if(this.txtusername==='rahim' && this.txtpass==='1'){
                    this.$router.push({ name: 'home'})
                }
                else{
                    alert('UserName or Pass is invalid userName is:"rahim" pass is:"1"');
                    this.txtusername="";
                    this.txtpass="";
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/base/_variable.scss';

#login-page{
position: absolute;
transform: translate(-50px,-40px);
top: 40%;
left: 50%;
padding: 5px;

}
img{
    width: 100px;
    height: 100px;
    padding: 5px;
    border:  1x solid rgb(255, 8, 193);
    
}
img:hover{
    border: 1px solid red;
}
.mainpagelogin{
// background-color: line;
 background-color: red; /* For browsers that do not support gradients */
  background-image: linear-gradient(to right, rgb(238, 212, 230) , rgb(229, 241, 160));
  padding: 5px;
// //   position: relative
// height: 100%;
// background-position: center;
// background-repeat: no-repeat;
// // background-size: cover;
//   background-size: auto;
// height: 800px;
}

</style>