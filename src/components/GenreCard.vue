<template>
  <div class="card" @click="selectGenre(genre.id)">
    <div class="image-wrapper">
      <img :src="genre.image_background" />
    </div>
    <div class="info-wrapper flex-col">
      <h4>{{ genre.name }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GenreCard',
    props: {
      genre: {}
    },
    methods: {
      selectGenre(genreId) {
        this.$router.push(`/games/${genreId}`)
      }
    }
  }
</script>
