<template>
  <div class="game-content">
    <div v-if="gameDetails" class="game-content">
    <section class="image-container">
      <div></div>
      <div>
        <img :src="gameDetails.background_image"/>
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3></h3>
        <h3>
          {{gameDetails.name}}
        </h3>
        <p>{{gameDetails.description_raw}}</p>
      </div>
      <router-link to="/"><button>Back</button></router-link>
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
  mounted() {},
  mounted: async function () {
    await this.getGameDetails();
  },
  methods: {
    async getGameDetails() {
      // Get game id from router here
      let gameId = parseInt(this.$route.params.game_id);
      const res = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
      );
      this.gameDetails = res.data;
    },
  },
};
</script>
