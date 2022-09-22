<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-gray-400"
          :class="item.customClass || 'hover:text-blue-500'" target="_blank" rel=noopener>
          <span class="sr-only">{{ item.name }}</span>
          <Icon :name="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0 text-black">
        <p class="text-base text-center md:text-left">Created by</p>
        <p class="text-center text-base ">&copy; {{ new Date().getFullYear() }} Leandro Frederico, Inc. All
          rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface NavigationItem {
  name: string,
  href: string,
  icon: string,
  customClass?: string
}

type Navigation = NavigationItem[]

const navigation: Navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/adriano.frederico',
    icon: 'fa6-brands:facebook'
  },
  {
    name: 'Instagram',
    customClass: 'hover:text-pink-500',
    href: 'https://www.instagram.com/adriano.frederico/',
    icon: 'fa6-brands:instagram'
  }
]
</script>