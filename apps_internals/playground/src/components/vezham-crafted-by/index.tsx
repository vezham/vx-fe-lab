import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'
import { Image } from '@vezham/react/v2'

import { Text } from '../text'
import { Props, useProps } from './types'

const VezhamCraftedBy = forwardRef<'div', Props>((props, ref) => {
  const { Component, getBaseProps, getLogoProps, getLinkProps, getTextProps } =
    useProps({
      ...props,
      ref
    })

  return (
    <Component {...getBaseProps()}>
      <Text content={'Crafted By'} {...getTextProps()} />
      <a {...getLinkProps()}>
        <Icon icon="mdi:mail" {...getLogoProps()} />
      </a>
    </Component>
  )
})

VezhamCraftedBy.displayName = 'VezhamCraftedBy'

export { VezhamCraftedBy }
