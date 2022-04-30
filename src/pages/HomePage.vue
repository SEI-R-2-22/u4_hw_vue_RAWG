<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults">
        <input :value="searchQuery" @input="handleChange"/>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <GameCard v-for="game in searchResults" :key="game.id" :name="game.name" :image="game.image" @click="selectGame"/>
      </section>
      <button> Search </button>
      </form>
    </div>

    <div class="genres" v-if="!searched">
      <h2>Genres</h2>
      <section class="container-grid">
        <GenreCard v-for="genre in genres" :key="genre.id" :name="genre.name" :image="genre.image" @click="selectgenre"/>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GameCard from '../components/GameCard.vue'
import GenreCard from '../components/GenreCard.vue'
const API_KEY = process.env.VUE_RAWG_KEY
  export default {
    name: 'HomePage',
    data: () => ({
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }),
    components: {
      GameCard,
      GenreCard
    },
    
    mounted: async function(){ await this.getGenres()},
    
    methods: {
      async getGenres() {
        const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        this.genres = res.data
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
        this.searchResults = res.data
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
        console.log(genreId)
        this.$router.push(`/genre/${genreId}`)
      }
    }
  }
</script>
