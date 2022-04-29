<template>
  <div v-if='gameDetails' class="game-content">
    <section class="image-container">
      <div>
        <img :src="gameDetails.background_image" alt="">
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3>{{ gameDetails.name }}</h3>
        <p>{{ gameDetails.description_raw }}</p>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  const API_KEY = "93d83988c44f4db4a5691fe1a296495f"

  export default {
    name: 'GameDetails',
    // props: ['gameDetails'],
    data: () => ({
      gameDetails: null
    }),
    mounted: async function() {
      await this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        const gameId = parseInt(this.$route.params.game_id)
        const res = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
        this.gameDetails = res.data
      }
    }
  }
</script>
