import { useWindowDimensions } from '../window-dimensions'

export const useBreakpoints = () => {
  const { width } = useWindowDimensions()

  return {
    isSmallMobile: width <= 425,
    isMobile: width <= 768,
    isTablet: width <= 1024,
    isDesktop: width >= 1366,
  }
}
