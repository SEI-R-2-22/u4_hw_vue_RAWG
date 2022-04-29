<template>
  <div class="card">
    <div class="image-wrapper">
      <!-- Image Goes Here -->
      <img :src= img />
    </div>
    <div class="info-wrapper flex-col">
      <!-- Genre Name Goes Here -->
      <h4>{{ name }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GenreCard',
    props:['img', 'name']
  }
</script>
