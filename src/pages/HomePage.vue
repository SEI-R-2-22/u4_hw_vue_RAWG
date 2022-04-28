<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults">
        <input type="text" :value="searchQuery" @change="handleChange" />
        <button type="submit">Search</button>
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <GameCard v-for="game in searchResults" :key="game.id" :game="game" @click="() => selectGame(game.id)" />
      </section>
    </div>

    <div v-if="!searched" class="genres">
      <h2>Genres</h2>
      <section v-if="genres.length > 0" class="container-grid">
        <GenreCard :key="genre.id" v-for="genre in genres" :genre="genre" @click="() => selectGenre(genre.id)" />
      </section>
      <section v-else>Loading</section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GenreCard from '../components/GenreCard.vue'
  import GameCard from '../components/GameCard.vue'

  const API_KEY = process.env.VUE_APP_RAWG_KEY

  export default {
    name: 'HomePage',
    components: {
      GenreCard,
      GameCard
    },
    data: () => ({
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }),
    mounted: function() {
      this.getGenres()
    },
    methods: {
      async getGenres() {
        const res = await axios.get(
          `https://api.rawg.io/api/genres?key=${API_KEY}`
        )
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`
        )
        this.searchResults = res.data.results
        this.searched = true
      },
      handleChange(event) {
        console.log(event)
        this.searchQuery = event.target.value
      },
      selectGame(gameId) {
        console.log(gameId)
        this.$router.push(`/details/${gameId}`)
      },
      selectGenre(genreId) {
        this.$router.push(`/games/${genreId}`)
      }
    }
  }
</script>
