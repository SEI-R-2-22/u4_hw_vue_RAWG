<template>
  <div v-if="games" className="container-grid">
    <GameCard :key="game.id" v-for="game in games" :game='game' @click="selectGame(game.id)" />
    </div>
</template>



<script>
import axios from 'axios'
import GameCard from '../components/GameCard.vue'
const API_KEY = process.env.RAWG_API_KEY
  export default {
    name: 'ViewGames',
    components: {
      GameCard
    },
    data: () => ({
      games: [],
      genreId: null,
    }),
    mounted() {
      this.genreId = this.$route.params.genre_id
      this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
        const res = await axios.get(`https://api.rawg.io/api/games?genres=${this.genreId}&key=${API_KEY}`)
        this.games = res.data.results
      }
    }
  }
</script>
