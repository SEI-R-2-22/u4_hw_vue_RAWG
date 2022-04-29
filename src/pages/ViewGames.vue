<template>
  <div class="">
    <div class="sort-click">
    <label>SORT:</label>
    <select @click="sortGames">
      <option>SORT</option>
      <option>ASCEND</option>
      <option>DESCEND</option>
    </select>
    </div>
   
      <div :key="game.id" v-for="game in games" >
        <h1 class="left-column">{{ game.name }}</h1>
        <h3 class="right-column">{{ game.rating }}</h3>
      </div>

  </div>
 

</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_MY_API_KEY
  export default {
    name: 'ViewGames',
    data: () => ({
      games: []
    }),
    mounted() {
      this.getGamesByGenre()
    },
    methods: {
      async getGamesByGenre() {
        let genreId = parseInt(this.$route.params.genre_id)

        const res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`)
        this.games = res.data.results
        console.log(res.data.results)

      },
      sortGames(e) {
        if(e.target.value === "ASCEND"){
          this.games = this.games.sort((a,b) => {return a.rating - b.rating})
        } else if (e.target.value === "DESCEND") {
          this.games = this.games.sort((a,b) => {return b.rating - a.rating})
        }
      }
    }
  }
</script>

<style>

.left-column{
   font-size: 35px;
   width: fit-content;
   text-align:center
}
.right-column{
  text-align:center;
  border: 5px solid pink;
  margin-left: auto;
  margin-right:auto;
  width:fit-content 
}

.sort-click{
  background-color:red ;
  text-align: center;
}
</style>>


