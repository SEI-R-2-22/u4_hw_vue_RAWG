<template>
  <div class="card" @click="selectGenre(this.genre.id)">
    <div class="image-wrapper">
      <img :src="genre.image_background" />
    </div>
    <div class="info-wrapper flex-col">
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
