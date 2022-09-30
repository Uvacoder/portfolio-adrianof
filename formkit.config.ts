import { pt } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'

const config: DefaultConfigOptions = {
  locales: { pt },
  locale: 'pt',
  config: {
    classes: {
      outer:
        'mb-5 relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600',
      label:
        'absolute -top-3 left-2 -mt-px inline-block bg-white px-1 text-xs sm:text-sm font-medium text-gray-900',
      inner: '',
      input:
        'block w-full border-0 p-1 text-gray-900 sm:text-lg placeholder-gray-500 focus:ring-0',
      help: 'text-xs text-blue-500',
      message:
        'absolute -bottom-2 right-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-red-500'
    }
  }
}

export default config
