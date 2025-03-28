<template>
    <div class="header w-full">
        <div class="w-full flex flex-row px-8 pt-8 space-between lg:flex lg:justify-center">
            <div class="title-info-block w-full lg:place-self-center flex flex-row items-center lg:self-start lg:w-1/4 lg:-ml-8">
                <SponsorImage classes="max-h-52" sponsorLink="https://halko.fi" imageUrl="/img/halko_logo.png"/>
            </div>
            <NavBar class="navbar flex-none lg:place-self-center lg:self-start lg:w-1/4 lg:pl-10"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data: headerContent } = await useAsyncData('header', () => {
  return queryCollection('components')
  .where('stem', '=', 'components/header')
  .first()
})
</script>

<style lang="scss" scoped>
.hacklab-title {
    font-family: 'Alte DIN 1451 Mittelschrift Regular';
    font-weight: 900;
    font-size: 4rem;
    color: #f2da00;
}

.info-box {
    font-size: 1.4rem;
}

</style>