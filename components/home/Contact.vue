<template>
  <div id="contact" class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-100" />
    </div>
    <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
      <div class="bg-gray-100 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="mx-auto max-w-lg h-full flex flex-col">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contato</h2>
          <p class="mt-3 text-lg h-full leading-6 text-gray-500">Solicite um orçamento através do email, WhatsApp ou me ligue
            e mande suas dúvidas, responderei o mais breve possível.</p>
          <dl class="mt-8 text-base text-gray-500">
            <div class="mt-6">
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
          </dl>
        </div>
      </div>
      <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="mx-auto max-w-lg lg:max-w-none">
          <form action="#" method="POST" class="grid grid-cols-1 gap-y-6" @submit.prevent="sendEmail">
            <div v-for="input, i in formData" :key="input.name">
              <label :for="input.name" class="sr-only">Message</label>
              <input v-if="input.type === 'text'" :id="input.name" :name="input.name" :type="input.type"
                :autocomplete="input.autocomplete"
                class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                :placeholder="input.placeholder" v-model="formData[i].value" />
              <textarea v-if="input.type === 'textarea'" :id="input.name" :name="input.name" rows="4"
                class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                :placeholder="input.placeholder" v-model="formData[i].value" />
            </div>
            <div class="sm:flex sm:flex-row justify-between text-center sm:text-right">
              <button type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 mb-4 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
              <div class="text-gray-400 sm:max-w-sm">
                This site is protected by reCAPTCHA and the Google
                  <a class="link underline decoration-1 text-blue-400" href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a> and
                  <a class="link underline decoration-1 text-blue-400" href="https://policies.google.com/terms" target="_blank" rel="noopener">Terms of Service</a> apply.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useReCaptcha } from 'vue-recaptcha-v3'
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

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

const sendEmail = async () => {
  await recaptchaLoaded()
  const token = await executeRecaptcha('send_email')
  console.log(token)
  if (!token) {
    return
  }
  const data = {
    name: formData[0].value,
    email: formData[1].value,
    phone: formData[2].value,
    message: formData[3].value
  }
  const result = await $fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(data)
  })

  console.log('A ser implementado', result)
}

// export default {
//   setup() {
//     const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

//     const sendEmail = async () => {
//       await recaptchaLoaded()
//       const token = await executeRecaptcha('sendEmail')
//       console.log('A ser implementado', token)
//     }

//     return {
//       sendEmail
//     }
//   },
//   data() {
//     return {
//       formInputs: [
//         {
//           name: 'full-name',
//           placeholder: 'Nome completo',
//           autocomplete: 'name',
//           type: 'text'
//         },
//         {
//           name: 'email',
//           placeholder: 'Email',
//           autocomplete: 'email',
//           type: 'text'
//         },
//         {
//           name: 'phone',
//           placeholder: 'Telefone',
//           autocomplete: 'tel',
//           type: 'text'
//         },
//         {
//           name: 'message',
//           placeholder: 'Mensagem',
//           autocomplete: false,
//           type: 'textarea'
//         }
//       ],
//       formData: {}
//     }
//   }
// }

</script>