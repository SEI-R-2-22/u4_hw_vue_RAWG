<template>
  <div>
    <div class="search">
      <form @submit='getSearchResults'>
        <input 
          type='text'
          placeholder='Search'
          :value='searchQuery' 
          v-on:input='handleChange'
        />
        <button>
          Search
        </button>
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <GameCard 
          v-for='result in searchResults'
          :key='result.id'
          :result='result'
          @click='selectGame(result.id)'
        />
      </section>
    </div>
    <div class="genres" v-if='!searched'>
      <h2>Genres</h2>
      <section class="container-grid">
        <GenreCard 
          v-for='genre in genres'
          :key='genre.id'
          :genre='genre'
          @click='selectGenre(genre.id)'
        />
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GenreCard from '../components/GenreCard.vue'
  import GameCard from '../components/GameCard.vue'
  // const VUE_APP_RAWG_KEY = process.env.API_KEY

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
        // const res = await axios.get(`https://api.rawg.io/api/genres?key=${VUE_APP_RAWG_KEY}`)
        const res = await axios.get(`https://api.rawg.io/api/genres?key=2e4c52ebce104d969a880e4f4d2a3ca2`)
        this.genres = res.data.results
        // console.log(res.data.results)
      },
      async getSearchResults(e) {
        e.preventDefault()
        // const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
        const res = await axios.get(`https://api.rawg.io/api/games?key=2e4c52ebce104d969a880e4f4d2a3ca2&search=${this.searchQuery}`)
        this.searchResults = res.data.results
        this.searched = true
      },
      handleChange(event) {
        console.log(event)
        this.searchQuery= event.target.value
      },
      selectGame(gameId) {
        console.log(gameId)
        this.$router.push( `/details/${gameId}` )
      },
      selectGenre(genreId) {
        this.$router.push( `/genreDetails/${genreId}` )
      }
    }
  }
</script>
