<template>
  <div class="card">
    <div class="image-wrapper">
      <!-- Image Goes Here -->
      <img :src='image' />
    </div>
    <div class="info-wrapper flex-col">
      <!-- Genre Name Goes Here -->
      {{name}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GenreCard',
    props: ['name', 'image']
  }
</script>
