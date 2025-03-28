<template>
    <div class="page">
        <div class="main pb-8 px-4 pt-64 flex flex-col">
            <h1 class="text-center text-white text-3xl lg:text-6xl self-center justify-self-center pb-8" v-if="privacyPageContent">{{ privacyPageContent?.page_title }}</h1>
            <div class="wrap px-6 py-8 flex flex-col items-start rounded-3xl bg-white justify-self-center self-center lg:w-1/2">
                <div class="clause-block self-center justify-self-center text-center pb-8" v-for="(clauseBlock, key) of privacyPageContent?.clauses">
                    <p class="text-center text-black self-center justify-self-center">{{ clauseBlock.clause_title }}</p>
                    <p class="text-center text-black self-center justify-self-center">{{ clauseBlock.clause_content }}</p>
                    <div v-if="clauseBlock.clause_email">
                        <UButton class="email-button text-4xl text-black" v-if="!isClicked && privacyPageContent" @click="decryptEmail()">{{ privacyPageContent.button_text }}</UButton>
                        <a v-else id="email" :href=decryptedEmailLink class="text-black">{{decryptedEmail}}</a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

  </template>
  
  <script setup lang="ts">
    const crypto = globalThis.crypto;
    const runtimeConfig = useRuntimeConfig()

    const encryptedEmail = { 
        iv: 'b49eaace24f6819d65dc8c12c3f2ef35',
        cipher: 'JhACj6ka20S7pR8yIl6Aa4TSs90PvCEH3gWF1USLPSM=' 
    };
    let decryptedEmail = ref("");
    let decryptedEmailLink = ref("");
    let isClicked = ref(false);
    
    const { data: privacyPageContent } = await useAsyncData('privacy', () => {
        return queryCollection('pages')
        .where('stem', '=', 'pages/privacy')
        .first()
    })

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