<template>
    <NuxtLink :to=sponsorLink>
        <img class="max-h-32 mb-4" :class="classes" :style="styles" :src=imageUrl>
    </NuxtLink>

</template>

<script setup lang="ts">
  const props = defineProps({
      imageUrl: String,
      sponsorLink: String,
      classes: String,
      styles: String,
  })

</script>

<style lang="scss" scoped>
</style>