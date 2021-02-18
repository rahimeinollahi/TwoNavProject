<template>
    <div class="continer">
         <home-cp />
        <div class="p-2">
            <h3>Computer Gallery</h3>
            <p class=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus doloremque eveniet libero fugit, voluptatum dolor
                Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar.
                Click Insert and then choose the elements you want from the different galleries. Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme. Save time in Word with new buttons that show up  dignissimos blanditiis possimus architecto obcaecati sed, voluptates eos illo nihil aliquid in. Possimus, temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores accusamus atque aut doloribus voluptatum repellendus expedita neque qui sed, non deserunt excepturi consequuntur quam ipsum mollitia tempora quas dolore!
            </p>
        </div>
         <div  class="row">
            <div  class="col-md-4 mt-1" v-for="item in getImages" :key="item">
                <div id="image-gallery" class="thumbnail">
                        <router-link class="card p-1" :to="{path:item.router}">
                            <img class="img-fluid h-50" :src="item.url" :alt="item.alt" style="width:100%">
                                <div id="image-btn" class="caption list-group-item list-group-item-action ">
                                    <p class="text-center ">{{item.imageDecs}}</p>
                                </div>
                        </router-link>
                </div>
            </div>
         </div>
   </div>
</template>

<script>
import HomeCp from '../../components/MainHomeCp/HomeCp.vue'
    export default {
  components: { HomeCp },
        name:'HomePage',
        computed:{
            getImages(){
                return this.$store.state.c.imagesHome;
            },
            data(){
                return{pathis:'../../../ima'}
            }
        }
    }
</script>

<style lang="scss" scoped>
@import'../../assets/sass/base/_variable.scss';
@font-face {
    font-family: 'home-font';
    src: url('../../assets/fonts/AlexandriaFLF-Italic.ttf');
}
*{font-family: 'home-font';}
h3{
    text-shadow: 2px 3px 12px red;
}
p{
    text-indent: 50px;
    text-align: justify;
    line-height: 38px;
}
#image-gallery:hover{
box-shadow: 2px 2px 12px $bg-text-shadow-color}
#image-btn{
    background-color: $bg-image-btn-color;
}
#image-btn:hover{
background-image: linear-gradient(to right, $bg-image-color1 , $bg-image-color2);}
img{
    object-fit: cover;
    max-height: 250px;
}
img:hover{
    opacity: 0.3;
    border: 1px solid red;
}
img{
    // position: absolute;
}
</style>