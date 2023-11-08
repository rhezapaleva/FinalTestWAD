

<template>
   <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <!--Logo-->
          <a class="navbar-brand"><img src="/BookMeLogo-removebg-preview.png" alt="Logo" style="height: 40px"></a>
          <form class="d-none d-md-flex d-lg-flex pt-3" role="search">
            <input
              class="formsearch form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style="width: 300px"
            />
            <button class="btn btn-outline-success text-white" type="submit">Search</button>
          </form>
          <!--Toggle BTN-->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon">
              <i class="fa fa-bars" aria-hidden="true" style="color: #1c1c1c"></i>
            </span>
          </button>
  
          <!--SideBar-->
          <div
            class="sidebar offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <!--Sidebar Header-->
            <div class="offcanvas-header text-white border-white">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Book Me</h5>
              <button
                type="button"
                class="btn-close btn-close-white shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <!--Sidebar body-->
            <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul
                class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                <li class="nav-item mx-2">
                  <a class="nav-link active text-black" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item mx-2 ">
                  <a class="nav-link text-black" href="#about">About</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link text-black" href="#about">Services</a>
                </li>
                <!-- <li class="nav-item mx-2">
                  <a class="nav-link" href="#about">Contact</a>
                </li> -->
              </ul>
  
              <!--Login/Sign up-->
              <div
                class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3"
              >
                <a href="#login" class="text-black text-decoration-none">Login</a>
                <a
                  href="#signup"
                  class="signupBut text-decoration-none px-3 py-1 rounded-1"
                  style="white-space: nowrap"
                  >Sign up</a
                >
              </div>
            </div>
          </div>
        </div>
      </nav>
</template>

<style >
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