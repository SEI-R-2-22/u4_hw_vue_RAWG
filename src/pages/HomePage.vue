<template>
  <div>
    <div class="search">
      <form v-on:submit="getSearchResults">
        <input
          @input="handleChange"
          placeholder="Search"
          :value="searchQuery"
        />
      </form>
      <div class="result-title">
        <h2>Search Results</h2>
        <div class="sort">
          <select @change="sortGames($event)">
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
        </div>
      </div>
      <section class="search-results container-grid">
        <GameCard 
          v-for="game in searchResults"
          :key="game.id"
          :game="game"
        />
      </section>
    </div>

    <div class="genres">
      <h2>Genres</h2>
      <section class="container-grid">
        <GenreCard 
          v-for="genre in genres"
          :key="genre.id"
          :genre="genre"
        />
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
  components: { GenreCard, GameCard },
    name: 'HomePage',
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
      },
      async getSearchResults(e) {
        e.preventDefault()
        const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
        this.searchResults = res.data.results
        this.searchQuery = ''
        this.searched = false
      },
      handleChange(e) {
        this.searchQuery = e.target.value
        this.searched = true
      },
      sortGames(event) {
        switch (event.target.value) {
          case 'asc':
            this.searchResults.sort((a, b) => {
            return a.rating - b.rating
            })
            break;
          case 'desc':
            this.searchResults.sort((a, b) => {
            return b.rating - a.rating
            })
            break;
        }
      }
    }
  }
</script>
