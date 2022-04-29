<template>
  <div class="game-content" v-if="gameDetails">
    <section class="image-container" >
      <button @click="backButton"> Back to games </button>
      <div>
        <img :src="gameDetails.background_image_additional" />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3> {{ gameDetails.name }}</h3>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  const API_KEY = process.env.VUE_APP_MY_API_KEY
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

       const res= await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
      this.gameDetails = res.data
      },
      backButton(){ 
        this.$router.go(-1)
      }
    }
  }
</script>
