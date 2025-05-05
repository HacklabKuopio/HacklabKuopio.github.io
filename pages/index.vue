<template>
  <div class="page">
    <div class="main-block px-8 pt-64 pb-64">
      <div class="main-wrap px-4 flex flex-col lg:flex-row lg:flex lg:justify-center pt-16">
        <div class="title-block lg:mr-12 lg:place-self-center lg:self-start lg:w-1/4">

          <h1 v-if="indexPageContent?.site_title" class="hacklab-title text-white text-5xl font-din font-black">
            {{ indexPageContent.site_title }}
          </h1>
          <h2 class="hacklab-title pt-4">{{ indexPageContent?.site_subtitle }}</h2>
          <div class="info-block mt-4">
            <div class="place-block text-black bg-white mb-6 p-4 inline-flex">
              <p class="font-black">Osoite: <span class="font-normal">{{ indexPageContent?.address }}</span></p>
            </div>
            <br>
            <div class="times-block text-black mb-8 bg-white p-4 inline-flex">
              <p class="font-black">Aukioloajat: <span class="font-normal">{{ indexPageContent?.opening_times }}</span></p>
            </div>
          </div>
        </div>
        <div class="intro lg:place-self-center lg:self-start lg:w-1/4 p-8">
          <p class="mb-16" v-for="(introBlock, key) of indexPageContent?.intro_content">{{ introBlock.text_row }}</p>
          <p class="mb-16 font-black">{{ indexPageContent?.registration }}</p>
          <p class="text-white">Löydät meidät Discordista: <NuxtLink :to=indexPageContent?.discord_link class="text-yellow-300 privacy-link p-8">{{ indexPageContent?.discord_link }}</NuxtLink></p>
          <p class="text-white">Facebookista: <NuxtLink :to=indexPageContent?.facebook_link class="text-yellow-300 privacy-link p-8">{{ indexPageContent?.facebook_link }}</NuxtLink></p>
          <p class="text-white">Instagramista: <NuxtLink :to=indexPageContent?.instagram_link class="text-yellow-300 privacy-link p-8">{{ indexPageContent?.instagram_link }}</NuxtLink></p>
        </div>
      </div>
      <div class="bottom-content flex justify-center">
        <div class="content mt-12 lg:place-self-center lg:self-center lg:w-1/2 p-8">
          <p class="text-center text-white self-center justify-self-center" v-for="(mainBlock, key) of indexPageContent?.main_content">{{ mainBlock.text_row }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
const { data: indexPageContent } = await useAsyncData('index', () => {
  return queryCollection('pages')
  .where('stem', '=', 'pages/index')
  .first()
})

</script>

<style lang="scss" scoped>
h1.hacklab-title {
  letter-spacing: 1.2px;
  font-size: 3rem;
}

h2.hacklab-title {
  font-family: 'Alte DIN 1451 Mittelschrift Regular';
  color: #f2da00;
  font-weight: 300;
  font-size: 2rem;
}

.register-btn {
  font-family: 'Alte DIN 1451 Mittelschrift Regular';
  font-size: 1.8rem;
  font-weight: 900;
  border-radius: 2em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-width: 3px;
  border-right-width: 3px;
  border-bottom-width: 3px;
  border-left-width: 3px;
  border-top-color: #f2da00;
  border-right-color: #f2da00;
  border-bottom-color: #f2da00;
  border-left-color: #f2da00;
  background-color: #f2da00;
  border: 1px solid #f2da00;
  color: #191919;
  padding: 10px 16px;
}

.container {
  display: flex;
  justify-content: space-between;
}

.main-block {
  background-image: linear-gradient(180deg, hsla(0, 0%, 91%, 0.1) 0%, hsla(47, 17%, 90%, 0.1) 92%, hsla(49, 99%, 58%, 0.9) 100%), linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/img/hacklab-julkisivu.jpg");
  background-size: auto, auto, cover;
  background-position: 50% 50%;
}

.intro {
  background-color: rgba(7, 7, 7, 0.7);
  border-color: rgba(225, 188, 38, 0.8);
  border-width: 5px;
  border-radius: 0.25rem;
}

.info-block {
  word-break: break-word;
}

.content {
  background-color: rgba(7, 7, 7, 0.7);
  border-color: rgba(225, 188, 38, 0.8);
  border-width: 5px;
  border-radius: 0.25rem;
}

.brand-color-primary-yellow {
  color: #fed629;
}

.brand-color-light-dark-yellow {
  color: #f8ce2a;
}

.brand-color-secondary-yellow {
  color: #e1bc26;
}

.brand-color-bright-yellow {
  color: #f5ca2b;
}

.brand-color-brighter-yellow {
  color: #fecd34;
}

.brand-color-primary-black {
  color: #070707;
}


.brand-color-primary-green {
  color: #015548;
}

.brand-color-primary-gray {
  color: #a79f7a;
}

</style>