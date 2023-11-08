<script>


</script>

<template>
  <div class="container">
        <img src="../assets/Images/Tirsa/bake1.jpg" width="100" height="100" class="m-5">
        <h1 class="text-danger">Sorry, payment failed!</h1>
        <p>Unfortunately payment is rejected</p>
        <p>Page will be automatically redirected to the main page or click button</p>
        <RouterLink to="/">
          <button type="button" class="btn btn-danger">Done</button>
        </RouterLink>
    </div>
</template>

<style scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Use 100% of the viewport height */
    margin: 0;
    background-color: #EBF2F1;
  }

  /* Style for the container (centered content) */
  .container {
    text-align: center;
  }

  p{
    color: #194759
  }
</style>
