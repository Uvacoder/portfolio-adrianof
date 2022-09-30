import { Config } from 'tailwindcss'
import formKitTailwind from '@formkit/themes/tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './formkit.config.ts'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), formKitTailwind]
}
