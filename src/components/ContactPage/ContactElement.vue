<template>
  <div class="background-container">
    <div class="background-image"></div>
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-9 text-center mt-5">
          <h1 class="heading text-light" data-aos="fade-up">Contact Us</h1>
          <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <ol class="breadcrumb text-center justify-content-center">
              <li class="breadcrumb-item">
                <router-link to="/" style="text-decoration: none; color: white"
                  >Home</router-link
                >
              </li>
              <li
                class="breadcrumb-item active text-white-50"
                aria-current="page"
              >
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactElement",
};
</script>

<style>
.background-container {
  position: relative;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.background-image {
  background-image: url("../../assets/images/TeckXuan/contact.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(0.7); /* Adjust the brightness as needed */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place it behind the content */
}
</style>
