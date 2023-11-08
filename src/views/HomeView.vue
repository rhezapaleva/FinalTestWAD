<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/service-provider">Service Provider</router-link>
    <router-link to="/Searchpage">Search Page</router-link>
    <router-link to="/SPHome">SPHome</router-link>
    <button @click="$store.dispatch('logout')">Logout</button>
  </div>
  <main>
    <TheWelcome />
  </main>

</template>
