<template>
    <div>
        <div class="dropdown">
            <button class="dropbtn">Sort</button>
            <div class="dropdown-content">
                <a @click="setSort('ascend')">Rating - Ascending</a>
                <a @click="setSort('decend')">Rating - Decensding</a>
            </div>
        </div>
        <div className="container-grid" v-if='!sort'>
            <GameCard v-for='game in games' :key='game.id' :name='game.name' :image='game.background_image' :rating='game.rating'/>
            <button @click="updateGamesArray('back')" v-if='previous'>Back</button>
            <button @click="updateGamesArray('next')">Next</button>
        </div>
        <div className="container-grid" v-else-if='sort'>
            <GameCard v-for='game in games' :key='game.id' :name='game.name' :image='game.background_image' :rating='game.rating'/>
            <button @click="updateGamesArray('back')" v-if='previous'>Back</button>
            <button @click="updateGamesArray('next')">Next</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import GameCard from '../components/GameCard.vue'
    const API_KEY = process.env.VUE_APP_RAWG_KEY
    export default {
        name: 'ViewGames',
        data: () => ({
            games: [],
            sort: '',
            next: '',
            previous: ''
        }),
        components: {
            GameCard
        },
        mounted() {
            this.getGamesByGenre()
            
        },
        methods: {
            async getGamesByGenre() {
                // Get Genre Id here
                const genreId = this.$route.params.genre_id
                const res = await axios.get(`https://api.rawg.io/api/games?genres=${genreId}&key=${API_KEY}`)
                this.games = res.data.results
                this.next = res.data.next
                this.previous = res.data.previous
            },
            async updateGamesArray (value) {
                if(value == 'next'){
                    const res = await axios.get(this.next)
                    this.previous = res.data.previous
                    this.next = res.data.next
                    this.games = res.data.results
                }else if(value == 'back'){
                    const res = await axios.get(this.previous)
                    this.previous = res.data.previous
                    this.next = res.data.next
                    this.games = res.data.results
                }
                
                this.setSort(this.sort)
            },
           
            setSort(value) {
                this.sort = value
                if(value == 'ascend'){
                    this.games.sort((a, b) => {
                        if (a.rating > b.rating) {
                            return 1;
                        }
                        if (a.rating < b.rating) {
                            return -1;
                        }
                            return 0;
                    })
                }else if(value == 'decend'){
                    this.games.sort((a, b) => {
                        if (a.rating < b.rating) {
                            return 1;
                        }
                        if (a.rating > b.rating) {
                            return -1;
                        }
                            return 0;
                    })
                }
            }
        },
    }
</script>

<style scoped>

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #ff9900;}
</style>