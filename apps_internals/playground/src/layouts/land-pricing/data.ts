import { type Frequency, FrequencyEnum, type Tier, TiersEnum } from './types'

export const frequencies: Frequency[] = [
  { key: FrequencyEnum.Monthly, label: 'Monthly', priceSuffix: 'm' },
  { key: FrequencyEnum.Annually, label: 'Annually', priceSuffix: 'y' }
]

export const tiers: Tier[] = [
  {
    key: TiersEnum.Free,
    title: 'Free',
    description: 'For getting started',
    price: '$0',
    features: [
      '1 user',
      '1 connected calendar',
      'Up to 12 responses',
      'Up to 3 survey results archived'
    ],
    buttonText: 'Get Free',
    buttonVariant: 'solid',
    buttonColor: 'primary',
    href: '#'
  },
  {
    key: TiersEnum.Personal,
    title: 'Personal',
    featured: true,
    price: {
      [FrequencyEnum.Monthly]: '$5',
      [FrequencyEnum.Annually]: '$50'
    },
    features: [
      '1 user up to 2 connected calendars',
      'Up to 50 responses',
      'Up to 10 survey results archived'
    ],
    buttonText: 'Get Personal',
    buttonVariant: 'solid',
    buttonColor: 'primary',
    href: '#'
  },
  {
    key: TiersEnum.Team,
    title: 'Team',
    description: 'For companies & teams',
    price: '$10',
    features: [
      'Per user in company domain',
      'Unlimited responses',
      'Unlimited survey results archived',
      'Priority email & chat'
    ],
    buttonText: 'Get Team',
    buttonVariant: 'solid',
    buttonColor: 'primary',
    href: '#'
  }
]
