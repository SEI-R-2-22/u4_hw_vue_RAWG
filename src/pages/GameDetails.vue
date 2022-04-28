<template>
  <div class="game-content">
    <section class="image-container">
      <div>
        <img :src="gameDetails.background_image" />
      </div>
    </section>
    <section class="details">
      <div class="flex-row space">
        <button @click="returnHome">Back</button>
        <h1>{{gameDetails.name}}</h1>
        <h3>Rating: {{ gameDetails.rating}}</h3>
        <h3>Ratings Count: {{ gameDetails.ratings_count}}</h3>
        <h3>Metacritic: {{ gameDetails.metacritic}}</h3>
      </div>
      <div>
        <h3>Description:</h3>
        <p>{{ gameDetails.description_raw }}</p>
      </div>     
      <div class="flex-row space">
        <h3>Genres:  
          <p v-for="gameGenre in gameDetails.genres"
            :key="gameGenre.id">{{ gameGenre.name }}
          </p>
        </h3>
        <h3>Platforms:  
          <p v-for="platform in gameDetails.parent_platforms"
            :key="platform.platform.id">{{ platform.platform.name }}
          </p>
        </h3>
        <h3>Publishers:  
          <p v-for="publisher in gameDetails.publishers"
            :key="publisher.id">{{ publisher.name }}
          </p>
        </h3>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  const API_KEY = process.env.VUE_APP_RAWG_API_KEY
  export default {
    name: 'GameDetails',
    data: () => ({
      gameDetails: [],
      gameId: null
    }),
    mounted: async function() {
      this.gameId = parseInt(this.$route.params.game_id)
      await this.getGameDetails()
    },
    methods: {
      async getGameDetails() {
        const res = await axios.get(`https://api.rawg.io/api/games/${this.gameId}?key=${API_KEY}`)
        this.gameDetails = res.data
        console.log(res.data)
      },
      returnHome() {
        this.$router.go(-1)
      }
    }
  }
</script>
