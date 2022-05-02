<template>
  <div class="game-content" v-if="gameDetails">
    <section class="image-container">
      <div>
        <img :src="gameDetails.background_image" />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3>{{gameDetails.name}}</h3>
        Description: {{gameDetails.description_raw}}
        <h4>Rating: {{gameDetails.rating}}</h4>
        <h4>Release Date: {{gameDetails.relased}}</h4>
      </div>
    </section>
    <button @click="Home">Return</button> 
  </div>
</template>

<script>
import axios from 'axios'
const API_KEY=process.env.RAWG_API_KEY
  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: null,
      gameId: null,
    }),
    mounted() {
      this.gameId = (this.$route.params.game_id)
      this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        const res = await axios.get(`https://api.rawg.io/api/games/${this.gameId}?key=${API_KEY}`)
        this.gameDetails = res.data 
      },
      Home() {
        this.$router.push('/')
      }
    }
  }
</script>
