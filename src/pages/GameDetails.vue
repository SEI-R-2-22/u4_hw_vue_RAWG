<template>
  <div class="game-content">
    <section class="image-container">
      <div>
        <!-- <img :src="gameDetails.background_image" /> -->
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
  import axios from 'axios'
  const API_KEY = process.env.VUE_APP_API_KEY
  const BASE_URL = 'https://api.rawg.io/api/'
  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: null,
    }),
    mounted() {

      this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        const gameId = parseInt(this.$route.params.game_id)
        const res = await axios.get(`${BASE_URL}games/${gameId}?key=${API_KEY}`)
        this.gameDetails = res.data
        console.log(this.gameDetails)
      }
    }
  }
</script>
