<script setup lang="ts">
import { $URL } from 'ufo';

const social = {
  image: 'https://res.cloudinary.com/adrianofrederico/image/upload/w_1200,h_630,c_fill/adriano/adriano_frederico_y5lfam.webp',
  title: 'Adriano Frederico - Soluções em Contabilidade',
  description: 'Melhores soluções em contabilidade para o seu empreendimento!'
}
useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  title: 'Adriano Frederico',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'AF - Soluções em Contabilidade' },
    { property: "og:url", content: 'http://adriano-frederico.netlify.app/' },
    { property: "og:type", content: 'website' },
    { property: "og:title", content: social.title },
    { property: "og:description", content: social.description },
    { property: "og:image", content: social.image },
    { property: "twitter:card", content: 'summary_large_image' },
    { property: "twitter:title", content: social.title },
    { property: "twitter:description", content: social.description },
    { property: "twitter:image", content: social.image }
  ]
})
</script>

<template>
  <div>
    <div class="container max-w-screen-2xl mx-auto ">
      <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 my-4" role="alert">
        <p class="font-bold">Site Em Desenvolvimento</p>
        <p class="text-sm">Algumas Funcionalidades podem não estar funcionando.</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
