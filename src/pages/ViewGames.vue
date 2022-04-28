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
  const API_KEY = process.env.VUE_APP_RAWG_API_KEY
  export default {
    name: 'ViewGames',
		components: { GameCard },
    data: () => ({
      games: [],
      genreId: null
    }),
    mounted: async function() {
      this.genreId = parseInt(this.$route.params.genre_id)
      await this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() { 
        const res = await axios.get(`https://api.rawg.io/api/games?genres=${this.genreId}&key=${API_KEY}`)
        this.games = res.data.results
      },
      sortGames(event) {
        switch (event.target.value) {
          case 'asc':
            this.games.sort((a, b) => {
            return a.rating - b.rating
            })
            break;
          case 'desc':
            this.games.sort((a, b) => {
            return b.rating - a.rating
            })
            break;
        }
      }
    }
  }
</script>
