<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="Genre.image_background" alt="">
    </div>
    <div class="info-wrapper flex-col">
      <h4>{{ genre.name }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GenreCard'
  }
</script>
