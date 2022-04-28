<template>
  <div id="app">
    <header>
      <NavBar/>
      <!-- Nav Goes Here -->
    </header>
    <main>
      <router-view></router-view>
      <!-- Router View Goes Here -->
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
</script>
