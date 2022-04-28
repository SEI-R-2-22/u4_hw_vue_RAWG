<template>
  <div>
    <div class="search">
      <!-- Search Form Goes Here -->
      <form @submit="getSearchResults">
          <input :value='this.searchQuery' placeholder="Search" @input="handleChange"/>
          <button>Search</button>
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
          <GameCard v-for='game in searchResults' :key='game.id' :name='game.name' :image='game.background_image' :rating='game.rating' @click='selectGame(game.id)'/>
      </section>
    </div>

    <div class="genres" v-if='!searched'>
      <h2>Genres</h2>
      <section class="container-grid">
          <GenreCard v-for='genre in this.genres' :key='genre.id' :image='genre.image_background' :name='genre.name' @click='selectGenre(genre.id)'/>
      </section>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import GenreCard from '../components/GenreCard.vue'
    import GameCard from '../components/GameCard.vue'

    const API_KEY = process.env.VUE_APP_RAWG_API_KEY
    
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
                const genreList = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
                this.genres = genreList.data.results
            },
            async getSearchResults(e) {
                e.preventDefault()
                const searchResult = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
                this.searchResults = searchResult.data.results
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
            async selectGenre(genreId){
                this.$router.push(`/genre/${genreId}`)
            }
        }
    }
</script>
