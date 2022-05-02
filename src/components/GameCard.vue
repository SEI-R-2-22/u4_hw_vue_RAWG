<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <img :src='searchResult.background_image' alt=''>
    </div>
    <div class="info-wrapper flex-col">
      <h3>{{ searchResult.name}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameCard',
    props: ['searchResult'],
    methods: {
      selectGame(gameId) {
        this.$emit('selectGame', gameId)
      }
    }
  }
</script>
