<template>
  <div class="big-container">
    <div class="result-title">
      <h2>Genre Results</h2>
      <div class="sort">
        <select @change="sortGames($event)">
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>
    </div>
    <div className="container-grid">
      <GameCard
      v-for="game in games"
      :key="game.id"
      :game="game"
      />
    </div>
  </div>
</template>

<script>
import GameCard from '../components/GameCard.vue'
import axios from 'axios'
const BASE_URL = 'https://api.rawg.io'

  export default {
    name: 'ViewGames',
    compotents: {
      GameCard
    },
    data: () => ({
      games: [],
      genreId: null
    }),
    mounted() {
      this.genreId = parseInt(this.$route.params.genre_id)
      this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
        const res = await axios.get(`${BASE_URL}/api/games?genres=${this.genreId}&key=9d413701ecfd4c75ae68781db863731a`)
        this.games = res.data.results
      }
    }
  }
</script>
