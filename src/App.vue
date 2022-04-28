<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <main>
      <router-view header="HomePage"></router-view>
    </main>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  export default {
    name: 'App',
    components: {NavBar}
  }
</script>
