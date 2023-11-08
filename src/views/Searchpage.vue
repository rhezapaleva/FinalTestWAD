<template>
  <div class="Navbar">
    <Navbar />
  </div>
<!-- 
  <div class="Categories">
    <Categories />
  </div> -->

  <div class="Suggested">
    <Suggested />
  </div>
<!-- 
  <div class="Filter">
    <Filter />
  </div> -->

  <div class="SellerContent">
    <SellerContent />
  </div>

  <div class="Footer">
    <Footer />
  </div>

</template>

<script>

// import Categories from "../components/SearchPage/Categories.vue";
// import Filter from "../components/SearchPage/Filter.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/navbar.vue";
import SellerContent from "../components/SearchPage/SellerContent.vue";
import Suggested from "../components/SearchPage/Suggested.vue";

export default {
  components: {
    // Categories,
    // Filter,
    Footer,
    Navbar,
    SellerContent,
    Suggested,
  },
 methods:{
  selectCategory(category){
    console.log(category)
  }
 }
};
</script>
