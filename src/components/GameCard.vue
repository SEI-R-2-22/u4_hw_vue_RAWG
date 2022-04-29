<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <!-- Image Goes Here -->
      <img :src='image' />
    </div>
    <div class="info-wrapper flex-col">
      <!-- Game Name Goes Here -->
      <h3> {{name}} </h3>
      <h4> Rating: {{rating}} </h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameCard',
    props: ['image', 'name', 'rating']
  }
</script>
