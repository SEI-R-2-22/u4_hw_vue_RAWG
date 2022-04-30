<template>
  <div className="container-grid"></div>
</template>

<script>
import axios from 'axios'
import GameCard from '../components/GameCard.vue'
const API_KEY = process.env.VUE_RAWG_KEY
  export default {
    name: 'ViewGames',
    data: () => ({
      games: []
    }),
    components: {
      GameCard,
    
    },

    mounted() {
    },
    methods: {
      async getGamesByGenre() {
    
      }
    }
  }
</script>
