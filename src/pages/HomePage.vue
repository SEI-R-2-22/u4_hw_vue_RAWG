<template>
  <div>
    <div class="search">
      <!-- Search Form Goes Here -->
      <form v-on:submit="getSearchResults">
        <input
        @input="handleChange"
        :value="searchQuery"
        type="text"
        />
        <button @submit="getSearchResults">SEARCH</button>
      </form>
      <h2>Search Results</h2>
      <section class="search-results container-grid">
        <GameCard v-for="result in searchResults" :key="result.id" :result="result" :name="result.name" :image="result.background_image" @click="selectGame(result.id)" />
      </section>
    </div>

    <div v-if="!searched" class="genres">
      <h2>Genres</h2>
      <section class="container-grid">
        <GenreCard v-for="genre in genres" :key="genre.id" :name="genre.name" :image="genre.image_background" />
      </section>
    </div>
  </div>
</template>

<script>
  import GameCard from "../components/GameCard.vue"
  import GenreCard from "../components/GenreCard.vue"
  const API_KEY = process.env.VUE_API_RAWG_KEY
  import axios from 'axios'
  export default {
    name: 'HomePage',
    components: {
      GenreCard,
      GameCard
    },
    props: {
      gameId: Number
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
        const res = await axios.get(`https://api.rawg.io/api/genres?key${API_KEY}`)
        this.genres = res.data.results
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/genres?key${API_KEY}&search=${this.searchQuery}`)
        this.searchResults = res.data.results
        this.searched = true
      },
      handleChange(event) {
        event = this.searchQuery
        console.log(event)
      },
      selectGame(gameId) {
        this.router.push(`/details/${gameId}`)
        console.log(gameId)
      }
    }
  }
</script>
