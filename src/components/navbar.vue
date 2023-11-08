<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand"
        ><img
          src="/BookMeLogo-removebg-preview.png"
          alt="Logo"
          style="height: 40px"
      /></a>
      <!-- <form class="d-none d-md-flex d-lg-flex" role="search">

        <input
          class="formsearch form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style="width: 300px"
        />
        <button class="btn btn-outline-dark text-light" type="submit">
          Search
        </button>
      </form> -->
      <!-- Toggle Button -->
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
        <span v-if="data_array.username">Welcome, {{ data_array.username }}</span>
      </button>
      <!-- Sidebar -->
      <div
        class="sidebar offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <!-- Sidebar Header -->
        <div class="offcanvas-header border-white">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Book Me</h5>
          <button
            type="button"
            class="btn-close btn-close-white shadow-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <!-- Sidebar Body -->
        <div class="offcanvas-body d-flex flex-lg-row p-4 p-lg-0">
          <ul
            class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3"
          >
            <li class="nav-item mx-2">
              <router-link to="/" style="text-decoration: none; color: black"
                >Home</router-link
              >
            </li>

            <li class="nav-item mx-2 nav">
              <router-link
                to="/Searchpage"
                style="text-decoration: none; color: black"
                >Services</router-link
              >
            </li>
            <li class="nav-item mx-2">
              <router-link
                to="/AboutPage"
                style="text-decoration: none; color: black"
                >About</router-link
              >
            </li>
            <li class="nav-item mx-2">
              <router-link
                to="/ContactPage"
                style="text-decoration: none; color: black"
                >Contact</router-link
              >
            </li>
            <li class="nav-item mx-2">
              <router-link
              to="/SPHome"
              style="text-decoration: none; color: lightcoral"
            >
              Switch to Seller
            </router-link>
            </li>
          </ul>
          <!-- Login/Sign up -->
          <div class="d-flex justify-content-center">
            <button
              @click="$store.dispatch('logout')"
              class="btn"
              style="height: 38px"
            >
              Logout
            </button>
            <span v-if="data_array.username">Welcome, {{ data_array.username }}</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.js";
import { collection, getDocs, getFirestore,query,where} from "firebase/firestore"; 

import {auth} from "../firebase/firebaseconfig.js";
import db from "../firebase/firebaseconfig.js"
// import {db} from "../firebase/firebaseconfig"
const querySnapshot = await getDocs(collection(db, "usersForProj")); 

export default {
  
  name: "navbar",
  data() {
  return {
    data_array: {},
    name: '',
    email: null,
  };
},
methods: {
  fetchEmail() {
    const user = auth.currentUser; // Get the currently logged-in user

    if (user) {
      // If a user is logged in
      this.email = user.email; // Set the email to the user's email
     
      
    } else {
      this.email = null; // If no user is logged in, set email to null
    }
  },
},
created() {
  this.fetchEmail();
  const db = getFirestore(); // Get Firestore instance
  const collectionRef = collection(db, 'usersForProj'); // Replace 'your_collection_name' with the actual name of your Firestore collection

  // Now, you can query the Firestore collection using the user's email
  // Make sure to replace 'email' with the actual field name in your Firestore documents
  const q = query(collectionRef, where('email', '==', this.email));

  getDocs(q)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.data_array = doc.data();
        console.log(this.data_array);
      });
    })
    .catch((error) => {
      console.error('Error getting documents: ', error);
    });
},

};



      

</script>

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
  background-color: #ebf2f1;
  margin-top: 0px;
  padding-top: 10px;
}

.form-search.form-control {
  width: 300px;
}

.maincontent {
  background: url("/bg.jpg") rgba(0, 0, 0, 0.3);
}

.btn {
  border-radius: 10px;
  background-color: #194759 !important;
  color: #ebf2f1 !important;
  border: none !important;
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

.offcanvas-body {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
}

</style>
