<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <img :src="image" alt="">
    </div>
    <div class="info-wrapper flex-col">
      <h3>{{}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameCard'
  }
</script>
