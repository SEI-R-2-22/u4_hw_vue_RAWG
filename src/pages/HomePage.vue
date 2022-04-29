<template>
  <div>
    <div class="search">
      <form v-on:submit="getSearchResults" >
        <input :value="searchQuery" @input="handleChange" />
        <button>Search</button>
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid" v-for="search in searchResults" :key="search.id">
        <GameCard @click="selectGame(search.id)" v-if='searchResults' :searchResults='searchResults' :name='search.name' :image='search.background_image' :rating='search.rating' />
      </section>
    </div>

    <div class="genres">
      <h2>Genres</h2>
      <section class="container-grid" v-for="genre in genres" :key="genre.id">
        <GenreCard @click="selectGenre(genre.id)" v-if='genres' :genres="genres" :image="genre.image_background" :name="genre.name" @getGenres="getGenres"/>
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
    mounted() {
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
        this.searched = !this.searched
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
