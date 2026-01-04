'use client'

import { Icon } from '@iconify/react'

import { forwardRef } from '@vezham/react-utils'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Tab,
  Tabs
} from '@vezham/react/v2'

import { frequencies } from './data'
import { TiersEnum } from './types'
import { Props, useProps } from './types'

const PricingComp = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
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
    setFrequency,
    tiers: pricingTiers
  } = useProps({
    ...props,
    ref
  })

  return (
    <Component {...getBaseProps()}>
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-2">
        {pricingTiers.map(tier => {
          const isPersonal = tier.key === TiersEnum.Personal

          return (
            <Card key={tier.key} {...getCardProps(isPersonal)}>
              <CardHeader {...getCardHeaderProps(isPersonal)}>
                <h3 className="text-xl font-semibold">{tier.title}</h3>

                {isPersonal && (
                  <Tabs
                    selectedKey={frequency.key}
                    onSelectionChange={key =>
                      setFrequency(frequencies.find(f => f.key === key)!)
                    }
                    size="sm"
                    {...getTabsProps(isPersonal)}>
                    {frequencies.map(f => (
                      <Tab key={f.key} title={f.label} />
                    ))}
                  </Tabs>
                )}
              </CardHeader>

              <Divider {...getDividerProps(isPersonal)} />

              <CardBody {...getCardBodyProps(isPersonal)}>
                <div {...getPriceContainerProps(isPersonal)}>
                  <span {...getPriceTextProps(isPersonal)}>
                    {typeof tier.price === 'string'
                      ? tier.price
                      : tier.price[frequency.key]}
                  </span>
                  <span {...getPriceSuffixProps(isPersonal)}>/m</span>
                </div>

                <ul {...getFeatureListProps(isPersonal)}>
                  {tier.features.map(feature => (
                    <li key={feature} {...getFeatureItemProps(isPersonal)}>
                      <Icon icon="ci:check" className="text-lg" />
                      <span
                        className={
                          isPersonal ? 'text-white/90' : 'text-foreground'
                        }>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardBody>

              <CardFooter>
                <Button
                  as={Link}
                  href={tier.href}
                  {...getButtonProps(tier, isPersonal)}>
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </Component>
  )
})

PricingComp.displayName = 'PricingComp'

export { PricingComp }
