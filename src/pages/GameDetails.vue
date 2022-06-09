<template>
  <div class="game-content" v-if="gameDetails">
    <section class="image-container">
     <img :src="gameDetails.background_image" />
      <div></div>
    </section>
    <section class="details">
      <div class="flex-row space" ></div>
      <div class="centered">
       <h2 class="g-names">{{ gameDetails.name }}</h2>
        <p class="game-names">{{ gameDetails.description_raw }}</p>
        <p class="game-names"> Rating: {{ gameDetails.rating }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
const API_KEY = process.env.VUE_APP_RAWG_KEY;
  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: null
    }),
    mounted() {
      this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        let gameId = parseInt(this.$route.params.game_id)
         const res = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
          this.gameDetails = res.data
          console.log(res.data)
     }
    }
  }
</script>

<style>
.game-names {
  margin: 25px 45px;
  padding: 10px;
  background-color: rgb(98, 100, 78);
}

.menu {
  padding: 15px;
  margin: 25px 45px;
  font-size: 25px;
 
}

.b {
  background-color: rgb(98, 100, 78);
  padding: 10px;
}
</style>