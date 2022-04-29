<template>
  <button @click="sortGame">{{ascending ? "Sort by Ascending" : "Sort by Descending"  }}</button>
  <div className="container-grid" v-if="games">
    <GameCard  v-for="game in games" :key="game.id" :image="game.background_image" :name="game.name" :rating="game.rating "/>
  </div>
</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_RAWG_KEY
import GameCard from '../components/GameCard.vue'
  export default {
    name: 'ViewGames',
    components: {
      GameCard
    },
    data: () => ({
      games: [],
      ascending: true
    }),
    mounted() {
      this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
        const genreId = parseInt(this.$route.params.genre_id)
        const res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`)
        console.log(res.data.results, 'GENRE DETAILS!!!')
        this.games = res.data.results
      },
      sortGame () {
        if(this.ascending) {
          this.games.sort((a,b) => b.rating - a.rating)
        } else {
          this.games.sort((a,b) => a.rating - b.rating)
        }
        this.ascending = !this.ascending
        }
      }
  }
</script>
