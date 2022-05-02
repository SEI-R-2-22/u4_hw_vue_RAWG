<template>
  <div class="game-content" v-if="gameDetails">
    <section class="image-container">
      <div class="image-wrapper">
        <img :src='gameDetails.background_image'>
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div class="info-wrapper flex-col">
        <h2>{{gameDetails.name}}</h2>
           {{gameDetails.description_raw}}
        <h3>Rating: {{gameDetails.rating}}</h3>
        <h3>Rated: {{gameDetails.esrb_rating.name}}</h3>
        <h3>Release Date: {{gameDetails.released}}</h3>
      </div>
      <div class="reddit-container">
        <!-- <h2>Recent Reddit Posts</h2>
        <ul :key='post.id' v-for="post in redditPosts">
        <a :href='post.url'>{{post.name}}</a>
        </ul> -->
      </div>
    </section>
    <button @click="goHome">Back</button>
  </div>
</template>

<script>
  import axios from 'axios'
  const API_KEY = process.env.VUE_APP_RAWG_KEY
  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: null,
      gameId: null,
      redditPosts: null
    }),
    mounted: function() {
      this.gameId = parseInt(this.$route.params.game_id)
      this.getGameDetails()
      // this.getRedditPosts()
    },
    methods: {
      async getGameDetails() {
        const res = await axios.get(`https://api.rawg.io/api/games/${this.gameId}?key=${API_KEY}`)
        this.gameDetails = res.data
      },
      goHome() {
         this.$router.push(`/`)
      },
      // async getRedditPosts() {
      //   const res = await axios.get(`https://api.rawg.io/api/games/${this.gameId}/reddit?key=${API_KEY}`)
      //   this.redditPosts = res.data.results
      // } 
    }
  }
</script>
