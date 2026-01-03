import { ReactNode, useState } from 'react'

import { ReactRef, useDOMRef } from '@vezham/react-utils'
import {
  HTMLHeroUIProps,
  PropGetter,
  mapPropsVariants
} from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'
import type { ButtonProps } from '@vezham/react/v2'

import {
  frequencies as defaultFrequencies,
  tiers as defaultTiers
} from './data'
import { tvProps, tvSlots, tva } from './variant'

export enum FrequencyEnum {
  Monthly = 'monthly',
  Annually = 'annually'
}

export type Frequency = {
  key: FrequencyEnum
  label: string
  priceSuffix: string
}

export enum TiersEnum {
  Free = 'free',
  Personal = 'personal',
  Team = 'team'
}

export type Tier = {
  key: TiersEnum
  title: string
  description?: string
  price: string | Record<FrequencyEnum, string>
  featured?: boolean
  features: string[]
  buttonText: string
  buttonColor?: ButtonProps['color']
  buttonVariant: ButtonProps['variant']
  href: string
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  frequencies?: Frequency[]
  tiers?: Tier[]
  defaultFrequency?: Frequency
  onFrequencyChange?: (frequency: Frequency) => void
  onTierSelect?: (tier: Tier) => void
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
    frequencies = defaultFrequencies,
    tiers = defaultTiers,
    defaultFrequency = defaultFrequencies[0],
    onFrequencyChange,
    onTierSelect,
    ...otherProps
  } = props

  const [frequency, setFrequency] = useState<Frequency>(defaultFrequency)

  const handleFrequencyChange = (newFrequency: Frequency) => {
    setFrequency(newFrequency)
    onFrequencyChange?.(newFrequency)
  }

  const Component = as || 'div'
  const domRef = useDOMRef(ref)
  const slots = tva(variantProps)

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getCardProps = (isPersonal: boolean) => ({
    className: slots.card({
      class: cn(
        classNames?.card,
        isPersonal && 'bg-primary scale-105 text-white'
      )
    })
  })

  const getCardHeaderProps = (isPersonal: boolean) => ({
    className: slots.card_header({ class: classNames?.card_header })
  })

  const getCardBodyProps = (isPersonal: boolean) => ({
    className: slots.card_body({ class: classNames?.card_body })
  })

  const getCardFooterProps = () => ({
    className: slots.card_footer({ class: classNames?.card_footer })
  })

  const getDividerProps = (isPersonal: boolean) => ({
    className: slots.divider({
      class: cn(classNames?.divider, isPersonal ? 'bg-white/20' : '')
    })
  })

  const getPriceContainerProps = (isPersonal: boolean) => ({
    className: slots.price_container({ class: classNames?.price_container })
  })

  const getPriceTextProps = (isPersonal: boolean) => ({
    className: slots.price_text({ class: classNames?.price_text })
  })

  const getPriceSuffixProps = (isPersonal: boolean) => ({
    className: slots.price_suffix({
      class: cn(classNames?.price_suffix, isPersonal && 'text-white/80')
    })
  })

  const getFeatureListProps = (isPersonal: boolean) => ({
    className: slots.feature_list({ class: classNames?.feature_list })
  })

  const getFeatureItemProps = (isPersonal: boolean) => ({
    className: slots.feature_item({ class: classNames?.feature_item })
  })

  const getButtonProps = (tier: Tier, isPersonal: boolean) => {
    const baseProps: ButtonProps = {
      fullWidth: true,
      size: 'lg' as const,
      color: tier.buttonColor || 'primary',
      variant: tier.buttonVariant || 'solid',
      className: slots.button({
        class: cn(classNames?.button, isPersonal && 'text-primary bg-white')
      })
    }

    return baseProps
  }

  const getTabsProps = (isPersonal: boolean) => ({
    classNames: {
      tabList: 'bg-white/20',
      tab: 'text-white',
      cursor: 'bg-white'
    }
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getCardProps,
    getCardHeaderProps,
    getCardBodyProps,
    getCardFooterProps,
    getDividerProps,
    getPriceContainerProps,
    getPriceTextProps,
    getPriceSuffixProps,
    getFeatureListProps,
    getFeatureItemProps,
    getButtonProps,
    getTabsProps,
    frequency,
    setFrequency: handleFrequencyChange,
    frequencies,
    tiers
  }
}

export { useProps }
export type { Props }
