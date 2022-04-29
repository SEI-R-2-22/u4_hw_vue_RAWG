<template>
  <div className="container-grid" v-if="games">
      <GameCard
        v-for="game in games"
        :key="game.id"
        :game="game"
        @click="() => selectGame(game.id)"
      />
    </div>
    <div v-else>Loading Games...</div>
</template>

<script>
const API_KEY = process.env.VUE_APP_RAWG_KEY;
import axios from "axios";
import GameCard from "../components/GameCard.vue";

export default {
  name: "ViewGames",
  components: {
    GameCard,
  },
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
    // getSorted(type) {
    //   if (type.target.value === "descending") {
    //     this.games.sort(function (a, b) {
    //       return a.rating - b.rating;
    //     });
    //   } else {
    //     this.games.sort(function (a, b) {
    //       return b.rating - a.rating;
    //     });
    //   }
    // },
  },
};
</script>