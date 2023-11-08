<template>
  <div class="features container-fluid pt-5 pb-5">
    <div class="row">
      <div class="col-md-4">
        <div
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-offset="100"
          class="card custom-card1 m-3"
          style="max-width: none"
        >
          <div class="card-body text-center">
            <span class="icon-users display-5"></span>
            <h5 class="card-title mt-3">Our Services</h5>
            <p class="card-text">
              Unlock a world of possibilities with our diverse range of
              services, tailored to meet your every need.
            </p>
            <a href="#" class="btn">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-offset="100"
          class="card custom-card1 m-3"
          style="max-width: none"
        >
          <div class="card-body text-center">
            <span class="icon-people display-5"></span>
            <h5 class="card-title mt-3">Service Provider</h5>
            <p class="card-text">
              Unlock Your Business Potential: Elevate Your Sales with Our
              Cutting-Edge Platform! Sell your service with us!
            </p>
            <a href="#" class="btn">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-offset="100"
          class="card custom-card1 m-3"
          style="max-width: none"
        >
          <div class="card-body text-center">
            <span class="icon-phone display-5"></span>
            <h5 class="card-title mt-3">Support</h5>
            <p class="card-text">
              Experience excellence in service and support like never before -
              where your needs are our priority.
            </p>
            <a href="#" class="btn">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/icomoon/style.css";

export default {
  name: "Featurespage",
};
</script>

<style scoped>
.btn {
  transition: transform 0.3s ease-in-out; /* Add a transition */
}

.btn:hover {
  transform: scale(1.2); /* Scale the image slightly when hovering */
}
</style>
