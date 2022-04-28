<template>
  <div class="card">
    <div class="image-wrapper">
      <!-- Image Goes Here -->
      <img :src= img />
    </div>
    <div class="info-wrapper flex-col">
      {{gname}}
      <!-- Genre Name Goes Here -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GenreCard',
  props:['img','gname']
  }
</script>
