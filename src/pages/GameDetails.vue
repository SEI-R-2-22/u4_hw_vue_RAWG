<template>
  <div class="game-content">
    <section class="image-container" >
      <div>
        <!-- <img :src="game.image_background" /> -->
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <!-- <h3>{{game.name}}</h3> -->
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
//import {varId} from './HomePage.vue'
const API_KEY = process.env.VUE_APP_API_KEY
  export default {
    name: 'GameDetails',
    props:{
      game: {}
    },
    data: () => ({
      gameDetails: null
    }),
    mounted: function() {this.getGameDetails()},
    methods: {
      async getGameDetails() {
        let gameId = this.game.id
        // console.log(gameId, "GAME")
        const res = await axios.get(`https://api.rawg.io/api/games/${this.game.id}?key=${API_KEY}`)
        console.log(res, "RES")
        this.gameDetails = res
      }
    }
  }
</script>
