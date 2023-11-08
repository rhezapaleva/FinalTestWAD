<template>
  <!-- Carousel of Images -->
  <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
    <section class="captions">
      <h1 data-aos="fade-up" data-aos-duration="3000">
        Easiest way to find your desired services
      </h1>
    </section>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../assets/images/TeckXuan/barbers-in-singapore.jpg"
          class="d-block w-100"
          alt="Image 1"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/images/TeckXuan/photographer.jpg"
          class="d-block w-100"
          alt="Image
          2"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/images/TeckXuan/plumber.jpg"
          class="d-block w-100"
          alt="Image 3"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/images/TeckXuan/bake.jpg"
          class="d-block w-100"
          alt="Image 4"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#imageCarousel"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#imageCarousel"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</template>

<style scoped>
.captions {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  font-weight: bolder;
  padding: 10px;
  color: white;
}

#imageCarousel {
  position: relative;
}

#imageCarousel .carousel-inner {
  filter: brightness(60%);
}

.carousel-item {
  transition: transform 0.3s ease-in-out; /* Add a transition */
}

.carousel-item:hover {
  transform: scale(1.05); /* Scale the image slightly when hovering */
}
</style>

<script>
export default {
  name: "FirstImage",
};
</script>
