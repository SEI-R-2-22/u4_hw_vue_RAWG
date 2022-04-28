<template>
  <div v-if="gameDetails" class="game-content">
    <section class="image-container">
      <div>
        <img :src="gameDetails.background_image_additional" alt="poster" />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3>{{ gameDetails.name }}</h3>
        <p>{{ gameDetails.description_raw }}</p>
      </div>
    </section>
    <button @click="goBack">Back</button>
  </div>
  <div v-else>Loading</div>
</template>

<script>
  import axios from 'axios'

  const API_KEY = process.env.VUE_APP_RAWG_KEY
  
  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: null
    }),
    mounted: function() {
      this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        // Get game id from router here
        const res = await axios.get(
          `https://api.rawg.io/api/games/${this.$route.params.game_id}?key=${API_KEY}`
        )
        this.gameDetails = res.data
      },
      goBack() {
        this.$router.push(`/`)
      }
    }
  }
</script>

<style>
button {
  margin-left: 5vw;
}
</style>