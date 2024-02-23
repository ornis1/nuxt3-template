import { breakpointsTailwind } from '@vueuse/core'

export type Breakpoints = {
  sm: number
  md: number
  lg: number
  xl: number
  '2xl': number
}

/** Переменная для хранения точек остановок. Использовать только её во всём проекте! Она уже подключена в хуке useBreakpoints и tailwind.config.ts */
export const breakpoints: Breakpoints = breakpointsTailwind
