<template>
  <div className="container-grid" v-if="games" :games="games">
    <div>
      <b-dropdown split split-href="#foo/bar" text="Split Link" class="m-2">
        <b-dropdown-item><button @click="sortDes()">Descend</button></b-dropdown-item>
        <b-dropdown-item ><button @click="sortAsc()">Ascend</button></b-dropdown-item>
      </b-dropdown>
    </div>
    
    <div class="card game-card">
      <div  v-for="game in games" :key="game.id">
        <div class="image-wrapper">
          <img :src="game.background_image" />
        </div>
        <div class="info-wrapper flex-col">
          <h2>{{game.name}}</h2>
           <h3>{{game.rating}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const API_KEY = process.env.VUE_APP_API_KEY
  export default {
    name: 'ViewGames',
    components:{},
    data: () => ({
      games: []
      
    }),
    mounted: function() {this.getGamesByGenre()},
    methods: {
      async getGamesByGenre() {
        const genreId = this.$route.params.genre_id
        const res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`)
        this.games = res.data.results
        console.log(this.games, "RES")
      },
      sortDes(){
        this.games = this.games.sort((a, b) => {
          return a.rating - b.rating
        })
      },
      sortAsc(){
        this.games = this.games.sort((a, b) => {
          return b.rating - a.rating 
        })
      }
    }
  }
</script>

<style scoped>
.m-md-2{
  flex-direction: column;
}
</style>


