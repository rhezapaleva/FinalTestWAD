<script>
export default {
  name: "Suggested",
  methods:{
  selectCategory(category){
    console.log(category)
  }
 }
};
</script>

<template>
  <div class="suggested">
    <nav class="navbar bg-body-tertiary">
      <form class="container-fluid justify-content-around my-2">
        <button
          class="m-2 btn btn-sm btn-outline-secondary"
          type="button"
          @click="selectCategory('Phone Service')"
        >
          Phone Service
        </button>
        <button
          class="m-2 btn btn-sm btn-outline-secondary"
          type="button"
          @click="selectCategory('Personal Chef')"
        >
          Personal Chef
        </button>
        <button
          class="m-2 btn btn-sm btn-outline-secondary"
          type="button"
          @click="selectCategory('Shoe Cleaning')"
        >
          Shoe Cleaning
        </button>
        <button
          class="m-2 btn btn-sm btn-outline-secondary"
          type="button"
          @click="selectCategory('Watch Repair')"
        >
          Watch Repair
        </button>
        <button
          class="m-2 btn btn-sm btn-outline-secondary"
          type="button"
          @click="selectCategory('Aircon Cleaning')"
        >
          Aircon Cleaning
        </button>
        <button
          class="m-2 btn btn-sm btn-outline-secondary"
          type="button"
          @click="selectCategory('Makeup Artistry')"
        >
          Makeup Artistry
        </button>
        <button
          class="m-2 btn btn-sm btn-outline-secondary"
          type="button"
          @click="selectCategory('Baking')"
        >
          Baking
        </button>
        <button
          class="m-2 btn btn-sm btn-outline-secondary"
          type="button"
          @click="selectCategory('Tutoring')"
        >
          Tutoring
        </button>
        <button
          class="m-2 btn btn-sm btn-outline-secondary"
          type="button"
          @click="selectCategory('Photographer')"
        >
          Photographer
        </button>
      </form>
    </nav>
  </div>
</template>

<style scoped>
.btn {
  color: white;
}
</style>
