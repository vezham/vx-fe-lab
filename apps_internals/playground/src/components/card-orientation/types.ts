import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

type Post = {
  super_title: string
  title: string
  href: string
  image_url: string
  description?: string
  app_name?: string
  app_icon?: string
  button_text?: string
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  posts: Post[]
  onButtonClick?: (href: string) => void
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
    posts,
    onButtonClick,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps,

    // Remove scroll-shadow props since we're handling scrolling ourselves for vertical orientation
    ...(originalProps.orientation === 'horizontal' && {
      orientation: 'horizontal' as const,
      show_track: false
    })
  })

  const getWrapperProps: PropGetter = () => ({
    className: slots.wrapper({ class: classNames?.wrapper })
  })

  const getCardProps = () => ({
    className: slots.card({ class: classNames?.card }),
    isPressable: true
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getWrapperProps,
    onButtonClick,

    // otherProps
    posts,
    getCardProps
  }
}

export { Props, useProps }
