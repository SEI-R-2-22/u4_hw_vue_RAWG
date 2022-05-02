<template>
  <div v-if="gameDetails" class="game-content">
    <section class="image-container">
      <div>
        <img :src="gameDetails.background_image" />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3>{{ gameDetails.name }}</h3>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
const API_KEY = process.env.VUE_APP_RAWG_KEY;
export default {
  name: "GameDetails",
  data: () => ({
    gameDetails: null,
  }),
  mounted() {
    this.getGameDetails();
  },
  methods: {
    async getGameDetails() {
      let gameId = parseInt(this.$route.params.game_id);
      const res = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
      );
      this.gameDetails = res.data;
    },
  },
};
</script>
