<template>
  <div class="section mt-5 pt-5">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 mb-5 mb-lg-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="contact-info row">
            <div class="col-2">
              <div class="icons icon-room display-5"></div>
            </div>
            <div class="col-10">
              <h4 class="mb-2">Location:</h4>
              <p>
                80 Stamford Road<br />
                Singapore 178902
              </p>
            </div>
          </div>

          <div class="open-hours mt-4 row">
            <div class="col-2">
              <div class="icons icon-clock-o display-5"></div>
            </div>
            <div class="col-10">
              <h4 class="mb-2">Open Hours:</h4>
              <p>
                Monday-Friday:<br />
                11:00 AM - 20:00 PM
              </p>
            </div>
          </div>

          <div class="email mt-4 row">
            <div class="col-2">
              <div class="icons icon-envelope display-5"></div>
            </div>
            <div class="col-10">
              <h4 class="mb-2">Email:</h4>
              <p>G2T19@IS216WAD2.com</p>
            </div>
          </div>

          <div class="phone mt-4 row">
            <div class="col-2">
              <div class="icons icon-phone display-5"></div>
            </div>
            <div class="col-10">
              <h4 class="mb-2">Call:</h4>
              <p>+65 6123 4567</p>
            </div>
          </div>
        </div>

        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
          <form @submit="submitForm">
            <div class="row">
              <div class="col-6 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div class="col-6 mb-3">
                <input
                  type="emali"
                  class="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div class="col-12 mb-3">
                <input type="text" class="form-control" placeholder="Subject" />
              </div>
              <div class="col-12 mb-3">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  class="form-control"
                  placeholder="Message"
                ></textarea>
              </div>

              <div class="col-12">
                <input type="submit" value="Send Message" class="btn" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  methods: {
    submitForm(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Your form submission logic here, for example, sending data to a server

      // Display an alert after form submission
      alert("Form submitted successfully");

      // Optionally, reset the form or perform other actions as needed
      // For example, this.$refs.form.reset(); // Reset the form fields
    },
  },
};
</script>

<style>
.icons {
  text-align: center;
}
</style>
