import { ReactNode } from 'react'

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

type Submit = {
  label?: string
}

type Input = {
  placeholder?: string
}

type Action = {
  submit: Submit
  input: Input
  button?: ButtonProps
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  title?: ReactNode
  description?: ReactNode
  actions?: Action
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
    title,
    description,
    actions = {
      submit: {
        label: ''
      },
      input: {
        placeholder: ''
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

  const getTitleProps: PropGetter = () => ({
    className: slots.wrapperTitle({
      class: classNames?.wrapperTitle
    })
  })

  const getDescriptionProps: PropGetter = () => ({
    className: slots.wrapperDescription({
      class: classNames?.wrapperDescription
    })
  })

  const getCtaWrapperProps: PropGetter = () => ({
    className: slots.wrapperCta({
      class: classNames?.wrapperCta
    })
  })

  const getButtonWrapperProps: PropGetter = () => ({
    className: slots.wrapperButton({
      class: classNames?.wrapperButton
    })
  })

  const getInputProps = () => ({
    type: 'email',
    isRequired: true,
    'aria-label': 'Email',
    autoComplete: 'cta-email-address',
    id: `email-${id || 'cta'}`,
    name: `email-${id || 'cta'}`,
    placeholder: actions.input.placeholder,
    ...actions.input
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getTitleProps,
    getDescriptionProps,
    getCtaWrapperProps,
    getButtonWrapperProps,
    getInputProps,

    // otherProps
    title,
    description,
    actions
  }
}

export { useProps }
export type { Props }
