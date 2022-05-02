<template>
  <div>
    <div class="search">
      <form action="search" @submit="getSearchResults">
        <input type="text" @change="handleChange"/>
        <button></button>
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid" :key="search.id" v-for="search in searchResults">
        <GameCard :name="genre.name" :image="genre.image"/>
      </section>
    </div>

    <div class="genres" v-if="searched">
      <h2>Genres</h2>
      <section class="container-grid"  :key="genre.id" v-for="genre in genres">
        <GenreCard :genre="genre.name" :image="genre.image_background"/>
      </section>
    </div>
    <div v-else >

    </div>
  </div>
</template>

<script>
import GenreCard from '../components/GenreCard.vue'
import GameCard from '../components/GameCard.vue'
import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY
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
    mounted() {},
    methods: {
      async getGenres() {
        const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
        this.searched = true
      },
      handleChange(event) {
        console.log(event)

      },
      selectGame(gameId) {
        console.log(gameId)
      }
    }
  }
</script>
