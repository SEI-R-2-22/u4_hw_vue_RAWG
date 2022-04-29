<template>
  <div class="card" 
 
  >
    <div class="image-wrapper">
     <img :src="genre.image_background" />
    </div>
    <div class="info-wrapper flex-col">
      <h2> {{genre.name}} </h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GenreCard',
    props: {
      genre: {}
    }
  }
</script>
