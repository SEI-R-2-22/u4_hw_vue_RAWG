<template>
  <div>
    <div className="container-grid">
      <GameCard 
        v-for='game in games'
        :key='game.id'
        :game='game'
        @click='selectGame(game.id)'
      />
    </div>
    <div>
      <nav>
        <router-link to="/">Back</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GameCard from '../components/GameCard.vue'
  // const VUE_APP_RAWG_KEY = process.env.API_KEY

  export default {
    name: 'ViewGames',
    components: {
      GameCard
    },
    data: () => ({
      games: []
    }),
    mounted() {
      this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
        let genreId = parseInt(this.$route.params.genre_id)
        const res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=2e4c52ebce104d969a880e4f4d2a3ca2`)
        // const res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=${VUE_APP_RAWG_KEY}`)
        this.games = res.data.results
      },
      selectGame(gameId) {
        this.$router.push(`/genreDetails/${gameId}`)
      }
    }
  }
</script>
