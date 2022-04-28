<template>
  <div id="app">
    <NavBar />
    <header>
      <router-view header="Chinwendu's RAWG Vue Router"></router-view>
    </header>
    <main>
      <router-view header="Game Play"></router-view>
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
