<template>
  <div class="card" @click="selectGenre(this.genre.id)">
    <div class="image-wrapper">
      <img :src="genre.image_background" alt="">
    </div>
    <div class="info-wrapper flex-col">
      <h3>{{ genre.name }}</h3>
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
        this.$emit('selectGenre', genreId)
      }
    }
  }
</script>
