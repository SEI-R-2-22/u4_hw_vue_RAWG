<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <img :src="gameDetails.background_image"/>
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
    }
  }
</script>
