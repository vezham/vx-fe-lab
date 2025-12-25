import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'
import { ButtonProps } from '@vezham/react/v2'

import { tvProps, tvSlots, tva } from './variant'

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  pathname?: string
  onClick?: () => void
  buttonProps?: Partial<ButtonProps>
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(
    originalProps,
    tva.variantKeys as (keyof Props)[]
  )

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    pathname = typeof window !== 'undefined' ? window.location.pathname : '',
    onClick = () => {
      if (typeof window !== 'undefined') {
        window.document.location.href = '/'
      }
    },
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

  const getHeadingProps: PropGetter = () => ({
    className: slots.heading({ class: classNames?.heading }),
    content: 'Oops!'
  })

  const getParagraphProps: PropGetter = () => ({
    className: slots.paragraph({ class: classNames?.paragraph })
  })

  const getButtonProps: PropGetter = () => ({
    onClick,
    children: 'Back to home'
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getHeadingProps,
    getParagraphProps,
    getButtonProps,
    pathname,
    onClick
  }
}

export { useProps }
export type { Props }
