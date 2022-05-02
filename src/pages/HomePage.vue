<template>
  <div>
    <div class="search">
      <form @submit='getSearchResults'>
        <input type=text placeholder='Search' v-model='searchQuery' @input='handleChange'/>
        <button>Search</button>
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <game-card :searchResults='searchResult' v-for='searchResult in searchResults' :key='searchResult.id' @selectGame='selectGame'/>
      </section>
    </div>

    <div class="genres" v-if='!searched'>
      <h2>Genres</h2>
      <section class="container-grid">
        <genre-card :genre='genre' v-for='genre in genres' :key='genre.id'/>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GenreCard from '../components/GenreCard.vue'
import GameCard from '../components/GameCard.vue'
const API_KEY = 'cf335df9fbcf4554b48511dae36d7652'
  
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
    mounted: async function() {
      await this.getGenres()
    },
    methods: {
      async getGenres() {
        const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        this.genres = res.data.results

      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?search=${this.searchQuery}&key=${API_KEY}`)
        this.searchResults = res.data.results
        this.search = true
      },
      handleChange(event) {
        this.searchQuery = event.target.value
        console.log(event)
      },
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
        console.log(gameId)
      }
    }
  }
</script>
