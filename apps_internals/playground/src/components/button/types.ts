import {
  HTMLHeroUIProps,
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef
} from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

export type ButtonColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full'
export type ButtonVariant =
  | 'solid'
  | 'faded'
  | 'bordered'
  | 'light'
  | 'flat'
  | 'ghost'
  | 'shadow'

interface Props extends tvProps, HTMLHeroUIProps<'button'> {
  ref?: ReactRef<HTMLButtonElement | null>
  classNames?: SlotsToClasses<tvSlots>
  color?: ButtonColor
  size?: ButtonSize
  radius?: ButtonRadius
  variant?: ButtonVariant
  fullWidth?: boolean
  isDisabled?: boolean
  isIconOnly?: boolean
  startContent?: React.ReactNode
  endContent?: React.ReactNode
  onPress?: () => void
  onPressStart?: (event: React.PointerEvent<HTMLButtonElement>) => void
  onPressEnd?: (event: React.PointerEvent<HTMLButtonElement>) => void
  onPressChange?: (isPressed: boolean) => void
  onPressUp?: (event: React.PointerEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
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
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    type = 'button',
    ...otherProps
  } = props

  const Component = as || 'button'
  const domRef = useDOMRef(ref)

  // Use variantProps directly - it already contains all variant props
  // This will trigger the compound variants correctly
  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    type,
    disabled: variantProps.isDisabled,
    className: slots.base({ class: cn(classNames?.base, className) }),
    onClick: onPress,
    onPointerDown: onPressStart,
    onPointerUp: onPressUp,
    ...otherProps
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,

    getBaseProps,
    startContent: otherProps.startContent,
    endContent: otherProps.endContent,
    isDisabled: variantProps.isDisabled,
    isIconOnly: variantProps.isIconOnly
  }
}

export { useProps }
export type { Props }
