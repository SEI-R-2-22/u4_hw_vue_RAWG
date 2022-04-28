<template>
  <div>
    <div class="search">
      <form v-on:submit="getSearchResults">
        <input @input="handleChange"/>
        <button>SEARCH</button>
      </form>
      <!-- Search Form Goes Here -->
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <GameCard v-for="game in searchResults" :key="game.id" :img="game.background_image" :gname="game.name" @click="selectGame(game.id)"/>
      </section>
    </div>

    <div class="genres">
      <h2>Genres</h2>
      <section class="container-grid">
        <!-- <GenreCard :v-for="genre in genres" :key="genre.id" :img="genre.image_background" :name="genre.name"/> -->
        <GenreCard v-for="genre in genres" :key="genre.id" :img="genre.image_background" :gname="genre.name" />
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GenreCard from '../components/GenreCard.vue'
import GameCard from '../components/GameCard.vue'

const API_KEY = process.env.VUE_APP_API

  export default {
    name: 'HomePage',
    data: () => ({
      genres: [],
      searchQuery: '',
      searchResults: [],
      searched: false
    }),

    methods: {
      async getGenres () {
        const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        this.genres = res.data.results
        
      },
      async getSearchResults(e) {
        e.preventDefault()
        console.log(this.searchQuery)
        // let search = this.searchQuery
        const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
        this.searchResults = res.data.results
        console.log(e)
      },
      handleChange(event) {
        console.log(event)
        this.searchQuery=event.target.value
      },
      selectGame(gameId) {
        console.log(gameId)
        this.$router.push(`/details/${gameId}`)
      }
    },
    components:{
      GenreCard,
      GameCard
    },
    mounted: async function() {
      await this.getGenres()
    },
  }
</script>
