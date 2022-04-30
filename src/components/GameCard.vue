<template>
  <div class="card game-card">
    <div class="card game-card" @click="selectGame(this.game.id)">
    <div class="image-wrapper">
      <!-- Image Goes Here -->
      <img :src="game.background_image" />
    </div>
    <div class="info-wrapper flex-col">
      <!-- Game Name Goes Here -->
       <h2>{{ game.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: {},
  },
  methods: {
    selectGame(gameId) {
      this.$emit("selectGame", gameId);
    },
  },
};
</script>
