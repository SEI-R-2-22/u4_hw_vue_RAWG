<template>
  <div class="game-content" v-if="gameDetails">
    <section class="image-container">
      <div>
        <img :src="gameDetails.background_image" alt="game image"/>
      </div>
    </section>
    <section class="details">
      <div class="flex-row space">
      </div>
      <div>
        <h3>{{gameDetails.name}}</h3>
        <p>{{gameDetails.description_raw}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_RAWG_KEY
  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: null
    }),
    mounted() {
      this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        const gameId = parseInt(this.$route.params.game_id)
        console.log(gameId, 'GAMEID')
        const res = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
        console.log(res.data.results, 'GAME DETAILS')
        this.gameDetails = (res.data)
      }
    }
  }
</script>
