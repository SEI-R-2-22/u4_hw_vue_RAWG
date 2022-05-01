<template>
  <div class="card">
    <div class="card" @click="selectGenre(this.genre.id)">
    <div class="image-wrapper">
      <!-- Image Goes Here -->
       <img :src="genre.image_background" />
    </div>
    <div class="info-wrapper flex-col">
      <!-- Genre Name Goes Here -->
      <h2>{{ genre.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "GenreCard",
  props: {
    genre: {},
  },
  methods: {
    selectGenre(genreId) {
      this.$emit("selectGenre", genreId);
    },
  },
};
</script>
