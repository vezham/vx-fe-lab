import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

const APP_NAME = import.meta.env.V_APP_NAME || 'vapp'

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
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getWrapperProps = () => ({
    className: slots.wrapper({ class: classNames?.wrapper })
  })

  const getLogoProps = () => ({
    className: slots.logo({ class: classNames?.logo }),
    cursor: true
  })

  const link = `https://vezham.com?utm_source=footer&utm_medium=copyright&utm_campaign=${app}`
  const getLinkProps = () => ({
    className: slots.link({ class: classNames?.link }),
    href: link,
    target: '_blank',
    rel: 'noreferrer'
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getWrapperProps,
    getLogoProps,
    getLinkProps,
    app
  }
}

export { useProps }
export type { Props }
