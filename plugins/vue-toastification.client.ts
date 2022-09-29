import Toast, { PluginOptions } from "vue-toastification"

const options: PluginOptions = {
  transition: "Vue-Toastification__bounce",
  newestOnTop: true,
  draggable: true,
  draggablePercent: 0.4,
  closeOnClick: true,
  hideProgressBar: true,
  closeButton: false,
  timeout: 4000
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options)
})
