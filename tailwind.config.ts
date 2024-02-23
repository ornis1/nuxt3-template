import type { Config } from 'tailwindcss'
import { breakpoints } from './src/App'

export default {
  content: [
    './modules/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      screens: {
        sm: `${breakpoints.sm}px`,
        md: `${breakpoints.md}px`,
        lg: `${breakpoints.lg}px`,
        xl: `${breakpoints.xl}px`,
        '2xl': `${breakpoints['2xl']}px`,
      },
    },
  },
  plugins: [],
} satisfies Config
