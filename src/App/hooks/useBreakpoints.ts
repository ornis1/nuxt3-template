import { useBreakpoints as useVueuseBreakpoints } from '@vueuse/core'
import { breakpoints } from '..'

export const useBreakpoints = () => {
  const bp = useVueuseBreakpoints(breakpoints)

  const isMobile = computed(() => bp.smaller('md').value)
  const isTablet = computed(
    () =>
      !isMobile.value &&
      bp.greaterOrEqual('md').value &&
      bp.smaller('lg').value,
  )
  const isDesktop = computed(
    () => !isTablet.value && bp.greaterOrEqual('lg').value,
  )

  return {
    ...bp,
    isMobile,
    isTablet,
    isDesktop,
  }
}
