<template>
  <TransitionRoot as="template" :show="globals.isLoginModalOpen">
    <Dialog as="div" class="relative z-10" @close="globals.isLoginModalOpen = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items- sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div class="bg-white p-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8">
                <div class="mx-auto max-w-lg lg:max-w-none">
                  <form action="#" method="POST" class="grid grid-cols-1 gap-y-6" @submit.prevent>
                    <div v-for="input in formInputs" :key="input.name"
                      class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                      <label :for="input.name"
                        class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900">{{input.placeholder}}</label>
                      <input :type="input.name" :name="input.name" :id="input.name" :autocomplete="input.name"
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
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useGlobalStore } from '@/stores/global'

const globals = useGlobalStore()

const formInputs = [
  {
    name: 'email',
    placeholder: 'Email',
    autocomplete: 'email',
    type: 'text'
  },
  {
    name: 'password',
    placeholder: 'Senha',
    autocomplete: false,
    type: 'password'
  }
]
</script>
