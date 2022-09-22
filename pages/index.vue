<script setup lang="ts">
// import { useTestStore } from '@/stores/global'
useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  title: 'Adriano Frederico',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'AF - Soluções em Contabilidade' }
  ]
})

// const testStore = useTestStore()
</script>

<template>
  <div class="container max-w-screen-2xl mx-auto">
    <HomeHero />
    <LazyHomeFeatures />
    <LazyHomeFaq />
    <LazyHomeTestimonials />
    <LazyHomeContact class=""/>
    <LazyHomeFooter />
  </div>
</template>

