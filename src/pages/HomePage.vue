<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults">
          <input 
            :searchQuery="searchQuery"
            name="searchQuery"
            :value="searchQuery"
            @change="handleChange"/>
          <button> </button>
        </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        
      </section>
    </div>

    <div class="genres" v-if="!searched">
      <h2>Genres</h2>
      <section class="container-grid">
          <GenreCard :genre="genre" v-for="genre in genres" :key="genre.id" />
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GenreCard from '../components/GenreCard.vue'
const API_KEY = process.env.VUE_APP_API_KEY

const GENRES_URL = `https://api.rawg.io/api/genres?key=${API_KEY}`
//const GAME_DETAIL_URL = `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
//const DLC_URL = `https://api.rawg.io/api/games/${gameId}/additions?key=${API_KEY}`

  export default {
    name: 'HomePage',
    components: {
      GenreCard
    },
    data: () => ({
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }),
    mounted: function(){this.getGenres()},
    methods: {
      async getGenres() {
        const res = await axios.get(GENRES_URL)
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
        this.searchResults.push(res.data.results)
        this.searched = true
      },
      handleChange(event) {
        this.searchQuery = event.target.value
      },
      selectGame(gameId) {
        console.log(gameId)
      }
    }
  }
</script>

<style scoped>
img{
  /* max-width: 30vw;
  max-height: 70vw; */
}
</style>
