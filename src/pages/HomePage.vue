<template>
  <div>
    <div class="search">
      <!-- Search Form Goes Here -->
      <h2>Search Results</h2>
      <section class="search-results container-grid"></section>
    </div>

    <div class="genres">
      <h2>Genres</h2>
      <section class="container-grid" v-for="genre in genres" :key="genre.id">
        <GenreCard v-if='genres' :genres="genres" :image="genre.image_background" :name="genre.name" @getGenres="getGenres"/>
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import GenreCard from '../components/GenreCard.vue'
  const API_KEY = process.env.VUE_APP_RAWG_KEY
  console.log(API_KEY)
  export default {
    name: 'HomePage',
    components: {
      GenreCard
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
        console.log(res.data, 'GENRES RESPONSE!!')
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
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
