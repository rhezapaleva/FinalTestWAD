

<template>
  
  <router-view/>
  
</template>
<script >
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'



export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<style>
</style>
