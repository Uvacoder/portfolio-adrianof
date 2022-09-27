<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
        <svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
          fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Popover>
          <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                <div class="flex w-full items-center justify-between md:w-auto">
                  <!-- <a href="#" class="brand"> -->
                  <Icon name="ri:home-2-line" class="brand h-8 w-auto sm:h-8" />
                  <!-- <span class="sr-only">Your Company</span>
                    <img alt="Your Company" class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" /> -->
                  <!-- </a> -->
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton
                      class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Abrir menu principal</span>
                      <Icon name="heroicons-outline:menu" class="h-6 w-6 text-indigo-600 hover:text-indigo-500"
                        aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}
                </a>
                <a href="#" @click.prevent="globals.isLoginModalOpen = true"
                  class="ml-auto font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  Área do Cliente
                </a>
              </div>
            </nav>
          </div>

          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus
              class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
              <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <Icon name="ri:home-2-line" class="brand h-8 w-auto sm:h-8" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Fechar menu principal</span>
                      <Icon name="heroicons-outline:x" class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="space-y-1 px-2 pt-2 pb-3">
                  <a v-for="item in navigation" :key="item.name" :href="item.href"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">{{
                    item.name }}</a>
                </div>
                <a href="#" @click.prevent="globals.isLoginModalOpen = true"
                  class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">
                  Área do Cliente
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Soluções em </span>
              <!-- {{ ' ' }} -->
              <span class="block text-indigo-600 xl:inline">Contabilidade</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Com mais de {{ new Date().getFullYear() - 1999 }} anos de experiência como contador, sou perito em
              previsão orçamental, análise de variância e elaboração de relatórios.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#contact"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Fazer
                  Orçamento</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <NuxtImg provider="cloudinary" src="v1663898075/adriano/adriano_frederico_y5lfam" format="webp" width="1023"
        height="682" alt="Adriano Frederico" />
    </div>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { useGlobalStore } from '@/stores/global'

const globals = useGlobalStore()

const logOnLoad = (e) => {
  console.log('loaded', e)
}
const navigation = [
  { name: 'Serviços', href: '#features' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contact' },
]

</script>
  