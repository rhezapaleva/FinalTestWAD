<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="ps-5">
        <!-- Write a Review Section -->
        <h2 >Write a Review</h2>
        <v-rating
  half-increments
  hover
  :length="5"
  :size="32"
  v-model = "newRating"
  active-color="primary"
 />
        <v-textarea v-model="newReview" label="Write your review" rows="4" ></v-textarea>
        <v-btn @click="addReview" color="#194759">Submit</v-btn>
      </v-col>
      
      <v-col cols="12" class="ps-5">
        <!-- Existing Reviews Section -->
        <h2 class="existing-reviews-header">Reviews</h2>
        <v-card class="existing-reviews-card align-middle" v-for="(review, index) in reviews" :key="index+1" >
          <v-card-title class="pt-0 pb-3">
            {{ review.reviewerName}}
            <v-rating half-increments readonly :length="5" :size="30" :model-value="review.rating" color="warning" active-color="warning"/>
          </v-card-title>
          <v-card-text>
            <div class="review-text">{{ review.review}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { useStore } from 'vuex';
// const store = useStore();
//     const currentUser = store.state.user
import  db  from '@/firebase/firebaseconfig'; // Import your Firestore instance
import {auth} from '@/firebase/firebaseconfig'
import {doc, updateDoc, arrayUnion,onSnapshot} from "firebase/firestore";
const user = auth.currentUser

export default {
  data() {
    return {
      newReview: '',
      newRating: 0,
    };
  },
  

  methods: {
   
  async addReview() {
    const username = user.email.split('@')[0]
    const userDocRef = doc(db, "usersForProj", this.docId);
    ; // Replace 'USER_DOCUMENT_ID' with the actual user's document ID
    console.log(this.docId)
    if (this.newReview.trim() !== '' && this.newRating > 0) {
      try {
        const reviewData = {
          reviewerName: username, // You can replace this with the actual user's name
          rating: this.newRating,
          review: this.newReview,
        };

        // Add the review to Firestore
        // await db.collection('reviews').add(reviewData);
        
        // Clear the input fields
        await updateDoc(userDocRef, {
    reviews: arrayUnion(reviewData)
});
this.newRating = 0
this.newReview = ''
      } catch (error) {
        console.error('Error adding review:', error);
      }
    }
  },
},

  props:{
    reviews: Array,
    docId: String
  },
};
</script>

<style scoped>
.existing-reviews-header {
  font-size: 20px;
  margin-bottom: 10px;
}

.review-date {
  font-style: italic;
  color: #777;
}

.review-text {
  margin-top: 10px;
}

.existing-reviews-card {
  margin-bottom: 20px;
  
}

</style>