<template>
    <div class="footer w-full pt-12 bg-white flex flex-col justify-center items-center">
        <div class="partner-block flex flex-col justify-center items-center lg:w-full">
            <div class="icon-title-block flex flex-row justify-center items-center mb-12">
              <h3 class="highlight-text text-center text-6xl font-din font-bold">Yhteistyössä</h3>
            </div>
            <div class="logo-wrapper flex flex-col lg:flex-row justify-center items-center w-1/2 lg:w-10/12 lg:flex-wrap lg:space-x-8">
              <SponsorImage sponsorLink="https://kuosec.fi" imageUrl="/img/kuosec_logo.png"/>
              <SponsorImage sponsorLink="https://disobey.fi" imageUrl="/img/disobey.png"/>
              <SponsorImage sponsorLink="https://hacklab.fi" imageUrl="/img/hacklab_fi_logo.png"/>
              <SponsorImage sponsorLink="https://fuug.fi" imageUrl="/img/fuug.svg"/>
              <SponsorImage sponsorLink="https://savondiesel.fi" imageUrl="/img/savon-diesellogo2017.png"/>
              <SponsorImage classes="p-4" styles="background-color: #000065;" sponsorLink="https://www.blc.fi/turva/yhteystiedot/kuopio" imageUrl="/img/logo-blc-turva.svg"/>
              <SponsorImage styles="background-color: #1b2935;" sponsorLink="https://va-varuste.fi" imageUrl="/img/va-logo.svg"/>
              <SponsorImage sponsorLink="https://www.kuopio.fi/" imageUrl="/img/kuopio_logo.svg"/>
            </div>
        </div>
        <NuxtLink to="/privacy" class="privacy-link p-8">Rekisteri- ja tietoturvaseloste</NuxtLink>
        <div id="contact" class="bg-black py-12 w-full flex flex-col justify-center items-center">
          <h1 v-if="footerContent" class="text-3xl lg:text-6xl pb-4">{{ footerContent.title }}</h1>
          <p v-if="footerContent" class="text-2xl">{{ footerContent.footer_org }}</p>
          <p v-if="footerContent" class="text-2xl">{{ footerContent.footer_address }}</p>
          <UButton class="email-button text-black text-4xl" v-if="!isClicked && footerContent" @click="decryptEmail()">{{ footerContent.footerButton }}</UButton>
          <a v-else id="email" :href=decryptedEmailLink class="text-white">{{decryptedEmail}}</a>
          <p class="text-white" v-if="footerContent">{{ footerContent.copyright }}</p>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAsyncData, useRuntimeConfig } from '#app';

const { data: footerContent } = await useAsyncData('footer', () => {
  return queryCollection('components')
  .where('stem', '=', 'components/footer')
  .first()
})

const crypto = globalThis.crypto;
const runtimeConfig = useRuntimeConfig()

const encryptedEmail = { 
  iv: '6188033aef271e1fbffb3ff7b913b574',
  cipher: 'u5MukoGmguFPhFpYXAQE1VyUI5IhtLUEEUPqSE6rSJs=' 
};
let decryptedEmail = ref("");
let decryptedEmailLink = ref("");
let isClicked = ref(false);

async function decryptEmail() {
  try {
    let key = runtimeConfig.public.antispamDecryptKey;
    // Prepare key and utility functions
    let enc = new TextEncoder();
    let rawKey = enc.encode(key);
    let fromHex = (hexString: string) => new Uint8Array(hexString.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));
    let keyObj = await crypto.subtle.importKey(
      'raw',
      rawKey,
      'AES-CBC',
      true,
      ['decrypt']
    );

    let fromBase64 = (base64String: string) => Uint8Array.from(atob(base64String), c => c.charCodeAt(0));
    let ciphertext = fromBase64(encryptedEmail.cipher);
    let rawIV = fromHex(encryptedEmail.iv);
    const plaintext = await crypto.subtle.decrypt(
      {
        name: 'AES-CBC',
        iv: rawIV,
      },
      keyObj,
      ciphertext
    );
    
    const dec = new TextDecoder();
    decryptedEmail.value = dec.decode(plaintext); // Update reactive state
    decryptedEmailLink.value = "mailto:" + dec.decode(plaintext);

    isClicked.value = true;
  } catch (error) {
      console.log("Error decrypting email:", error)
  }
};

</script>

<style lang="scss" scoped>
.hacklab-title {
    font-family: 'Alte DIN 1451 Mittelschrift Regular';
    font-weight: 900;
    font-size: 4rem;
    color: #f2da00;
}

.highlight-text {
    background: linear-gradient(180deg, rgba(77,135,103,0.86), rgba(84,191,128,0.9));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    padding-bottom: 4px;
}

.privacy-link:hover {
  color: #f2da00;
}

.email-button {
  background-color: #fed629
}
</style>