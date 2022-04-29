<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <img :src='game.background_image'>
    </div>
    <div class="info-wrapper flex-col">
      <h3>{{game.name}}</h3>
      <h3>{{game.rating}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameCard',
    props: {
      game: {}
    }
  }
</script>

<style scoped> 
div {
  text-align: center;
}
</style>