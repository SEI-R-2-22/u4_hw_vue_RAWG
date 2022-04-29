<template>
  <div class="game-content" v-if="gameDetails">
    <section class="image-container">
      <div><img :src="gameDetails.background_image" /></div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3>{{ gameDetails.name }}</h3>
        <p>{{ gameDetails.description_raw }}</p>
      </div>
      <div>
        <nav><router-link to="/">Back</router-link></nav>
      </div>
    </section>
  </div>
</template>

<script>
const API_KEY = process.env.VUE_APP_RAWG_KEY;
import axios from "axios";

export default {
  name: "GameDetails",
  props: {
    result: {},
  },
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
