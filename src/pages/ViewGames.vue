<template>
  <div className="container-grid"></div>
  <div className="container-grid">
    <game-card
      v-for="game in games"
      :key="game.id"
      :game="game"
      @selectGame="selectGame"
    />
  </div>
</template>

<script>
import axios from "axios";
import GameCard from "../components/GameCard.vue";
const API_KEY = "3e59d3f9b9d14c6c9d88b6b73b6d6a7c";

export default {
  name: "ViewGames",
  components: {
    GameCard,
  },
  data: () => ({
    games: [],
  }),
  mounted() {},
  mounted: async function () {
    await this.getGamesByGenre();
  },
  methods: {
    async getGamesByGenre() {
      // Get Genre Id here
      let genreId = parseInt(this.$route.params.genre_id);
      const res = await axios.get(
        `https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`
      );
      this.games = res.data.results;
    },
    selectGame(gameId) {
      this.$router.push(`/details/${gameId}`);
    },
  },
};
</script>
