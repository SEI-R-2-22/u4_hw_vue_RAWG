<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="image" alt="Genre" />
    </div>
    <div class="info-wrapper flex-col">
      <h3>{{ name }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GenreCard',
    props: {
      genre: {},
      image: String,
      name: String
    },
  }
</script>
