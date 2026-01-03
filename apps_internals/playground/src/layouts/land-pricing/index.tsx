// "use client";

// import React from "react";
// import { Icon } from "@iconify/react";
// import {
//     Button,
//     Card,
//     CardBody,
//     CardFooter,
//     CardHeader,
//     Divider,
//     Link,
//     Tab,
//     Tabs,
// } from "@vezham/react/v2";

// import { frequencies } from "./pricing-tiers";
// import {  type Frequency, TiersEnum } from "./pricing-types";
// import { tiers } from "./pricing-tiers";
// import { cn } from "@vezham/react-utils";

// const PricingComp = () => {
//     const [frequency, setFrequency] = React.useState<Frequency>(frequencies[0]);

//     return (
//         <div className=" py-16">
//             <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 justify-center items-center">
//                 {tiers.map((tier) => {
//                     const isPersonal = tier.key === TiersEnum.Personal;

//                     return (
//                         <Card
//                             key={tier.key}
//                             className={cn(
//                                 "relative p-2",
//                                 isPersonal && "scale-105 bg-primary text-white"
//                             )}
//                         >
//                             <CardHeader className="flex flex-col items-center gap-3">
//                                 <h3 className="text-xl font-semibold">{tier.title}</h3>

//                                 {isPersonal && (
//                                     <Tabs
//                                         selectedKey={frequency.key}
//                                         onSelectionChange={(key) =>
//                                             setFrequency(frequencies.find((f) => f.key === key)!)
//                                         }
//                                         size="sm"
//                                         classNames={{
//                                             tabList: "bg-white/20",
//                                             tab: "text-white",
//                                             cursor: "bg-white",
//                                         }}
//                                     >
//                                         {frequencies.map((f) => (
//                                             <Tab key={f.key} title={f.label} />
//                                         ))}
//                                     </Tabs>
//                                 )}
//                             </CardHeader>

//                             <Divider className={isPersonal ? "bg-white/20" : ""} />

//                             <CardBody className="items-center gap-6">
//                                 <div className="flex items-end gap-1">
//                                     <span className="text-5xl font-bold">
//                                         {typeof tier.price === "string"
//                                             ? tier.price
//                                             : tier.price[frequency.key]}
//                                     </span>
//                                     <span className={cn("pb-1 text-sm", isPersonal && "text-white/80")}>
//                                         /m
//                                     </span>
//                                 </div>

//                                 <ul className="space-y-3">
//                                     {tier.features.map((feature) => (
//                                         <li key={feature} className="flex items-center gap-2">
//                                             <Icon icon="ci:check" className="text-lg" />
//                                             <span className={cn("text-sm", isPersonal && "text-white/90")}>
//                                                 {feature}
//                                             </span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </CardBody>

//                             <CardFooter>
//                                 <Button
//                                     as={Link}
//                                     href={tier.href}
//                                     fullWidth
//                                     size="lg"
//                                     color={tier.buttonColor}
//                                     variant={tier.buttonVariant}
//                                     className={isPersonal ? "bg-white text-primary" : ""}
//                                 >
//                                     {tier.buttonText}
//                                 </Button>
//                             </CardFooter>
//                         </Card>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export { PricingComp };

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

// "use client";

// import React from "react";
// import { Icon } from "@iconify/react";
// import {
//     Button,
//     Card,
//     CardBody,
//     CardFooter,
//     CardHeader,
//     Divider,
//     Link,
//     Tab,
//     Tabs,
// } from "@vezham/react/v2";

// import { frequencies } from "./pricing-tiers";
// import {  type Frequency, TiersEnum } from "./pricing-types";
// import { tiers } from "./pricing-tiers";
// import { cn } from "@vezham/react-utils";

// const PricingComp = () => {
//     const [frequency, setFrequency] = React.useState<Frequency>(frequencies[0]);

//     return (
//         <div className=" py-16">
//             <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 justify-center items-center">
//                 {tiers.map((tier) => {
//                     const isPersonal = tier.key === TiersEnum.Personal;

//                     return (
//                         <Card
//                             key={tier.key}
//                             className={cn(
//                                 "relative p-2",
//                                 isPersonal && "scale-105 bg-primary text-white"
//                             )}
//                         >
//                             <CardHeader className="flex flex-col items-center gap-3">
//                                 <h3 className="text-xl font-semibold">{tier.title}</h3>

//                                 {isPersonal && (
//                                     <Tabs
//                                         selectedKey={frequency.key}
//                                         onSelectionChange={(key) =>
//                                             setFrequency(frequencies.find((f) => f.key === key)!)
//                                         }
//                                         size="sm"
//                                         classNames={{
//                                             tabList: "bg-white/20",
//                                             tab: "text-white",
//                                             cursor: "bg-white",
//                                         }}
//                                     >
//                                         {frequencies.map((f) => (
//                                             <Tab key={f.key} title={f.label} />
//                                         ))}
//                                     </Tabs>
//                                 )}
//                             </CardHeader>

//                             <Divider className={isPersonal ? "bg-white/20" : ""} />

//                             <CardBody className="items-center gap-6">
//                                 <div className="flex items-end gap-1">
//                                     <span className="text-5xl font-bold">
//                                         {typeof tier.price === "string"
//                                             ? tier.price
//                                             : tier.price[frequency.key]}
//                                     </span>
//                                     <span className={cn("pb-1 text-sm", isPersonal && "text-white/80")}>
//                                         /m
//                                     </span>
//                                 </div>

//                                 <ul className="space-y-3">
//                                     {tier.features.map((feature) => (
//                                         <li key={feature} className="flex items-center gap-2">
//                                             <Icon icon="ci:check" className="text-lg" />
//                                             <span className={cn("text-sm", isPersonal && "text-white/90")}>
//                                                 {feature}
//                                             </span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </CardBody>

//                             <CardFooter>
//                                 <Button
//                                     as={Link}
//                                     href={tier.href}
//                                     fullWidth
//                                     size="lg"
//                                     color={tier.buttonColor}
//                                     variant={tier.buttonVariant}
//                                     className={isPersonal ? "bg-white text-primary" : ""}
//                                 >
//                                     {tier.buttonText}
//                                 </Button>
//                             </CardFooter>
//                         </Card>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export { PricingComp };

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
