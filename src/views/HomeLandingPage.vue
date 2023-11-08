<template>
  <div class="Navbar">
    <Navbar />
  </div>

  <div class="FirstImage">
    <FirstImage />
  </div>

  <div class="Cardscarousel">
    <Cardscarousel />
  </div>

  <div class="Featurespage">
    <Featurespage />
  </div>

  <div class="MoreFeatures">
    <MoreFeatures />
  </div>

  <div class="Cilentsreviews">
    <Cilentsreviews />
  </div>

  <div class="Footer">
    <Footer />
  </div>
  
</template>

<script>
import Cardscarousel from "@/components/Home/Cardscarousel.vue";
import Cilentsreviews from "@/components/Home/Cilentsreviews.vue";
import Featurespage from "@/components/Home/Featurespage.vue";
import FirstImage from "@/components/Home/FirstImage.vue";
import Footer from "@/components/Footer.vue";
import MoreFeatures from "@/components/Home/MoreFeatures.vue";
import Navbar from "@/components/Navbar.vue";

import "../assets/icomoon/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  
  components: {
    Navbar,
    FirstImage,
    Cardscarousel,
    Featurespage,
    MoreFeatures,
    Cilentsreviews,
    Footer,
  },

  mounted() {
    AOS.init({
      easing: "ease", // Animation easing function
      // once: true, // Whether the animation should only occur once
    });
    AOS.refresh();
  },
 

};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: white;
}

.btn {
  border-radius: 10px;
  background-color: #194759 !important;
  color: #ebf2f1 !important;
  border: none !important;
}

.card {
  justify-content: center;
  width: fit-content;
}

.features,
.reviewsection {
  background-color: #ebf2f1;
  padding: 5px;
}
.person-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.person-wrap img {
  width: 100px; /* Adjust the width as needed */
  height: 100px; /* Adjust the height as needed */
  border-radius: 50%;
  text-align: center;
}

/*reviews*/

.person-contents h2 {
  text-align: center;
  text-decoration: none;
  justify-content: center;
}

.meta {
  color: grey;
  display: flex;
  justify-content: center;
}


</style>

