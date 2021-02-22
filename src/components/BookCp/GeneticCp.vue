<template>
    <div id="home-page-genetic" class="continer">
        <div class="bg-white-page">
            
                <div class="text-center mt-3"> 
                    <img class="rounded-circle bg-light border" src="/images-genetic/1.png" alt="Oxf-speech-blue">
                </div>

                <div class="row d-flex justify-content-center text-center mt-3">
                    <div class="col-sm-4">
                        <p class="p-genetic-font-size">"An absolutely outstanding virtual learning programme that provides one of the very few globally connected opportunities to uniquely understand several aspects of artificial intelligence. Equips any type of professional in any sector for the future.”</p>
                    </div>
                </div>
                        <h3 class="text-center mt-3">Jeff Hoffmann, Senior Consultant, Booz Allen Hamilton</h3>
        </div>

        <div class="bg-light text-center d-flex justify-content-center p-3">
            <div class="row text-center justify-content-center m-3">
              <img class="col-sm-10 m-3 img-thumbnail text-center" src="/image-hw/1.jpg" alt="">
            </div>
        </div>
        <div class="bg-light ">
            <div class="row d-flex justify-content-center">
                <div class="col-sm-4">
                    <h5 class="text-center mt-3">An online education that sets you apart</h5>
                    <p class="text-center text-center-justify m-3">This Oxford Artificial Intelligence Programme is delivered in collaboration with leaders in digital education GetSmarter. Join a global community of professionals who have already had the opportunity to:</p>
                 </div>
            </div>

            <div class="row d-flex justify-content-between text-center">
                <div class="col-sm-3  justify-content-around text-center" v-for="value in getDataMiddle" :key="value.id">
                    <img class="rounded-circle bg-light p-1 text-center " :src="value.url" alt="image mid one">
                    <p class="text-center">{{value.content}}</p>
                </div>
            </div>
        </div>

            <div class="row bg-footer-gen  justify-content-center pt-3">
                <div class="col-sm-6">
                    <h4 class="text-center mt-3">Get your programme prospectus</h4>
                    <h6 class="text-left mt-3">Want to know more?</h6>
                    <p class="text-left mt-3">Enter your information below to access the programme prospectus from GetSmarter.</p>
                    <p><small>* Required Field</small></p>
                    
                    <form action="/action_page.php">
                    <div class="form-group row ">
                            <div class="col-sm-6 mt-3">
                                <label for="fname">First Name:</label>
                                <input type="text" class="form-control" placeholder="Enter First name" id="fname" required>
                            </div>
                            
                            <div class="col-sm-6 mt-3">
                                <label for="lname">Last Name:</label>
                                <input type="text" class="form-control" placeholder="Enter last name" id="lname" required>
                            </div>
                            <div class="col-sm-12 mt-3">
                                <label for="email">Email address:</label>
                                <input type="email" class="form-control" placeholder="Enter email" id="email" required>
                            </div>

                            <p class="mt-3 mt-3"><small>By consenting to receive communications, you agree to the use of your data as described in our privacy policy. You may opt out of receiving communications at any time.</small></p>

                            <button type="submit" class="btn btn-warning ">Submit</button>
                    </div>
                    </form>
                </div>
            </div>  
                <div class="bg-light mt-3 row">
                    <address class="col-sm-6">
                           Contact us:<a href="#home-page-genetic" class=" active"> r.einollahi1@gmail.com | 09147861734</a>.<br>
                            GetSmarter, a 2U, Inc. brand<br>
                            Example.com<br>
                            Copyright ©2021 GetSmarter. All rights reserved | Privacy Policy<br>
                            USA
                    </address>
                    <div class="col-sm-6 justify-content-center text-center mt-3">
                       <img class="  img-fit over-flow-auto  rounded-circle mx-auto d-block mt-3" src="../../rahim.jpg" alt="image logo">
                    </div>
                </div>
                        
    </div>
    
</template>

<script>
    export default {
        name:'GeneticCp',
        computed:{
            getDataMiddle(){
                return this.$store.state.ast.middleItem3;
            }
        }
    }
</script>

<style lang="scss" scoped>
.img-fit{
    object-fit: cover;
    max-width: 60px;
    max-height: 60px;
}
.bg-footer-gen{
background-color: #ffefee;
}
.text-center-justify{
    text-align: justify;
}
.bg-white-page{
    background-color: #ffffff;
}
.p-genetic-font-size{
    font-size: 1rem;
}
.p-scroll-y
{
    // overflow-y: auto;
    max-height: auto;
}
</style>