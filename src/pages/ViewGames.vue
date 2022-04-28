<template>
  <!-- <button @click="toggleAscending" v-if="ascending">Sort by descending</button>
  <button @click="toggleAscending" v-else>Sort by ascending</button> -->
  <form @submit="sort">
    <select @change="handleSortChange">
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
    <button type="submit">Sort</button>
  </form>
  <div v-if="games.length > 0" className="container-grid">
    <GameCard v-for="game in games" :key="game.id" :game="game" @click="() => selectGame(game.id)" />
  </div>
  <div v-else>Loading</div>
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
      sorting: 'ascending'
    }),
    mounted() {
      this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
        // Get Genre Id here
        const res = await axios.get(
          `https://api.rawg.io/api/games?genres=${this.$route.params.genre_id}&key=${API_KEY}`
        )
        this.games = res.data.results
      },
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
      },
      sort(e) {
        e.preventDefault()
        let sorted = this.games
        if (this.sorting === 'ascending') {
          sorted = sorted.sort((a, b) => {
            return a.rating - b.rating
        }) 
        } else {
          sorted = sorted.sort((a, b) => {
            return b.rating - a.rating
          })
        }
        this.games = sorted
      },
      handleSortChange(e) {
        e.preventDefault()
        this.sorting = e.target.value
      } 
    }
  }
</script>
