<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="platform.image_background" />
    </div>
    <div class="info-wrapper flex-col">
      <h3>{{platform.name}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlatformCard',
    props: {
      platform: {}
    }
  }
</script>
