'use client'

import { forwardRef } from '@vezham/react-utils'

import { ImageCard } from '../Image'
import { Props, useProps } from './types'

const Carousel = forwardRef<'section', Props>((props, ref) => {
  const {
    Component,
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
    isMobile
  } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      <div {...getMobileContainerProps()}>
        {images.map(img => (
          <div key={img.id} className="flex-shrink-0 snap-center">
            <ImageCard src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      <div {...getDesktopContainerProps()}>
        {images.map((img, index) => {
          const imageWrapperProps = getImageWrapperProps(
            index,
            activeIndex,
            totalImages
          )

          return (
            <div key={img.id} {...imageWrapperProps}>
              <ImageCard src={img.src} alt={img.alt} />
            </div>
          )
        })}
      </div>

      <div {...getIndicatorsContainerProps()}>
        {Array.from({ length: indicatorsCount }).map((_, i) => (
          <span key={i} {...getIndicatorProps(i === activeIndex)} />
        ))}
      </div>
    </Component>
  )
})

Carousel.displayName = 'Carousel'

export { Carousel }
