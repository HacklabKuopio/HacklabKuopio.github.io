<template>
    <div class="page">
        <div class="main pb-8 px-4 pt-64 flex flex-col">
            <h1 class="text-center text-white text-3xl lg:text-6xl self-center justify-self-center pb-8" v-if="orgPageContent">{{ orgPageContent.title }}</h1>
            <div class="wrap px-6 py-8 flex flex-col items-start rounded-3xl bg-white justify-self-center self-center lg:w-1/2">
              <ContentRenderer class="organization-content text-wrap text-gray-700 px-6 py-8 flex flex-col items-start rounded-3xl bg-white" :value="orgPageContent" />
            </div>
        </div>
    </div>

</template>
  
<script lang="ts" setup>
  const { data: orgPageContent } = await useAsyncData("organization", () => {
    return queryCollection("pagesMd").path('/pages/organization').first()
  })
</script>

<style lang="scss" scoped>
  .main {
    background-image: linear-gradient(145deg,rgba(46,93,104,0.7),rgba(77,135,103,0.86),rgba(84,191,128,0.9)),linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4));
    background-size: auto,auto,cover;
    background-position: 50% 50%;
  }

  h1, h2 p {
      letter-spacing: 1px;
      word-break: break-word;
  }
</style>

<style lang="scss">
  div.organization-content h3:not(:first-child) {
    margin-top: 20px;
    color: black;
  }
</style>