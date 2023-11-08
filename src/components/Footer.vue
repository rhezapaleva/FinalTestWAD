<script>
export default {
  name: "Footer",
};
</script>
<template>
  <div class="container-fluid">
    <div class="pt-4 my-md-5 pt-md-5 border-top">
      <div class="row">
        <div class="col-12 col-md mx-5">
          <img
            class="mb-2"
            src="/BookMeLogo-removebg-preview.png"
            alt=""
            width="80"
            height="30"
          />
          <small class="d-block mb-3 text-muted">© 2022-2023</small>
        </div>
        <div class="col-6 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li class="nav-item">
              <router-link to="/" class="text-muted">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/AboutPage" class="text-muted"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/SearchPage" class="text-muted"
                >Services</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Support</h5>
          <ul class="list-unstyled text-small">
            <li class="nav-item">
              <router-link to="/ContactPage" class="text-muted"
                >Contact Us</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/ContactPage" class="text-muted"
                >Selling on Book Me</router-link
              >
            </li>
            <li><a class="text-muted" href="#">Terms and Condition</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
}

@media (max-width: 991px) {
  .sidebar.offcanvas {
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
  }
}

.navbar {
  margin-top: 20px;
}
.signupBut {
  background-color: rgb(244, 241, 241);
  border: 1px;
  border-color: green;
  color: rgb(56, 56, 56);
}
.form-search.form-control {
  width: 300px;
}

/* .maincontent{
background: url('images/bg.jpg') rgba(0,0,0,0.3);
} */

.sticky-top-navbar {
  position: sticky;
  top: 0; /* Stick to the top of the viewport */
  z-index: 100; /* Adjust the z-index as needed */
}

.navbar-dark .navbar-nav .nav-link {
  color: black !important;
}

/* Target specifically the "Home" link */
.navbar-dark .navbar-nav .nav-item.active .nav-link {
  color: black !important;
}

.navbar-toggler-icon {
  border-color: black;
}

.navbar .text-white {
  color: black; /* Change the text color to black */
}
</style>
