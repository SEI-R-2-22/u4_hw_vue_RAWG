<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults" >
        <input type="text" placeholder="Search..."  v-model="searchQuery" @input='handleChange'/>
        <button >Search</button>
       </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <game-card :searchResult='searchResult' v-for='searchResult in searchResults' :key='searchResult.id' @selectGame='selectGame' />
      </section>
    </div>

    <div class="genres" v-if='!searched'>
      <h2>Genres</h2>
      <section class="container-grid">
        <genre-card :genre='genre' v-for='genre in genres' :key='genre.id' @selectGenre="selectGenre"/>
      </section>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import GenreCard from '../components/GenreCard.vue'
import GameCard from '../components/GameCard.vue'
const API_KEY = "93d83988c44f4db4a5691fe1a296495f"
// const searchQuery = ''

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
      //  console.log(this.genres)
      }, 
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?search=${this.searchQuery}&key=${API_KEY}`)
        this.searchResults = res.data.results,
        // console.log(this.searchResults)
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
