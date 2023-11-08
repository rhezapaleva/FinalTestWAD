<script>
import ServiceProviderProfile from "../components/ServiceProvider/ServiceProviderProfile.vue";
import Services from "../components/ServiceProvider/Services.vue";
import Reviews from "../components/ServiceProvider/Reviews.vue";
import Scheduling from "../components/ServiceProvider/Scheduling.vue";
import Payment from "../components/ServiceProvider/Payment.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/navbar.vue";
import Chatbox from "../components/ServiceProvider/Chatbox.vue";
import { collection, getDocs, query,where } from "firebase/firestore";
import db from "../firebase/firebaseconfig"


export default {
  data() {
    return {
      serviceId: 0,
      serviceDetails: {},
      name: "",
      username: "",
      profileImage: "",
      serviceImage: [],
      serviceDescription: '',
      calendlyurl: '',
      productArray: [],
      reviews: [],
      docId: '',
      longDescription: '',
    };
  },
  // computed: {
  //   serviceProviderId() {
  //     // Access the data from route parameters
  //     serviceId = this.$route.params.id
  //     console.log(this.$route.params.id)
  //     return this.$route.params.id;
  //   },
  // },
  async created() {
    // Fetch service details based on the route parameter (serviceId)
    //  this.serviceId = this.$route.params.id;
    // Fetch service details from your data source (e.g., JSON data)
    // Assign the service details to this.serviceDetails
    // for (let i = 0; i < data.length;i++){
    //   console.log(data[i])
    //   if (data[i].service.serviceId == this.serviceId){
    //     this.serviceDetails=data[i]
    //     // For service provider profile
    //     this.name = this.serviceDetails.user.name
    //     this.username = this.serviceDetails.user.username
    //     this.profileImage = this.serviceDetails.user.profileImage
        
    //     // For about me
    //     this.serviceImage = this.serviceDetails.service.serviceImage
    //     this.serviceDescription = this.serviceDetails.service.serviceDescription

    //     //For Scheduling
    //     this.calendlyurl = this.serviceDetails.service.calendlyURL
    //     console.log(this.calendlyurl)
        
    //   }
    // }
    // const querySnapshot = await getDocs(collection(db, "usersForProj"));
    const collectionRef = collection(db, "usersForProj");
    const q = query(collectionRef, where('serviceList.serviceId', "==",this.$route.params.id ));
    const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  const data = doc.data()
  this.serviceDescription = data.serviceList.serviceDescription
  this.name = data.name
  this.username= data.username
  this.serviceTitle = data.serviceList.serviceTitle
  this.calendlyurl = data.calendlyURL
  console.log(this.calendlyurl)
  this.productArray = data.serviceList.productArray
  this.reviews = data.reviews
  this.serviceImage = data.serviceList.serviceImage
  this.docId = doc.id
  this.profileImage = data.profileImage
  this.longDescription = data.serviceList.longDescription
  console.log(data.name)
});
  },
  
components: {Navbar,
    ServiceProviderProfile,
    Services,
    Reviews,
    Scheduling,
    Payment,
    Footer,
    Chatbox
  },
};
</script>
<template>
  <!-- <SearchBar/>
  <Categories/>
  <Filter/>
  <SellerContent/>
  <Suggested/>
  <Footer/> -->
  <!-- <button v-on:click="test(serviceId)">
    Test
  </button> -->
  <Navbar />
  
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <ServiceProviderProfile :name="name" :username="username" :profileImage="profileImage" :serviceTitle="serviceTitle" />
        <Services :longDescription="longDescription" :serviceImage="serviceImage" />
      </v-col>
      <v-col cols="12" md="6">
        <Scheduling :calendlyurl="calendlyurl" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <Reviews :reviews="reviews" :docId="docId"/>
      </v-col>
      <v-col cols="12" md="6">
        <Payment :productArray="productArray"/>
      </v-col>
    </v-row>
  </div>
  <Chatbox :name="name" :profileImage="profileImage"/>
  <Footer />
  

  <!-- <v-row>
        <v-col>
        <ServiceProviderProfile/>
      </v-col>
      <v-col>
        <Scheduling/>
      </v-col>
      </v-row>
      <v-row>
        <v-col>
        <Services/>
      </v-col>
      <v-col>
        <Payment/>
      </v-col>
      </v-row>
      <Reviews/> -->
</template>

<style scoped>
/* .service-provider-profile {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .profile {
    flex: 1;
  }
  
  .services,
  .reviews,
  .scheduling {
    flex: 1;
    margin-left: 20px; 
  }
   */
.scheduling {
  /* Set a specific width and height for the embedded widget */
  width: 100%;
  /* Adjust this as needed */
  margin: 0 auto; /* Center align the widget horizontally */

  /* You can add more styling as needed to customize the appearance */
  background-color: #4F7369;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
}

#payment {
  margin-left: 20pxz;
}


</style>
