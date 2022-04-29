<template>
  <div className="container-grid">
    <button @click="()=>{sortFuncHigh()}">TOP SCORE</button>
    <button @click="()=>{sortFuncLow()}">LOW SCORE</button>
    <div class="card game-card" v-for="game in games" :key="game.id">
      <div class="image-wrapper">
        <!-- Image Goes Here -->
        <img :src= game.background_image />
      </div>
      <div class="info-wrapper flex-col">
        <!-- Game Name Goes Here -->
        {{game.rating}}   {{game.name}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_API


  export default {
    name: 'ViewGames',
    data: () => ({
      games: [],
      genre: null
    }),
    mounted:function(){
      let genreP = parseInt(this.$route.params.genre)
      this.getGamesByGenre(genreP)
      console.log(genreP)
    },
    methods: {
      async getGamesByGenre(genreId) {
        // Get Genre Id here
        const res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`)
        this.games = res.data.results
        console.log(res)        
      },
      sortFuncLow: function (){
        this.games = this.games.slice().sort(function(a, b){
        return (a.rating > b.rating) ? 1 : -1;
          })
      },
      sortFuncHigh: function (){
        this.games = this.games.slice().sort(function(a, b){
        return (a.rating < b.rating) ? 1 : -1;
          })
      }
    }
  }
</script>
