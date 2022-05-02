<template>
  <div>
    <div class="search">
      <form @submit="getSearchResults">
        <input
          @input='handleChange'
          :value='searchQuery'
        />
        <button>Search</button>
      </form>
      <h2>Search Results</h2>
      <section v-if="searched" class="search-results container-grid">
        <GameCard :key='game.id' v-for="game in searchResults" :game='game' @click="selectGame(game.id)"/>
      </section>
    </div>

    <div class="genres" v-if="!searched">
      <h2>Genres</h2>
      <section class="container-grid">
        <GenreCard :key='genre.id' v-for="genre in genres" :genre='genre' @click='selectGenre(genre.id)'/>
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GenreCard from '../components/GenreCard.vue'
  import GameCard from '../components/GameCard.vue'
  const API_KEY = process.env.VUE_APP_RAWG_KEY
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
    mounted: function() {
      this.getGenres()
    },
    methods: {
      async getGenres() {
        const res = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
        this.searchResults = res.data.results
        this.searched = true
      },
      handleChange(event) {
        this.searchQuery = event.target.value
      },
      selectGame(gameId) {
        this.$router.push(`/details/${gameId}`)
      },
      selectGenre(genreId) {
        this.$router.push(`/games/${genreId}`)
      }
    }
  }
</script>
