<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults">
        <input 
          type='text' 
          :value='searchQuery' 
          @input='handleChange'
          placeholder="Search..."
        />
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <GameCard :key="game.id" v-for="game in searchResults" :game='game' />
      </section>
    </div>

    <div class="genres">
      <h2>Genres</h2>
      <section class="container-grid">
        <GenreCard :key="genre.id" v-for="genre in genres" :genre="genre"/>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// const API_KEY = process.env.VUE_APP_RAWG_API_KEY
const BASE_URL = 'https://api.rawg.io'
// https://api.rawg.io/api/platforms?key=YOUR_API_KEY
import GenreCard from '../components/GenreCard.vue'
import GameCard from '../components/GameCard.vue'

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
    mounted() {
      this.getGenres()
    },
    methods: {
      async getGenres() {
        const res = await axios.get(`${BASE_URL}/api/genres?key=9d413701ecfd4c75ae68781db863731a`)
        this.genres = res.data.results
        console.log(res.data.results)
        }
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`${BASE_URL}/api/games?search=${this.searchQuery}&key=9d413701ecfd4c75ae68781db863731a`)
        this.searchResults = res.data.results
        console.log(res.data.results)
        this.searchQuery = ''
        this.searched = false
      },
      handleChange(event) {
        console.log(event)
        event.preventDefault()
        this.searchQuery = event.target.value
        this.searched = true
      },
      selectGame(gameId) {
        console.log(gameId)
        this.$router.push(`/details/${gameId}`)
      }
    }
</script>
