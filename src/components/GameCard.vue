<template>
  <div class="card game-card" @click='selectGame(gameDetails.id)'>
    <div class="image-wrapper">
      <img :src='gameDetails.background_image' alt='game' />
    </div>
    <div class="info-wrapper flex-col">
      <h4>{{ gameDetails.name }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameCard',
    props: {
      gameDetails: {}
    },
    selectGame(gameId) {
      this.$router.push(`/details/${gameId}`)
    }
  }
</script>
