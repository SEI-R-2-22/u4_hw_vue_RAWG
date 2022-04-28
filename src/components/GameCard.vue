<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <!-- Image Goes Here -->
      <img :src='image' />
    </div>
    <div class="info-wrapper flex-col">
      <!-- Game Name Goes Here -->
      <div class='left' >{{name}}</div>
      <div class='right' >Rating: {{rating}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameCard',
    props: ['name', 'image', 'rating']
  }
</script>