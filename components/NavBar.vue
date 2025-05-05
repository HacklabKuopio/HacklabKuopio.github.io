<template>
  <nav class="header flex justify-center items-center lg:justify-start">
    <div class="navbar-wrap flex-row justify-self-end hidden md:flex">
      <div class="navbar text-white flex flex-row space-x-16 pr-8 no-underline">
        <NuxtLink class="nav-link text-white text-4xl font-din font-bold py-2 no-underline" to="/">Etusivu</NuxtLink>
        <NuxtLink class="nav-link text-white text-4xl font-din font-bold py-2 no-underline" to="/blog">Blogi</NuxtLink>
        <NuxtLink class="nav-link text-white text-4xl font-din font-bold py-2 no-underline" to="/member">Jäsenpalvelu</NuxtLink>
        <NuxtLink class="nav-link text-white text-4xl font-din font-bold py-2 no-underline" to="/organization">Yhdistys</NuxtLink>
      </div>
    </div>
    <div class="navbar-mobile-wrap flex md:hidden" :class="{ 'is-active': isActive }">
      <div class="navbar-mobile absolute z-0 w-full flex flex-col justify-start top-64 left-0 no-underline md:hidden">
        <NuxtLink class="nav-link-mobile w-full text-white text-4xl font-din font-bold pl-12 py-6" to="/">Etusivu</NuxtLink>
        <NuxtLink class="nav-link-mobile w-full text-white text-4xl font-din font-bold pl-12 py-6" to="/blog">Blogi</NuxtLink>
        <NuxtLink class="nav-link-mobile w-full text-white text-4xl font-din font-bold pl-12 py-6" to="/member">Jäsenpalvelu</NuxtLink>
        <NuxtLink class="nav-link-mobile w-full text-white text-4xl font-din font-bold pl-12 py-6" to="/organization">Yhdistys</NuxtLink>
      </div>
    </div>
    <div class="mobile-toggle p-10 mr-16 absolute flex md:hidden top-20" @click="toggleNavbar">
      <Icon class="text-7xl hacklab-yellow" :name="toggleIcon" />
    </div>
  </nav>
</template>
  
  <script>
  export default {
    props: {
      logoUrl: {
        type: String,
        required: false
      },
    },
    data() {
      return {
        isActive: false,
      };
    },
    created() {
    },
    methods: {
      toggleNavbar() {
        this.isActive = !this.isActive;
      },
    },
    computed: {
      toggleIcon() {
        return this.isActive ? 'fa6-solid:x' : 'fa6-solid:bars';
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
    .navbar-mobile-wrap {
      display: none;
    }
    .navbar-mobile-wrap.is-active {
      display: block;
    }

    .navbar-mobile {
      background-color: #3f3f3f
    }

    .hacklab-yellow {
      color: #f2da00;
    }

    .nav-link:hover {
      border-bottom-color: #f2da00;
      border-bottom-width: 2px;
      border-bottom-style: solid;
    }

    .nav-link-mobile:hover {
      background-color: #4f4f4f;
      border-bottom-color: #f2da00;
      border-bottom-width: 2px;
      border-bottom-style: solid;
    }

    .mobile-toggle {
      z-index: 9000;
    }
  </style>
  