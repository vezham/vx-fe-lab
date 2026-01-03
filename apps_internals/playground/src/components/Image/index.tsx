import { forwardRef } from '@vezham/react-utils'
import { Image } from '@vezham/react/v2'

import { Props, useProps } from './types'

const ImageCard = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, getImageProps } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      <Image {...getImageProps()} />
    </Component>
  )
})

ImageCard.displayName = 'ImageCard'

export { ImageCard }
