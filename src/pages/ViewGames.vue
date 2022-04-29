<template>
  <div className="container-grid">
    <game-card v-for="game in games" :key="game.id" :game="game" @selectGame="selectGame"/>
  </div>
</template>

<script>
    import axios from 'axios'
    import GameCard from '../components/GameCard.vue'
    const API_KEY='93d83988c44f4db4a5691fe1a296495f'

  export default {
    
    name: 'ViewGames',
    components: {
      GameCard
    },
    data: () => ({
      games: []
    }),
    mounted: async function() {
      await this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
        let genreId = parseInt(this.$route.params.genre_id)
        const res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`)
        this.games = res.data.results
      },
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
      }
    }
  }
</script>
