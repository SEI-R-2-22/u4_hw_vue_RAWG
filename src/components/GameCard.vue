<template>
  <div class="card game-card">
    <div class="image-wrapper" v-if='game'>
     <img :src="game.background_image" />
    </div>
    <div class="info-wrapper flex-col">
      <h2>{{game.name}}</h2>
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
