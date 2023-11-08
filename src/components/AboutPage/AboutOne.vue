<template>
  <div class=" container-fluid about-one pt-5 pb-5">
    <div class="row justify-content-evenly mb-5 mx-0 ps-lg-0">
      <div class="col-lg-7 mb-5 mb-lg-0 order-lg-2">
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            src="../../assets/images/TeckXuan/serviceprovider.jpg"
            alt="Image"
            class="img-fluid max-img"
          />
        </div>
      </div>
      <div class="col-lg-4 ps-3 ps-md-0">
        <div class="fw-bolder mb-5 pb-2 fst-italic">
          <h1 data-aos="fade-up" data-aos-duration="1000">Service Provider</h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="d-flex feature-h"
        >
          <span class="wrap-icon me-5">
            <span class="icon icon-binoculars display-5"></span>
          </span>
          <div class="feature-text">
            <h2 class="heading">Increase Visibility</h2>
            <p>
              Reach a broader audience, including potential customers who may
              not have known about their services otherwise.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="d-flex feature-h"
        >
          <span class="wrap-icon me-5">
            <span class="icon icon-calendar display-5"></span>
          </span>
          <div class="feature-text">
            <h2 class="heading">Efficient Scheduling</h2>
            <p>
              Manage your schedules and appointments more effectively through
              the app, reducing scheduling conflicts and no-shows.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="d-flex feature-h"
        >
          <span class="wrap-icon me-5">
            <span class="icon icon-book display-5"></span>
          </span>
          <div class="feature-text">
            <h2 class="heading">Education Hub</h2>
            <p>
              Have a look at all the courses BookMe has to offer you to guide
              you in your entrepreneural journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutOne",
};
</script>

<style scoped>
@media (max-width: 767px) {
  .about-one .ps-lg-0 {
    padding-left: 0;
  }
}

</style>
