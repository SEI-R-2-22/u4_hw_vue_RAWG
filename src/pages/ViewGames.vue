<template>
  <div>
  <h1 v-if="genre">{{genre.name}} Games</h1>
  <div class="dropdown">
    
    <button class="dropbtn" @click='toggleSort'>Sort by Rating</button>
    <div class="dropdown-menu" v-if="showSort">
      <button @click="sortAscending">low-high</button>
      <button @click="sortDescending">high-low</button>
    </div>
  </div>
 
  <div className="container-grid" v-if="games">
    <GameCard :key='game.id' v-for="game in games" :game='game' @click="selectGame(game.id)"/>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import GameCard from '../components/GameCard.vue'
const API_KEY = process.env.VUE_APP_RAWG_KEY
  export default {
    name: 'ViewGames',
    components: {
      GameCard
    },
    data: () => ({
      games: [],
      genreId: null,
      genre: null,
      showSort: false
    }),
    mounted: function() {
      this.genreId = parseInt(this.$route.params.genre_id)
      this.getGamesByGenre()
      // console.log(this.genre)
    },
    methods: {
      async getGamesByGenre() {
        const res = await axios.get(`https://api.rawg.io/api/games?genres=${this.genreId}&key=${API_KEY}`)
        this.games = res.data.results
        this.genre = res.data.results[0].genres.find(genre => genre.id === this.genreId)
 
        
      },
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
      },
      sortAscending() {
        function compare(a, b) {
          if (a.rating < b.rating)
            return -1
          if (a.rating > b.rating)
            return 1
          return 0
         }
         return this.games.sort(compare)
      },
      sortDescending() {
        function compare(a, b) {
          if (a.rating < b.rating)
            return 1
          if (a.rating > b.rating)
            return -1
          return 0
         }
        return this.games.sort(compare)
      },
      toggleSort() {
        this.showSort = !this.showSort
      }
    }
  }
</script>

<style scoped>
div {
  text-align: center;
}

button{
  margin: 5px;
}

.dropdown {
  max-width: 15%;
  margin: 0 auto;
}

/* .dropdown-menu {
  visibility: hidden;
}

.dropdown:hover .dropdown-menu {visibility: visible;} */
</style>