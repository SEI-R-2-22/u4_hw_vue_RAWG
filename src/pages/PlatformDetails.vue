<template>
    <div class="platform-content" v-if="platformDetails">
        <section class="image-container">
            <div class="image-wrapper">
                <img :src='platformDetails.image_background'>
            </div>
          </section>
        <section class="details">
            <div class="info-wrapper flex-col">
                <h2>{{platformDetails.name}}</h2>
                <div v-html='platformDetails.description'></div>
                <h3>Total Games: {{platformDetails.games_count}}</h3>
             </div>
    </section>
    </div>
</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_RAWG_KEY

export default {
    name: 'PlatformDetails',
    data: () => ({
        platformDetails: null,
        platformId: null,
    }),
    mounted: function() {
        this.platformId = parseInt(this.$route.params.platform_id)
        this.getPlatformDetails()
    },
    methods: {
        async getPlatformDetails() {
            const res = await axios.get(`https://api.rawg.io/api/platforms/${this.platformId}?key=${API_KEY}`)
            this.platformDetails = res.data
        }
    }
}
</script>

<style scoped>
div {
    text-align: center;
}
.platform-content .image-container { 
  width: 95vw;
  margin: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1em 0;
}


</style>