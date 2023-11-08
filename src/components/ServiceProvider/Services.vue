<template>
  <div class="services ps-5">
    <v-carousel show-arrows="hover" v-model="activeIndex">
      <!-- <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item> -->
      <v-carousel-item
      :key="index"
        v-for="(image,index) in serviceImage"
        :src=" '/src/assets/Images/Tirsa/' + image"
        cover
      ></v-carousel-item>
    </v-carousel>

    <h2 class="aboutgig">About this gig</h2>
    <!-- <ul>
        <li v-for="service in services" :key="service.id">
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
          <p>Price: ${{ service.price }}</p>
          <button @click="scheduleService(service)">Schedule</button>
        </li>
      </ul> -->
    <p >
      {{ longDescription }}
    </p>
  </div>
</template>

<script>

export default {
  props: {
    serviceImage: Array,
    longDescription: String,
  },

  
  data(){
    return{
      activeIndex: 0
    }
  }
};
</script>

<style scoped>
.services {
  padding-left: 20px;
  z-index: 100;
}

.services ul {
  list-style: none;
  padding: 0;
}

.services li {
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
}

.services button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.aboutgig{
  padding-top: 20px;
}
</style>
