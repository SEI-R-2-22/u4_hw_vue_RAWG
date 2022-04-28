<template>
  <div>
    <div class="search">
      <!-- Search Form Goes Here -->
      <form @submit="getSearchResults">
        <input
          type="text"
          :value="searchQuery"
          @input="handleChange"
        />
        <button>Search</button>
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <GameCard :key="result.id" v-for="result in searchResults" :gameDetails="result" @click="selectGame(result.id)"/>
      </section>
    </div>

    <div v-if="!searched" class="genres">
      <h2>Genres</h2>
      <section class="container-grid">
        <GenreCard :key="genre.id" v-for="genre in genres" :genre="genre"/>
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GenreCard from '../components/GenreCard.vue'
  import GameCard from '../components/GameCard.vue'
  const API_KEY = process.env.VUE_APP_API_KEY
  const BASE_URL = 'https://api.rawg.io/api/'
  export default {
    name: 'HomePage',
    data: () => ({
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }),
    components: {
      GenreCard,
      GameCard
    },
    mounted() {
      this.getGenres()
    },
    methods: {
      async getGenres() {
        const res = await axios.get(`${BASE_URL}genres?key=${API_KEY}`)
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`${BASE_URL}games?search=${this.searchQuery}&key=${API_KEY}`)
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
      }
    }
  }
</script>
