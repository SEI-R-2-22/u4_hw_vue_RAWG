<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults">
      <input :value="searchQuery" @input="handleChange" /> 
      <button > Search </button>
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <GameCard v-for="result in searchResults" :key="result.id" :gameDetails="result" @click="selectGame(result.id)"/>
      </section>
    </div>
      
    <div class="genres" v-if="!searched" >
      <h2 >Genres</h2>
      <section class="container-grid">
        <GenreCard :genre='genre' v-for='genre in genres' :key='genre.id' @click="selectGenre(genre.id)" />
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GenreCard from '../components/GenreCard.vue'
  import GameCard from '../components/GameCard.vue'
  const API_KEY = process.env.VUE_APP_MY_API_KEY

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
    mounted: async function()  {
      await this.getGenres()
    },
    methods: {
      async getGenres() {
        const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        this.genres = res.data.results
        console.log(res.data.results)
    
        
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
        this.searchResults = res.data.results
        this.searched = true

      },
      handleChange(e) {
        this.searchQuery = e.target.value
        
      },
      selectGame(gameId) {
        console.log(gameId)
        this.$router.push({path:`/details/${gameId}`})
        
      },
      selectGenre(genreId) {
      this.$router.push({path:`/games/${genreId}`})
      console.log('banana')
      }
    }
  }
</script>
