<template>
    <h2>Platforms</h2>
    <div class="container-grid">
        <PlatformCard :key='platform.id' v-for="platform in platforms"  :platform='platform' @click='selectPlatform(platform.id)' />
    </div>
</template>

<script>
import axios from 'axios'
import PlatformCard from '../components/PlatformCard.vue'
const API_KEY = process.env.VUE_APP_RAWG_KEY

export default {
    name:'ViewPlatforms',
    components: {
        PlatformCard
    },
    data: () => ({
        platforms: []
    }),
    mounted: function() {
        this.getPlaforms()
    },
    methods: {
        async getPlaforms() {
            const res = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
            this.platforms = res.data.results
        },
        selectPlatform(platformId) {
            this.$router.push(`/platform/details/${platformId}`)
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
}
</style>