<template>
  <div class="game-content">
    <section class="image-container" >
      <div v-if='gameDetails' :gameDetails="gameDetails">
        <img :src="gameDetails.background_image" />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space" v-if='gameDetails' :gameDetails="gameDetails">
        <h3>{{gameDetails.name_original}}</h3>
        <ul v-for="platform in gameDetails.platforms" :key="platform"><li>{{platform.platform.name}}</li></ul>
        <p>{{gameDetails.description_raw}}</p>
      </div>
    </section>
    <button @click="backButton" >Back to Home</button>
  </div>
</template>

<script>
import axios from 'axios'

const API_KEY = process.env.VUE_APP_API_KEY

  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: {}
    }),
    mounted: function() {this.getGameDetails()},
    methods: {
      async getGameDetails() {
        const id = this.$route.params.game_id
        const res = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        this.gameDetails = res.data
        console.log(this.gameDetails)
      },
      backButton(){
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
.flex-row{
  flex-direction: column;
}
</style>
