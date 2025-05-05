<template>
    <div>
        <Header class="header"/>
        
        <div class="content-slot">
          <slot />
        </div>
        <Footer class="footer"/>
    </div>
</template>
  
<style lang="scss" scoped>
  .header {
    position: absolute;
    top: 0;
  }
</style>

<style>

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 62.5%; /* Makes rem calculation easier. 1rem = 10px */
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #FFFFFF;
  width: 100%;
}

body {
  font-size: 1.6rem;
  width: 100%;
  font-family: "Alte DIN 1451 Mittelschrift Regular";
  color: white;
}

a {
  text-decoration: none;
  color: black;
}

</style>
