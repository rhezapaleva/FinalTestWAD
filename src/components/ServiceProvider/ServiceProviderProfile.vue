<template>
  <v-container class=" first-container pt-0 ps-5" >
    <v-container class="gig-overview p-0">
      <h1 >{{ serviceTitle }}</h1>

      <v-container>
        <v-row>
          <!-- Left Column: Image Avatar -->
          <v-col cols="2" class="profileimage">
            <v-avatar size="80">
              <v-img :src= "'/src/assets/Images/Tirsa/' + profileImage"></v-img>
            </v-avatar>
          </v-col>

          <!-- Right Column: Name and Username -->
          <v-col cols="10" class="align-text-bottom">
            <div class="name">{{ name }}</div>
            <div class="username">@{{ username }}</div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  props:{
  name: String,
  username: String,
  profileImage: String,
  serviceTitle: String,
}
};
</script>

<!-- <style scoped>
.service-provider-profile {
  text-align: center;
  padding: 20px;
}

.service-provider-profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.service-provider-profile h1 {
  font-size: 24px;
  margin: 10px 0;
}

.service-provider-profile p {
  font-size: 16px;
}
</style> -->
<style scoped>
v.avatar {
  text-align: right;
}


.profileimage {
  text-align: center;
}
</style>
