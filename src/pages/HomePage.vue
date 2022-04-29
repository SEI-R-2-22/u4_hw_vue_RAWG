<template>
  <div>
    <div class="search">
      <form v-on:submit="getSearchResults">
        <input :value='this.searchQuery'
                placeholder="Search"
                @input="handleChange"/>
        <button>SEARCH</button>
      </form>  
      <!-- Search Form Goes Here -->
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <GameCard v-for="game in serchResults" 
                  :key="game.id" 
                  :img="game.background_image" 
                  :name="game.name" 
                  :rating="game.rating" 
                  @click="selectGame(game.id)"/>
      </section>
    </div>
    <div class="genres" v-if='!searched'>
      <h2>Genres</h2>
      <section  class="container-grid">
        <GenreCard v-for="genre in this.genres" 
                  :key="genre.id" 
                  :img="genre.image_background" 
                  :name="genre.name" 
                  @click='selectGenre(genre.id)'/>
      </section>
    </div>
  </div>
</template>

<script>
// IMPORTS //
import axios from "axios"
import GenreCard from '../components/GenreCard.vue'
import GameCard from '../components/GameCard.vue'

const API_KEY = process.env.VUE_APP_RAWG_KEY

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
      GameCard,
    },
    props: ['img', 'name'],

    mounted: function() {
      this.getGenres()
    },

    methods: {
      async getGenres() {
        const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
        this.serchResults = res.data.results
        this.searched = true
        console.log(e)
      },
      handleChange(event) {
        console.log(event)
        this.searchQuery = event.target.value
      },
      selectGame(gameId) {
        console.log(gameId)
        this.$router.push(`/details/${gameId}`)
      },
      async selectGenre(genreId){
        this.$router.push(`/genre/${genreId}`)
      }
    }
  }
</script>
