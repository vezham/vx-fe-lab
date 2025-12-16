import { forwardRef } from '@vezham/react-utils'

import { SocialMediaIcon } from '../../../icons/social-media-icon/src'
import { Props, useProps } from './types'

const PwaSocialMediaLink = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, handles } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      {handles.map(handler => (
        <SocialMediaIcon
          icon={{ size: 'sm', hoverEffect: 'glow' }}
          handler={handler}
        />
      ))}
    </Component>
  )
})

PwaSocialMediaLink.displayName = 'PwaSocialMediaLink'

export { PwaSocialMediaLink }
