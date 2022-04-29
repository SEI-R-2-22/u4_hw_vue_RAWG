<template>
  <div class="game-content" >
    <section class="image-container">
      <div>
        <img :src="image" alt="">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
        <router-link to="/"><button>Back</button></router-link>
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3></h3>
      </div>
    </section>
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
      image: "",
      name: "",
      description: ""
    }),
    mounted() {
      this.gameId = parseInt(this.$route.params.game_id)
      this.getGameDetails(this.gameId)
    },
    methods: {
      async getGameDetails() {
        
        const res = await axios.get(`https://api.rawg.io/api/games/${this.gameId}?key=${API_KEY}`)
        this.gameDetails = res.data
        this.image = res.data.background_image
        this.name = res.data.name
        this. description = res.data.description_raw
        console.log(res.data)
      }
    }
  }
</script>
