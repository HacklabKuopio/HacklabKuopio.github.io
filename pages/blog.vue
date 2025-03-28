<template>
    <div class="page">
        <div class="main pb-8 px-4 pt-64">
            <div class="wrap px-6 py-8 flex flex-col items-start rounded-3xl bg-white">
                <h1 v-if="blogPageContent?.site_title" class="hacklab-title text-black text-5xl font-din font-black">
                    {{ blogPageContent.site_title }}
                </h1>
            </div>
        </div>
    </div>

  </template>
  
<script lang="ts" setup>
    const { data: blogPageContent } = await useAsyncData('blog', () => {
      return queryCollection('pages')
      .where('stem', '=', 'pages/blog')
      .first()
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