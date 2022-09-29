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
          <form name="contact-form" action="#" method="POST" class="grid grid-cols-1 gap-y-6"
            @submit.prevent="sendEmail" data-netlify="true" netlify-honeypot="bot-field">
            <div v-for="input, i in formData" :key="input.name">
              <p class="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <label :for="input.name" class="sr-only">Message</label>
              <input v-if="input.type === 'text'" :id="input.name" :name="input.name" :type="input.type"
                :autocomplete="(input.autocomplete as string)"
                class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                :placeholder="input.placeholder" v-model="formData[i].value" />
              <textarea v-if="input.type === 'textarea'" :id="input.name" :name="input.name" rows="4"
                class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                :placeholder="input.placeholder" v-model="formData[i].value" />
            </div>
            <div class="sm:flex sm:flex-row justify-between text-center sm:text-right">
              <button type="submit" :disabled="isLoading"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 w-28 mb-4 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <Icon v-if="isLoading" name="eos-icons:bubble-loading" class="h-6 w-6" aria-hidden="true" />
                <span v-else>Submit</span>
              </button>
              <div class="text-gray-400 sm:max-w-sm">
                This site is protected by reCAPTCHA and the Google
                <a class="link underline decoration-1 text-blue-400" href="https://policies.google.com/privacy"
                  target="_blank" rel="noopener">Privacy Policy</a> and
                <a class="link underline decoration-1 text-blue-400" href="https://policies.google.com/terms"
                  target="_blank" rel="noopener">Terms of Service</a> apply.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios"
import { useReCaptcha } from 'vue-recaptcha-v3'
import { useToast } from "vue-toastification"

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
const toast = useToast()

const isLoading = ref(false)
const formData = reactive([
  {
    name: 'full-name',
    placeholder: 'Nome completo',
    autocomplete: 'name',
    type: 'text',
    value: null
  },
  {
    name: 'email',
    placeholder: 'Email',
    autocomplete: 'email',
    type: 'text',
    value: null
  },
  {
    name: 'phone',
    placeholder: 'Telefone',
    autocomplete: 'tel',
    type: 'text',
    value: null
  },
  {
    name: 'message',
    placeholder: 'Mensagem',
    autocomplete: false,
    type: 'textarea',
    value: null
  }
])

const encode = (data) => {
  return Object.keys(data)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join("&");
}

const sendEmail = async () => {
  isLoading.value = true
  await recaptchaLoaded()
  const token = await executeRecaptcha('send_email')
  if (!token) {
    return
  }
  const data = {
    name: formData[0].value,
    email: formData[1].value,
    phone: formData[2].value,
    message: formData[3].value
  }
  const formDataEncoded = encode({
    "form-name": "contact-form",
    ...data
  })
  const axiosConfig = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  }
  const res = await axios.post("/", formDataEncoded, axiosConfig)
  if (res.status === 200) {
    toast.success('Mensagem enviada com sucesso! 😁')
  } else {
    toast.error('Algo deu errado 😥, por favor tente novamente em alguns minutos...')
  }
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