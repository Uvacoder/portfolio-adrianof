<template>
  <UIModal :isOpen="globals.isLoginModalOpen" @on-close="globals.isLoginModalOpen = false">
    <div class="bg-white p-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8">
      <div class="mx-auto max-w-lg lg:max-w-none">
        <FormKit type="form" :actions="false" :incomplete-message="false" @submit="tryLogin" :disabled="isLoading">
          <template #default="{ state: { valid } }">
            <FormKit type="email" name="email" label="Email" validation="required|email" />
            <FormKit type="password" name="password" label="Senha" validation="required|password" />
            <FormKit type="submit" label="Login" :disabled="!valid || isLoading" :classes="{
              outer: '$reset mb-5',
              input: 'w-full flex justify-center items-center rounded-md bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 disabled:bg-gray-400' 
            }">
              <template #suffixIcon>
                <Icon :name="isLoading ? 'eos-icons:bubble-loading' : 'material-symbols:login'" class="h-6 w-6 ml-2"
                  aria-hidden="true" />
              </template>
            </FormKit>
            <FormKit type="button" label="Fechar" @click="globals.isLoginModalOpen = false" :classes="{
              outer: '$reset',
              input: 'w-full flex justify-center items-center rounded-md bg-red-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-red-700'
            }">
              <template #suffixIcon>
                <Icon name="line-md:close-circle" class="h-6 w-6 ml-2" aria-hidden="true" />
              </template>
            </FormKit>
          </template>
        </FormKit>
      </div>
    </div>
  </UIModal>
</template>

<script setup>
import { useGlobalStore } from '@/stores/global'
import { useToast } from "vue-toastification"
import { event } from 'vue-gtag'

const globals = useGlobalStore()
const toast = useToast()
const isLoading = ref(false)

const tryLogin = async (data) => {
  isLoading.value = true
  console.log(data)
  await useSleep(2000)
  if (data.email === 'adriano.frederico@gmail.com') {
    toast.warning('Carai Dri... calma neh!?!? Nao ta pronto ainda pô, sai fora!!! kkkkk')
  } else {
    toast.error('Usuário não cadastrado')
  }
  event('login', {
    userEmail: data.email
  })
  isLoading.value = false
}
</script>
