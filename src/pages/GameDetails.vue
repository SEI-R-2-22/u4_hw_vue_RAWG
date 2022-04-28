<template>
  <div class="game-content">
    <div v-if='gameDetails'>
        <section class="image-container">
      <div>
          <img :src='this.gameDetails.background_image' />
      </div>
        </section>
        <section class="details">
        <div class="flex-row space"></div>
        <div>
            <h3>{{this.gameDetails.name}}</h3>
            <p>{{this.gameDetails.description_raw}}</p>
            <button @click="backHome">Back</button>
        </div>
        </section>
    </div>
    <div></div>
  </div>
</template>

<script>
    import axios from 'axios'
    const API_KEY = process.env.VUE_APP_RAWG_API_KEY

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
                // Get game id from router here
                const gameId = this.$route.params.game_id
                const details = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
                console.log(details.data)
                this.gameDetails = details.data
                console.log(this.gameDetails)
            },
            backHome(){
                this.$router.push(`/`)
            }
        }
    }
</script>
