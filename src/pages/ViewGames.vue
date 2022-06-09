<template>
  <div class="centered">
    <h1 class="g-names">Games:</h1>
  </div>
  <label class="menu" for="rating">Sort By: </label>
  <select class="drop" name="ratings" @change="getSorted($event)">
    <option id="drop" value="ascending">Highest Rating</option>
    <option id="drop" value="descending">Lowest Rating</option>

  </select>
  <div class="container-grid" v-if="games"></div>
  <div v-for="game in games" :key="game.id" class="game-names">
    <h3>{{ game.name }}</h3>
    <div>Rating: {{ game.rating }}</div>
  </div>
</template>

<script>
  import axios from 'axios'
  const API_KEY = process.env.VUE_APP_RAWG_KEY;
  export default {
    name: 'ViewGames',
    data: () => ({
      genreId: null,
      games: [],
      ratings: null
    }),
    mounted: function () {
      this.genreId = parseInt(this.$route.params.genre_id)
      this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
         const res = await axios.get(`https://api.rawg.io/api/games?genres=${this.genreId}&key=${API_KEY}`)
          this.games = res.data.results
          console.log(res.data.results)
      },
      getSorted(type) {
        console.log(type.target.value)
        if (type.target.value === 'descending' ) {
        this.games.sort(function(a, b) {
         return a.rating - b.rating;
       })
      } else {
         this.games.sort(function(a, b) {
         return b.rating - a.rating;
       })
      }
      }
    }
  }
</script>

<style>
.container-grid {
  text-align: center;
  font-size: 25px;
}
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

.drop {
  padding: 10px;
  font-size: 20px;
  
}

.b {
  background-color: rgb(98, 100, 78);
  padding: 10px;
}
</style>