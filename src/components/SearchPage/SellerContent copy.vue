<script>
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/firebaseconfig"



const querySnapshot = await getDocs(collection(db, "usersForProj"));

export default{
  data(){
    return{
      services: [],
      // imageUrl: '/src/assets/Img/Tirsa/'
    }
  },
created(){
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  this.services.push(doc.data())
  console.log(this.services)
});
},



}

</script>



<template>

   <div class="container-fluid">
        <div class="content m-3">
          <div style="text-align: center; margin: 15px; margin-bottom: 30px;">
            <h1 class="ms-5">New to buying in BookMe?</h1>
            <p class="ms-5">Discover sellers with a great track record at guiding new buyers.</p>
          </div>
          <div class="section" style="background: color #4f7369;">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-lg-4 col-md-6 col-sm-12"  data-aos="fade-up" data-aos-delay="300" v-for="service in services" >
                  <div 
                  class="box-feature mb-4" 
                  style="height: 570px;">
                    <div class="text-center">
                    <img v-if="service.serviceList.serviceImage && service.serviceList.serviceImage.length > 0"
                    :src="'/src/assets/Images/Tirsa/' + service.serviceList.serviceImage[0]" class="cropped-image">
                    <span class="flaticon-house mb-3 d-block"></span>
                    <!-- <img src="person_1-min.jpg" alt="Image" class="img-fluid rounded-circle w-25 mb-4"> -->
                    <h3 v-if="service.name" class="mb-2" style="color:black; font-size: 20px;">{{ service.name }}</h3>
                    <p v-if="service.serviceList.serviceCategory" class="text-black fw-normal" style="font-size: 15px;">{{ service.serviceList.serviceCategory }}</p> 
                    <p v-if="service.serviceList.serviceDescription" class="text-black fw-normal">{{ service.serviceList.serviceDescription }}</p> 
                
                    <p v-if="service.serviceList.productArray[0] && service.serviceList.productArray[0].pricing" class="text-black">From SGD {{ service.serviceList.productArray[0].pricing }}</p>
                    <!-- <p><a href="#" class="learn-more">Read more</a></p> -->
                    <RouterLink  v-if="service.calendlyURL"
                    :to="service.calendlyURL" to="/ServiceProvider">Read more</RouterLink>
                  </div>
                  </div>
                </div>
                
                </div>
              </div>

            </div>
          </div>
        </div>



</template>

<style>
.cropped-image {
  width: 350px;
  max-width: 100%;
  height: 300px; 
  object-fit: cover; 
  margin: auto;
}

.content{
            background-color: #4f7369;
            border: #4f7369 1px solid;
            border-radius: 20px;
            padding: 20px;
            color: white;
        }
        button{
          background-color: #194759 !important;
          color: white;
          
        }
        
        .categories,.suggested{
            font-size: 20px;
        }

        .numberOfService{
            top: 10px;

        }
        .box-feature {
        background: #fff;
        border-radius: 4px;
        padding: 30px;
        margin-bottom: 30px; 
      }
        .box-feature h3, .box-feature .h3 {
          font-size: 16px;
          margin: 0;
          padding: 0; 
        }
        .box-feature [class^="flaticon-"] {
          color: #00204a;
          font-size: 60px;
          margin: 0 0 10px 0;
          display: block;
          padding: 0;
          line-height: 0; 
        }

</style>