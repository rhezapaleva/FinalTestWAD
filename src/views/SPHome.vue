<template>
    <div class="spnavbar">
            <spnavbar />
    </div>
    <div class="container-fluid" style="background-color:#4F7369 ;border-radius: 5px;padding-bottom:10px; padding-top:25px;">
        <div class="row">
            <div class="col-md-4 col-12">
                <div class="container-fluid">
                    <!-- profile display take from waihong -->
                    <div class="row mb-5"> 
                      <div class="col-12">
                        <div class="card">
                          <img src="../assets/Images/Zan/acquisition.png" class="card-img-top" style="height: 60px;width:60px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                          <h5 class="card-title" style="text-align: center;color:#194759;">{{ data_array.name }}</h5>
                          <p class="card-text" style="text-align: center;color: #7EBFB3;">
                            Customer is #1 Priority!
                          </p>
                            <p style="text-align: center;">
                            {{ averageRating }} <small class="text-muted">({{ (data_array.reviews).length }} Reviews)</small>
                          </p>
                          <hr>
                          <p class="card-text">
                            <img src="../assets/Images/Zan/acquisition.png" style="height:20px ;width:20px; margin: 5px;"> Location : {{ data_array.location }}<br><br>
                            <img src="../assets/Images/Zan/acquisition.png" style="height:20px ;width:20px; margin: 5px;"> Member Since : {{ data_array.creationdate }}<br><br>
                            <img src="../assets/Images/Zan/acquisition.png" style="height:20px ;width:20px; margin: 5px;"> Avg. Response Time : {{ data_array.responsetime }} Hrs.<br><br>
                            <img src="../assets/Images/Zan/acquisition.png" style="height:20px ;width:20px; margin: 5px;"> Recent Sale(s) : {{ data_array.recentsales }} Day Ago</p>                              
                            </div>
                          </div>
    
                    </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-12">
                            <div class="card overflow-auto">
                                <div class="card-body">
                                  <h5 class="card-title">Successfully Completed Courses</h5>
                                  <br>
                                  <div v-for="courses in data_array.Courses">
                                  <p class="card-text" style="font-weight: bold;"><img :src="'../../src/assets/Images/Zan/' + courses.cimg" style="height:30px ;width:30px; margin: 5px; display: inline;">{{ courses.cname }}</p><br>    
                                  </div>
                                </div>
                              </div>
        
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-1">

            </div>
            <div class="col-md-7 col-12">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-12">
                            <p style="font-weight: bold;border: 1px solid rgb(205, 200, 200); border-radius:5px ; padding: 5px;color:white;">{{ data_array.name }}'s Services</p>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-4 col-12 mb-4" v-for="products in data_array.serviceList.productArray">
                            <div class="card">
                                <img :src="'../../src/assets/Images/TeckXuan/' + products.product_image" class="card-img-top">
                                <div class="card-body">
                                  <h5 class="card-title">{{ products.product_name }}</h5>
                                  <p class="card-text">{{ products.product_description }}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">SGD${{ products.pricing }}</li>
                                </ul>
                              </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                      <h2 style="color: white;">Customer Reviews</h2>
                      <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item" v-for="(reviewsSet, index) in reviewsSets" :key="index" :class="{ active: index === 0 }">
                            <div class="card-group">
                              <div class="card" v-for="(review, reviewIndex) in reviewsSet" :key="reviewIndex">
                                <img src="../assets/Images/Zan/acquisition.png" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                                <div class="card-body">
                                  <h5 class="card-title" style="text-align: center;">{{ review.reviewer }}</h5>
                                  <p class="card-text" style="padding-bottom:30px">{{ review.review }}</p>
                                  <div class="rating-container">
                                  <p class="card-text"><small class="text-muted">{{ review.rating }}/5.0 <br><v-rating half-increments readonly :length="5" :size="30" :model-value="review.rating" color="warning"/></small></p>
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    
            
            
    
    
</template>
    
<script>

    import { arrayUnion, collection, doc, getDocs ,updateDoc} from "firebase/firestore"; 
    import db from "../firebase/firebaseconfig" 
    import spnavbar from "../components/spnavbar.vue";
    import { auth } from "../firebase/firebaseconfig.js";

    const querySnapshot = await getDocs(collection(db, "usersForProj")); 
    



      export default {
        components: {
        spnavbar,
    },
    data(){
      return{
        data_array: {},
        name: '',
        email: null,
        reviews: [],
        averageRating: 0,
      }
    },
    methods:{
      fetchEmail() {
      const user = auth.currentUser; // Get the currently logged-in user

      if (user) {
        // If a user is logged in
        this.email = user.email; // Set the email to the user's email
      } else {
        this.email = null; // If no user is logged in, set email to null
      }
    },    
    },
    created(){
      this.fetchEmail();
      querySnapshot.forEach((doc)=>{
        if (doc.data().email == this.email){
          this.data_array = (doc.data())
          console.log(this.data_array)
        }
      })

      },
      computed: {
    reviewsSets() {
      // Group reviews into sets of three
      const sets = [];
      for (let i = 0; i < this.data_array.reviews.length; i += 3) {
        sets.push(this.data_array.reviews.slice(i, i + 3));
      }
      return sets;
    },
    averageRating() {
      if (this.data_array.reviews.length === 0) {
        return 0; // Return 0 if there are no reviews to avoid division by zero.
      }

      const totalRating = this.data_array.reviews.reduce((sum, review) => sum + review.rating, 0);
      this.averageRating = (totalRating / this.data_array.reviews.length).toFixed(1);
      return (totalRating / this.data_array.reviews.length).toFixed(1); // Round to one decimal place.
    }
  }
  }
    
</script>
    
<style scoped>
.rating-container {
  position: absolute;
  bottom: 0;
  left: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: white; /* Set text color to white */
}
</style>../firebase/firebaseconfig.js