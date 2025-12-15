import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'

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
        <Icon {...getLogoProps()} />
      </a>
    </Component>
  )
})

VezhamCraftedBy.displayName = 'VezhamCraftedBy'

export { VezhamCraftedBy }
