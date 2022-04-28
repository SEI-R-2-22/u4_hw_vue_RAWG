<template>
  <div class="card game-card" @click="selectGame(game.id)">
    <div class="image-wrapper">
      <img :src="game.background_image" />
    </div>
    <div class="info-wrapper">
      <h4>{{ game.name}}</h4>
      <h5 class="rating">Rating: {{ game.rating }}</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameCard',
    props: {
      game: {}
    },
    methods: {
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
      }
    }
  }
</script>
