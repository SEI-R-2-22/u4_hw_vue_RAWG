<template>
  <div>
    <label>SORT:</label>
    <select @click="sortGames">
      <option>SORT</option>
      <option>ASCEND</option>
      <option>DESCEND</option>
    </select>
  </div>
  <div className="container-grid">
    <div v-for="game in games" :key="game.id">
      <h3>{{ game.name }}</h3>
      <h6>{{ game.rating }}</h6>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  const API_KEY = process.env.VUE_APP_RAWG_API
  export default {
    name: 'ViewGames',
    data: () => ({
      games: []
    }),
    mounted() {
      this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
        let genreId = parseInt(this.$route.params.genre_id)
        const res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`)
        this.games = res.data.results
      },
      sortGames(e) {
        if(e.target.value === "ASCEND") {
          this.games = this.games.sort((a,b) => {
            return a.rating - b.rating
          })
        } else if (e.target.value === "DESCEND") {
          this.games = this.games.sort((a,b) => {
            return b.rating - a.rating
          })
        }
      }
    }
  }
</script>
