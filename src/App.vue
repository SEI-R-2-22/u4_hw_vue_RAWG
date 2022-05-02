<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Navbar from './components/NavBar.vue'
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>
