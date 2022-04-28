<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults">
        <input
          :value="searchQuery"
          @input="handleChange"
        />
        <button>Submit</button>
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <GameCard v-for="result in searchResults" :key="result.id" :game="result" @selectGame="selectGame" />
      </section>
    </div>

    <div v-if="!searched" class="genres">
      <h2>Genres</h2>
      <section class="container-grid">
        <GenreCard v-for="genre in genres" :key="genre.id" :genre="genre" @selectGenre="selectGenre"/>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GenreCard from '../components/GenreCard.vue'
import GameCard from '../components/GameCard.vue'
const API_KEY=process.env.VUE_APP_RAWG_KEY

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
    mounted: async function() { await this.getGenres()},
    methods: {
      async getGenres() {
        const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
        this.searchResults = res.data.results
        this.searched = true
      },
      handleChange(event) {
        this.searchQuery = event.target.value
        console.log(event)
      },
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
        console.log(gameId)
      },
      selectGenre(genreId) {
        this.$router.push(`/games/${genreId}`)
      }
    }
  }
</script>
