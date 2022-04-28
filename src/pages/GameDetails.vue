<template>
  <div class="game-content">
    <section class="image-container">
      <div></div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
      <img :src= gImage />

        <h3>{{gameName}}</h3>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_API

  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: null,
      gameName:null,
      gImage:null
    }),
    mounted:function() {
     let game =  parseInt(this.$route.params.game_id)
      this.getGameDetails(game)
    },
    methods: {
      async getGameDetails(gameId) {
        // Get game id from router here
        console.log(gameId,"dev tools")
        const res = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
          this.gameDetails = res.data
          console.log(this.gameDetails)
          this.gameName = this.gameDetails.name
          this.gImage = this.gameDetails.background_image

        
      }
    }
  } 
</script>
