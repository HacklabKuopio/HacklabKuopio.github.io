<template>
    <div class="relative font-din">
      <div class="container max-w-200 mx-auto py-10 px-4 bg-black">
        <h1 class="text-white">{{ error?.message }}</h1>
        Segmentation fault (core dumped)
        <br>
        <button @click="handleError">
          Clear error
        </button>
        <br>
        <NuxtLink class="text-primary" to="/">
          Navigate home
        </NuxtLink>
      </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>