type avatar = {
  __type: string
  url?: string
}

type brandData = {
  name: string
  label: string
  avatar?: avatar
}

type systemData = {
  status: string
  label: string
  url: string
  target: string
}

export type actionData = {
  __type?: 'button' | 'link'
  id?: string
  variant?: string
  label: string
  url?: string
  target?: string
}

export type Platform =
  | 'clipboard'
  | 'share_link'
  | 'mail'
  | 'phone'
  | 'linkedin'
  | 'twitter'
  | 'x'
  | 'facebook'
  | 'instagram'
  | 'threads'
  | 'whatsapp'
  | 'tiktok'
  | 'mastodon'
  | 'bluesky'
  | string

interface Link {
  __type?: 'link' | 'button'
  id?: string
  className?: string
  label?: string
  url?: string
  target?: string
  onClick?: () => void
}

type linksData = {
  label: string
  links: Link[]
}

type submit = {
  label: string
}
type input = {
  placeholder: string
}

type newsLetterAction = {
  submit: submit
  input: input
}

export type coverType = {
  __type: string
  type?: string
  alt_text?: string
  url: string
}

type welcomeData = {
  __type: string
  title?: string
  description?: string
  cover?: coverType
}

type newsletterData = {
  __type: string
  title: string
  description: string
  actions: newsLetterAction
}

type socialData = {
  name: Platform
  handle: string
}

type footerData = {
  backdrop: string
  links: linksData[]
}
type cards = {
  newsletter: newsletterData
  welcome_message: welcomeData
}

export type Personalize = {
  footer: footerData
  default_locale: string
  available_locales: []
  brand: brandData
  social_accounts: socialData[]
  system_status: systemData
  actions?: actionData[]
  cards: cards
}

type RQPersonalize = object

export type { RQPersonalize }
