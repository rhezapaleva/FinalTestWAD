<script>
    export default{
    name: 'Footer',
}
</script>
<template>
     <div class="container-fluid">
      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img
              class="mb-2"
              src="/BookMeLogo-removebg-preview.png"
              alt=""
              width="125"
              height="50"
            />
            <small class="d-block mb-3 text-muted">© 2017-2019</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
</template>

<style scoped>
body{

background-blend-mode: multiply;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
margin: 0;
}

@media(max-width:991px){
.sidebar.offcanvas{
    background-color:rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
}
} 

.navbar{
margin-top: 20px;
}
.signupBut {
background-color: rgb(244, 241, 241);
border: 1px ;
border-color: green;
color: rgb(56, 56, 56);
}
.form-search.form-control {
width:300px
}

.maincontent{
background: url('images/bg.jpg') rgba(0,0,0,0.3);
}

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