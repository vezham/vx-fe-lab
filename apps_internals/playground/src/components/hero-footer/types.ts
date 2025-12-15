import React from 'react'

import {
  PropGetter,
  ReactRef,
  SlotsToClasses,
  cn,
  mapPropsVariants,
  useDOMRef,
  v0xdsHTMLProps
} from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

export type FooterLink = {
  name: string
  href: string
}

export type SocialItem = {
  name: string
  href: string
  icon: React.FC<any>
}

export interface FooterNavigation {
  services: FooterLink[]
  resources: FooterLink[]
  aboutUs: FooterLink[]
  legal: FooterLink[]
  social: SocialItem[]
}

interface Props extends tvProps, v0xdsHTMLProps<'footer'> {
  ref?: ReactRef<HTMLElement | null>
  classNames?: SlotsToClasses<tvSlots>
  footerNavigation: FooterNavigation
}

const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)
  const {
    as,
    id,
    ref,
    className,
    classNames,
    footerNavigation,
    ...otherProps
  } = props

  const Component = as || 'footer'
  const domRef = useDOMRef(ref)
  const slots = tva(variantProps)

  const logo = 'https://static.cdn.vezham.com/images/logo-black.png'

  const [formState, setFormState] = React.useState({ email: '' })
  const [showAlert, setShowAlert] = React.useState<
    'default' | 'success' | 'danger'
  >('default')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setTimeout(() => setShowAlert('default'), 3000)
  }

  const currentYear = new Date().getFullYear()

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getContainerProps: PropGetter = () => ({
    className: slots.container({ class: classNames?.container })
  })

  const getGridWrapperProps: PropGetter = () => ({
    className: slots.gridWrapper({ class: classNames?.gridWrapper })
  })

  const getLogoWrapperProps: PropGetter = () => ({
    className: slots.logoWrapper({ class: classNames?.logoWrapper })
  })

  const getTaglineProps: PropGetter = () => ({
    className: slots.tagline({ class: classNames?.tagline })
  })

  const getSocialWrapperProps: PropGetter = () => ({
    className: slots.socialWrapper({ class: classNames?.socialWrapper })
  })

  const getSubscribeWrapperProps: PropGetter = () => ({
    className: slots.subscribeWrapper({ class: classNames?.subscribeWrapper })
  })

  const getSubscribeTitleProps: PropGetter = () => ({
    className: slots.subscribeTitle({ class: classNames?.subscribeTitle })
  })

  const getSubscribeDescProps: PropGetter = () => ({
    className: slots.subscribeDesc({ class: classNames?.subscribeDesc })
  })

  const getFooterBottomProps: PropGetter = () => ({
    className: slots.footerBottom({ class: classNames?.footerBottom })
  })

  const getFooterTextProps: PropGetter = () => ({
    className: slots.footerText({ class: classNames?.footerText })
  })

  const getAlertWrapperProps: PropGetter = () => ({
    className: slots.alertWrapper({ class: classNames?.alertWrapper })
  })

  const getGridTwoColProps: PropGetter = () => ({
    className: slots.gridTwoCol({ class: classNames?.gridTwoCol })
  })
  const getGridInnerProps: PropGetter = () => ({
    className: slots.gridInner({ class: classNames?.gridInner })
  })
  const getColSpacingProps: PropGetter = () => ({
    className: slots.colSpacing({ class: classNames?.colSpacing })
  })
  const getFormProps: PropGetter = () => ({
    className: slots.form({ class: classNames?.form })
  })
  const getInputWrapperProps: PropGetter = () => ({
    className: slots.inputWrapper({ class: classNames?.inputWrapper })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    footerNavigation,
    logo,
    formState,
    setFormState,
    showAlert,
    setShowAlert,
    handleSubmit,
    currentYear,

    getBaseProps,
    getContainerProps,
    getGridWrapperProps,
    getLogoWrapperProps,
    getTaglineProps,
    getSocialWrapperProps,
    getSubscribeWrapperProps,
    getSubscribeTitleProps,
    getSubscribeDescProps,
    getFooterBottomProps,
    getFooterTextProps,
    getAlertWrapperProps,
    getGridTwoColProps,
    getGridInnerProps,
    getColSpacingProps,
    getFormProps,
    getInputWrapperProps
  }
}

export { useProps }
export type { Props }
