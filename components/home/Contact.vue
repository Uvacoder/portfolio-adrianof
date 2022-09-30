<template>
  <div id="contact" class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-100" />
    </div>
    <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
      <div class="bg-gray-100 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="mx-auto max-w-lg h-full flex flex-col">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contato</h2>
          <p class="mt-3 text-lg h-full leading-6 text-gray-500">Solicite um orçamento através do email, WhatsApp ou me
            ligue
            e mande suas dúvidas, responderei o mais breve possível.</p>
          <dl class="mt-8 text-base text-gray-500 sm:flex sm:justify-between">
            <div class="flex flex-col justify-center">
              <div class="">
                <dt class="sr-only">Numero de Telefone</dt>
                <dd>
                  <a href="https://wa.me/5511984282844" class="flex" target="_blank">
                    <Icon name="fa-brands:whatsapp" class="h-6 w-6 flex-shrink-0 text-green-400" aria-hidden="true" />
                    <span class="ml-3">+55 (11) 98428-2844</span>
                  </a>
                </dd>
              </div>
              <div class="mt-3">
                <dt class="sr-only">Email</dt>
                <dd>
                  <a href="mailto:adriano.frederico@gmail.com" class="flex" target="_blank">
                    <Icon name="heroicons-outline:envelope" class="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true" />
                    <span class="ml-3">adriano.frederico@gmail.com</span>
                  </a>
                </dd>
              </div>
            </div>
            <div class="flex justify-center space-x-6 sm:space-x-0 mt-3 sm:mx-auto sm:mt-0 sm:flex-col ">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-gray-400"
                :class="item.customClass || 'hover:text-blue-500'" target="_blank" rel="noopener">
                <span class="sr-only">{{ item.name }}</span>
                <Icon :name="item.icon" class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </dl>
        </div>
      </div>
      <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="mx-auto max-w-lg lg:max-w-none">
          <FormKit id="contact-form" name="Formulário de contato" type="form" :actions="false"
            :incomplete-message="false" @submit="sendEmail" :disabled="isLoading" data-netlify="true"
            netlify-honeypot="bot-field">
            <template #default="{ state: { valid } }">
              <p class="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <FormKit type="text" name="name" label="* Nome" placeholder="Seu nome" validation="required" />
              <FormKit type="email" name="email" label="* Email" placeholder="email@exemplo.com"
                validation="required|email" />
              <FormKit type="tel" name="phone" label="Telefone" placeholder="(xx) xxxxx - xxxx" />
              <FormKit type="textarea" name="message" label="* Mensagem" placeholder="Digite sua mensagem..."
                validation="required" rows="4" />

              <div class="sm:flex sm:flex-row justify-between text-center sm:text-right">
                <FormKit type="submit" :label="isLoading ? ' ': 'Enviar'" :disabled="!valid || isLoading" :classes="{
                  outer: '$reset mb-5 w-28 h-14',
                  input: 'w-full flex justify-center items-center rounded-md bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 disabled:bg-gray-400' 
                }">
                  <template #suffixIcon>
                    <Icon v-if="isLoading" :name="'eos-icons:bubble-loading'" class="h-6 w-6 text-lg" aria-hidden="true" />
                  </template>
                </FormKit>

                <SharedRecaptchaPrivacyAndTerms />
              </div>

            </template>
          </FormKit>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios"
import { useReCaptcha } from 'vue-recaptcha-v3'
import { useToast } from "vue-toastification"
import { reset as resetForm } from '@formkit/core'

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
const toast = useToast()

const isLoading = ref(false)

const encode = (data) => {
  return Object.keys(data)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join("&");
}

const sendEmail = async (data) => {
  isLoading.value = true
  await recaptchaLoaded()
  const token = await executeRecaptcha('send_email')
  if (!token) {
    return
  }
  const formDataEncoded = encode({
    "form-name": "Formulário de contato",
    ...data
  })
  const axiosConfig = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  }
  const res = await axios.post("/", formDataEncoded, axiosConfig)
  await useSleep(2000)
  if (res.status === 200) {
    toast.success('Mensagem enviada com sucesso! 😁')
  } else {
    toast.error('Algo deu errado 😥, por favor tente novamente em alguns minutos...')
  }
  resetForm('contact-form')
  isLoading.value = false
}

interface NavigationItem {
  name: string,
  href: string,
  icon: string,
  customClass?: string
}

const navigation: NavigationItem[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/adriano.frederico',
    icon: 'fa6-brands:facebook'
  },
  {
    name: 'Instagram',
    customClass: 'sm:mt-3 hover:text-pink-500',
    href: 'https://www.instagram.com/adriano.frederico',
    icon: 'fa6-brands:instagram'
  }
]

</script>