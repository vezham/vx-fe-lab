import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface SysStatus {
  status?: 'none' | 'success' | 'warning' | 'danger'
  label?: string
  url?: string
  // target?: '_self' | '_blank'
}

interface Props extends tvProps, HTMLHeroUIProps<'a'>, SysStatus {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
}

type SystemStatusProps = SysStatus

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    // system-status
    status = 'success',
    label = 'All systems operational',
    url = '',
    target = '_self',
    ...otherProps
  } = props

  const Component = as || 'a'

  const domRef = useDOMRef(ref)

  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    // getLinkProps
    href: url,
    target: target,
    rel: 'noreferrer',
    ...otherProps
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,

    // otherProps
    status,
    label
  }
}

export { useProps }
export type { Props, SysStatus }
export type { SystemStatusProps }
