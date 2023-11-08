<template>
  <div class="reviewsection section-5">
    <div class="container">
      <div class="row justify-content-center text-center mb-3">
        <div class="col-lg-6 mb-2">
          <h2 class="headercolour font-weight-bold heading mb-4 mt-4">
            Our Clients
          </h2>
          <p class="text-black-50">Let's hear what they say</p>
        </div>
      </div>
      <div class="row">
        <div class="person-wrap col-sm-12 col-md-6 col-lg-4 mb-5 mb-lg-0 p-3">
          <div
            class="h-100 person"
            data-aos="zoom-in-up"
            data-aos-delay="200"
            data-aos-offset ="100"
            style="text-align: center"
          >
            <img
              src="../../assets/images/TeckXuan/person_1-min.jpg"
              alt="Image"
              class="img-fluid rounded-circle"
              style="width: 100px; height: 100px; border-radius: 50%"
            />
            <div class="person-contents">
              <h2 class="mb-0">James Doe</h2>
              <span class="meta mb-3 mt-1">Photographer</span>
              <p>
                Book Me streamlined my workflow, making it effortless to
                showcase my portfolio, connect with potential clients, and
                efficiently manage bookings, ultimately boosting my online
                visibility and business growth.
              </p>
            </div>
          </div>
        </div>

        <div class="person-wrap col-sm-12 col-md-6 col-lg-4 mb-5 mb-lg-0 p-3">
          <div
            class="h-100 person"
            data-aos="zoom-in-up"
            data-aos-delay="250"
            data-aos-offset ="100"
            style="text-align: center"
          >
            <img
              src="../../assets/images/TeckXuan/person_2-min.jpg"
              alt="Image"
              class="img-fluid rounded-circle"
              style="width: 100px; height: 100px; border-radius: 50%"
            />
            <div class="person-contents">
              <h2 class="mb-0">John Smith</h2>
              <span class="meta mb-3 mt-1">Hairdresser</span>
              <p>
                Book Me has helped me significantly by establishing an online
                presence and effectively marketing my services, ultimately
                attracting a larger clientele and boosting my own business.
              </p>
            </div>
          </div>
        </div>

        <div class="person-wrap col-sm-12 col-md-6 col-lg-4 mb-5 mb-lg-0 p-3">
          <div
            class="h-100 person"
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-offset ="100"
            style="text-align: center"
          >
            <img
              src="../../assets/images/TeckXuan/person_4-min.jpg"
              alt="Image"
              class="img-fluid rounded-circle"
              style="width: 100px; height: 100px; border-radius: 50%"
            />
            <div class="person-contents">
              <h2 class="mb-0">Jane Lee</h2>
              <span class="meta mb-3 mt-1">Make-up Artist</span>
              <p>
                Book Me helped me to streamline appointment scheduling and
                showcase my portfolio, significantly boosting my client base and
                overall business success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5">
    <div
      class="row justify-content-center footer-cta"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-offset ="100"
    >
      <div class="col-lg-7 mx-auto text-center">
        <h2 class="mb-4">
          Be a part of our growing community to promote sustainable growth
        </h2>
        <p>
          <!-- <a
            href="#"
            target="_blank"
            
            >Become a Service Provider</a -->
            <router-link to="/ContactPage" class="btn btn-primary text-white py-3 px-4"
                >Become a Service Provider</router-link>
          
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* class="btn btn-primary text-white py-3 px-4" */
.btn {
  transition: transform 0.3s ease-in-out; /* Add a transition */
}

.btn:hover {
  transform: scale(1.2); /* Scale the image slightly when hovering */
}
</style>
<script>
export default {
  name: "Cilentsreview",
};
</script>
