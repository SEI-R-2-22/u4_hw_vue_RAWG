<template>
  <h1 class="header">Games</h1>
  <label class="sort" for="rating">Sort By: </label>
  <select class="sort-box" name="ratings" @change="getSorted($event)">
    <option value="ascending">Best Rating</option>
    <option value="descending">Worst Rating</option>
  </select>
  <div class="container-grid" v-if="games"></div>
  <div class= "flex-box" v-for="game in games" :key="game.id">
    <div class = "card game-card">
      <h3>{{ game.name }}</h3>
      <div class="image-wrapper">
        <img :src="game.background_image" />
      </div>
      <p>Rating: {{ game.rating }}</p>
    </div>
  </div>
</template>

<script>
const API_KEY = process.env.VUE_APP_RAWG_KEY;
import axios from "axios";

export default {
  name: "ViewGames",
  data: () => ({
    games: [],
  }),
  mounted: function () {
    this.getGamesByGenre();
  },
  methods: {
    async getGamesByGenre() {
      const res = await axios.get(
        `https://api.rawg.io/api/games?genres=${this.$route.params.genre_id}&key=${API_KEY}`
      );
      this.games = res.data.results;
    },
    getSorted(type) {
      if (type.target.value === "descending") {
        this.games.sort(function (a, b) {
          return a.rating - b.rating;
        });
      } else {
        this.games.sort(function (a, b) {
          return b.rating - a.rating;
        });
      }
    },
  },
};
</script>

<style scoped>
.header {
  text-align: center;
}

.sort {
  padding-right: 55%;
  padding-left: 45%;
}

.sort-box {
  margin-left: 45%;
}

.flex-box {
  display: flex;
  justify-content: center;
}
</style>