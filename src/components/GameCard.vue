<template>
  <div class="card game-card">
    <div class="image-wrapper">
      <!-- Image Goes Here -->
      <img :src= img />

    </div>
    <div class="info-wrapper flex-col">
      <!-- Game Name Goes Here -->
      {{gname}}

    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameCard',
  props:['img','gname']

  }
</script>
