<template>
  <UIModal :isOpen="globals.isLoginModalOpen" @on-close="globals.isLoginModalOpen = false">
    <div class="bg-white p-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8">
      <div class="mx-auto max-w-lg lg:max-w-none">
        <form action="#" method="POST" class="grid grid-cols-1 gap-y-6" @submit.prevent>
          <div v-for="input in formInputs" :key="input.name"
            class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
            <label :for="input.name"
              class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900">{{input.placeholder}}</label>
            <input :id="input.id" :type="input.name" :name="input.name" :autocomplete="input.name"
              class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              :placeholder="input.placeholder" />
          </div>

          <button type="submit"
            class="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Log In
          </button>

          <button @click="globals.isLoginModalOpen = false"
            class="w-full inline-flex justify-center rounded-md border border-transparent bg-red-600  py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Fechar
          </button>
        </form>
      </div>
    </div>
  </UIModal>
</template>

<script setup>
import { useGlobalStore } from '@/stores/global'

const globals = useGlobalStore()

const formInputs = [
  {
    name: 'email',
    placeholder: 'Email',
    autocomplete: 'email',
    type: 'text',
    id: 'login-email'
  },
  {
    name: 'password',
    placeholder: 'Senha',
    autocomplete: false,
    type: 'password',
    id: 'login-password'
  }
]
</script>
