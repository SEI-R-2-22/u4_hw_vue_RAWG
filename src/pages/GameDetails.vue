<template>
  <div class="game-content" v-if='gameDetails'>
    <section class="image-container">
      <div>
        <img :src='gameDetails.background_image' />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space"></div>
      <div>
        <h3>
          {{ gameDetails.name }}
        </h3>
        <p>
          {{  gameDetails.description_raw  }}
        </p>
      </div>
      <div>
        <!-- <button this.$router.go(-1)>Back</button> -->
        <nav>
          <router-link to="/">Back</router-link>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  // const VUE_APP_RAWG_KEY = process.env.API_KEY

  export default {
    name: 'GameDetails',
    props: {
      result: {}
    },
    data: () => ({
      gameDetails: null
    }),
    mounted() {
      this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        let gameId = parseInt(this.$route.params.game_id)
        const res = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=2e4c52ebce104d969a880e4f4d2a3ca2`)
        // const res = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${VUE_APP_RAWG_KEY}`)
        this.gameDetails = res.data
        // console.log(this.gameDetails)
      }
    }
  }
</script>
