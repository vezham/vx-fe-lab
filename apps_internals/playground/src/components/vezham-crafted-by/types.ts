import { ReactNode } from 'react'

import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

export const APP_NAME = import.meta.env.V_APP_NAME || 'vapp'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  app?: string
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
    app = APP_NAME,
    ...otherProps
  } = props

  const Component = as || 'div'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({
      class: cn(classNames?.base, className)
    }),
    ...otherProps
  })

  const getTextProps: PropGetter = () => ({
    className: slots.text({
      class: classNames?.text
    })
  })

  const getLogoProps: PropGetter = () => ({
    className: slots.logo({
      class: classNames?.logo
    }),
    cursor: true
  })

  const link = `https://vezham.com?utm_source=footer&utm_medium=crafted-by&utm_campaign=${app}`
  const getLinkProps: PropGetter = () => ({
    href: link,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: slots.link({
      class: classNames?.link
    }),
    'aria-label': 'Visit Vezham website'
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getTextProps,
    getLogoProps,
    getLinkProps,

    // otherProps
    app
  }
}

export { useProps }
export type { Props }
