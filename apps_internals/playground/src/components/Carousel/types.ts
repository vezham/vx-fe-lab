import { ReactNode, useEffect, useMemo, useState } from 'react'

import { ReactRef, useDOMRef } from '@vezham/react-utils'
// Adjust path as needed
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { ImageCard } from '../../components/Image'
import { tvProps, tvSlots, tva } from './variant'

interface CarouselImage {
  id: string
  src: string | ReactNode
  alt: string
}

interface Props extends tvProps, HTMLHeroUIProps<'section'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  images?: CarouselImage[]
  autoPlay?: boolean
  autoPlayInterval?: number
  maxIndicators?: number
  cardWidth?: number
  sideScale?: number
  sideOpacity?: number
  containerHeight?: number
  onSlideChange?: (index: number) => void
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    images = [],
    autoPlay = true,
    autoPlayInterval = 2000,
    maxIndicators = 5,
    cardWidth = 500,
    sideScale = 0.88,
    sideOpacity = 0.6,
    containerHeight = 300,
    onSlideChange,
    ...otherProps
  } = props

  const [activeIndex, setActiveIndex] = useState(0)
  const totalImages = images.length

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % totalImages
    setActiveIndex(nextIndex)
    onSlideChange?.(nextIndex)
  }

  const prevSlide = () => {
    const prevIndex = (activeIndex - 1 + totalImages) % totalImages
    setActiveIndex(prevIndex)
    onSlideChange?.(prevIndex)
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    onSlideChange?.(index)
  }

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || totalImages <= 1) return

    const timer = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(timer)
  }, [activeIndex, autoPlay, autoPlayInterval, totalImages])

  const indicatorsCount = useMemo(() => {
    return Math.min(totalImages, maxIndicators)
  }, [totalImages, maxIndicators])

  const Component = as || 'section'
  const domRef = useDOMRef(ref)
  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getDesktopContainerProps: PropGetter = () => ({
    className: slots.desktop_container({
      class: classNames?.desktop_container
    }),
    style: { height: containerHeight }
  })

  const getMobileContainerProps: PropGetter = () => ({
    className: slots.mobile_container({ class: classNames?.mobile_container })
  })

  const getImageWrapperProps = (
    index: number,
    activeIndex: number,
    total: number
  ) => {
    const offset = index - activeIndex
    let transform = ''
    let zIndex = 10
    let opacity = sideOpacity

    if (offset === 0) {
      transform = `translateX(0) scale(1)`
      zIndex = 30
      opacity = 1
    } else if (offset === -1 || offset === total - 1) {
      transform = `translateX(-${cardWidth * 0.35}px) scale(${sideScale})`
      zIndex = 20
    } else if (offset === 1 || offset === -(total - 1)) {
      transform = `translateX(${cardWidth * 0.35}px) scale(${sideScale})`
      zIndex = 20
    } else {
      transform = `scale(0)`
      opacity = 0
      zIndex = 0
    }

    return {
      className: slots.image_wrapper({ class: classNames?.image_wrapper }),
      style: {
        transform,
        opacity,
        zIndex,
        left: '50%',
        marginLeft: `-${cardWidth / 2}px`,
        width: cardWidth
      }
    }
  }

  const getIndicatorsContainerProps: PropGetter = () => ({
    className: slots.indicators_container({
      class: classNames?.indicators_container
    })
  })

  const getIndicatorProps = (isActive: boolean) => ({
    className: slots.indicator({
      class: classNames?.indicator,
      is_active: isActive
    })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getDesktopContainerProps,
    getMobileContainerProps,
    getImageWrapperProps,
    getIndicatorsContainerProps,
    getIndicatorProps,
    images,
    activeIndex,
    totalImages,
    indicatorsCount,
    nextSlide,
    prevSlide,
    goToSlide,
    cardWidth,
    sideScale,
    sideOpacity,
    containerHeight
  }
}

export { useProps }
export type { Props, CarouselImage }
