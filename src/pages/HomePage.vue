<template>
  <div>
    <div class="search background">
      <div class="centered">
        <h1>Welcome to RAWG Library</h1>
        <h2>Find your games now!</h2>
      </div>
      <form @submit="getSearchResults" class="input-container">
        <input @input="handleChange" placeholder="Search" :value="searchQuery" type="text" />
        <button class="button">Search</button>
      </form>
      <section class="search-results container-grid">
        <GameCard :key="result.id" v-for="result in searchResults" :result="result" :name="result.name"
          :image="result.background_image" @click="selectGame(result.id)" />
      </section>
    </div>

    <div class="genres" v-if="!searched">
      <h2 class="genres">Genres</h2>
      <section class="container-grid">
        <GenreCard v-for="genre in genres" :key="genre.id" :genre="genre" @click="selectGenre(genre.id)" />
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GenreCard from "../components/GenreCard.vue";
import GameCard from "../components/GameCard.vue"
const API_KEY = process.env.VUE_APP_RAWG_KEY;
export default {
  name: "HomePage",
  components: {
    GenreCard,
    GameCard
  },
  data: () => ({
    genres: [],
    searchQuery: "",
    searchResults: [],
    searched: false,
  }),
  mounted() {
    this.getGenres();
  },
  methods: {
    async getGenres() {
      const res = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      );
      this.genres = res.data.results;
      //console.log(res.data.results)
      
    },
    async getSearchResults(e) {
      e.preventDefault()
      const res = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${this.searchQuery}`)
       this.searchResults = res.data.results
       this.searched = true
  
   },
    handleChange(event) {
      this.searchQuery = event.target.value
      //console.log(event.target.value)
    },
    selectGame(gameId) {
     // console.log(gameId);
       this.$router.push({path:`/details/${gameId}`})
    },
     selectGenre(genreId) {
     // console.log(gameId);
       this.$router.push({path:`/games/${genreId}`})
    },
  },
};
</script>
