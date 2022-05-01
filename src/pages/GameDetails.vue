<template>
  <div class="game-content">
    <section class="image-container">
      <div>
        <img :src='gameDetails.background_image' />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3>{{ gameDetails.name }}</h3>
        <h4>{{ gameDetails.rating }}</h4>
        <button @click='home'>Home</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
const BASE_URL = 'https://api.rawg.io'

  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: [],
      gameId: null
    }),
    mounted() {
      this.gameId = parseInt(this.$route.params.game_id)
       this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        const res = await axios.get(
          `${BASE_URL}/api/games/${this.$route.params.game_id}?key=9d413701ecfd4c75ae68781db863731a`
          )
        this.gameDetails = res.data
        console.log(res.data)
      },
      home() {
        this.$router.push('/')
      }
    }
  }
</script>
