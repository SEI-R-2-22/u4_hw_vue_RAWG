<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <img :src="game.background_image" :alt="game.name" />
    </div>
    <div class="info-wrapper flex-col">
      {{ game.name }}
      <p>Rating: {{ game.rating }}</p>
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
