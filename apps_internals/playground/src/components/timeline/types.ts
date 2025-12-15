import { ReactNode } from 'react'

import {
  PropGetter,
  ReactRef,
  mapPropsVariants,
  useDOMRef
} from '@vezham/react-utils'
import { HTMLHeroUIProps } from '@vezham/react-utils'
import { cn } from '@vezham/react-utils'
import { SlotsToClasses } from '@vezham/react-utils'

import { tvProps, tvSlots, tva } from './variant'

interface Tag {
  id: string
  name: string
  color?: string
  updated_at?: string
  updated_by?: string
}

interface Author {
  id: string
  name: string
  avatar?: {
    url: string
  }
}

interface Cover {
  url: string
  alt_text?: string
  type?: string
}

interface TimelineItem {
  id: string
  title: string
  blocks: Array<{ text: string }>
  published_at: string
  cover?: Cover
  authors?: Author[]
  tags?: Tag[]
  continue_reading?: boolean
  url?: string
}

interface Changelog {
  id: string
  name: string
  updated_at?: string
  updated_by?: string
}

interface Props extends tvProps, HTMLHeroUIProps<'div'> {
  ref?: ReactRef<HTMLDivElement | null>
  classNames?: SlotsToClasses<tvSlots>
  tabs?: ReactNode
  formatDate?: (input: string | number) => string
  showRating?: boolean
  showReadMore?: boolean
  readMoreText?: string
  continueReadingText?: string
  onTabChange?: (id: string) => void
  onContinueReading?: (index: number, id: string) => void
  device?: 'desktop' | 'tablet' | 'mobile' | 'mobileSmall'
  direction?: 'ltr' | 'rtl'
  changelogs?: Changelog[]
  timeline?: TimelineItem[]
  selectedChangelogId?: string
  storeKey?: string
  changelogsLoading?: boolean
  timelineLoading?: boolean
  error?: boolean
  emptyContent?: ReactNode
}

export interface TabsProps {
  variant?: 'default' | 'compact'
}

export interface MobileLayoutProps {
  variant?: 'default' | 'compact'
  device?: 'mobile' | 'mobileSmall'
}

export interface DesktopLayoutProps {
  variant?: 'default' | 'compact'
  device?: 'desktop' | 'tablet'
  direction?: 'ltr' | 'rtl'
}

export const useProps = (originalProps: Props) => {
  const [props, variantProps] = mapPropsVariants(originalProps, tva.variantKeys)

  const {
    as,
    id,
    ref,
    children,
    className,
    classNames,
    tabs,
    formatDate,
    showRating = true,
    showReadMore = true,
    readMoreText = 'Read More',
    continueReadingText = 'Continue Reading',
    onTabChange,
    onContinueReading,
    device = 'desktop',
    direction = 'ltr',
    changelogs = [],
    timeline = [],
    selectedChangelogId,
    storeKey = 'changelogid',
    changelogsLoading = false,
    timelineLoading = false,
    error = false,
    emptyContent,
    ...otherProps
  } = props

  const Component = as || 'div'
  const domRef = useDOMRef(ref)

  const slots = tva({
    ...variantProps,
    device,
    direction
  })

  const getBaseProps: PropGetter = () => ({
    id,
    ref: domRef,
    className: slots.base({ class: cn(classNames?.base, className) }),
    ...otherProps
  })

  const getContainerProps: PropGetter = () => ({
    className: slots.container({ class: classNames?.container })
  })

  const getRightWrapperProps: PropGetter = () => ({
    className: slots.rightWrapper({ class: classNames?.rightWrapper })
  })

  return {
    Component,
    domRef,
    slots,
    classNames,
    children,
    getBaseProps,
    getContainerProps,
    getRightWrapperProps,

    // Props
    tabs,
    formatDate,
    showRating,
    showReadMore,
    readMoreText,
    continueReadingText,
    onTabChange,
    onContinueReading,
    device,
    direction,
    changelogs,
    timeline,
    selectedChangelogId,
    storeKey,
    changelogsLoading,
    timelineLoading,
    error,
    emptyContent
  }
}

export const useTabsProps = (props: TabsProps) => {
  const slots = tva({
    variant: props.variant || 'default'
  })

  const getTabsProps: PropGetter = () => ({
    className: slots.tabs()
  })

  return {
    getTabsProps
  }
}

export const useMobileLayoutProps = (props: MobileLayoutProps) => {
  const slots = tva({
    variant: props.variant || 'default',
    device: props.device || 'mobile'
  })

  const getCardProps: PropGetter = () => ({
    className: cn(
      slots.mobileCard(),
      'rounded-2xl p-2 shadow-sm transition-shadow duration-300 hover:shadow-md'
    )
  })

  const getCardHeaderProps: PropGetter = () => ({
    className: slots.mobileCardHeader()
  })

  const getCardBodyProps: PropGetter = () => ({
    className: slots.mobileCardBody()
  })

  const getCardFooterProps: PropGetter = () => ({
    className: cn(
      slots.mobileCardFooter(),
      'border-default-200 flex flex-col items-start justify-start border-t pt-4'
    )
  })

  const getTitleProps: PropGetter = () => ({
    className: cn(
      slots.mobileTitle(),
      'text-default-foreground mb-2 line-clamp-2 text-base font-semibold'
    )
  })

  const getTagsContainerProps =
    (tagsLength: number): PropGetter =>
    () => ({
      className: slots.mobileTagsContainer({
        tagsCount: tagsLength > 1 ? 'multiple' : 'single'
      })
    })

  const getContentProps: PropGetter = () => ({
    className: slots.mobileContent()
  })

  const getContinueButtonProps: PropGetter = () => ({
    className: slots.mobileContinueButton()
  })

  const getImageProps: PropGetter = () => ({
    className: slots.mobileImage()
  })

  const getReadMoreProps: PropGetter = () => ({
    className: slots.mobileReadMore()
  })

  const getRatingProps: PropGetter = () => ({
    className: slots.mobileRating()
  })

  return {
    getCardProps,
    getCardHeaderProps,
    getCardBodyProps,
    getCardFooterProps,
    getTitleProps,
    getTagsContainerProps,
    getContentProps,
    getContinueButtonProps,
    getImageProps,
    getReadMoreProps,
    getRatingProps
  }
}

export const useDesktopLayoutProps = (props: DesktopLayoutProps) => {
  const slots = tva({
    variant: props.variant || 'default',
    device: props.device || 'desktop',
    direction: props.direction || 'ltr'
  })

  const getArticleProps: PropGetter = () => ({
    className: slots.article()
  })

  const getCircleProps =
    (isActive: boolean): PropGetter =>
    () => ({
      className: slots.circle({ active: isActive })
    })

  const getHeadingProps: PropGetter = () => ({
    className: slots.heading()
  })

  const getProseProps: PropGetter = () => ({
    className: slots.prose()
  })

  const getContinueMainContainerProps =
    (continueReading: boolean): PropGetter =>
    () => ({
      className: slots.continueMainContainer({ continueReading })
    })

  const getContinueOverlayProps: PropGetter = () => ({
    className: slots.continueOverlay()
  })

  const getWrapperProps: PropGetter = () => ({
    className: slots.wrapper()
  })

  const getAuthorProps: PropGetter = () => ({
    className: slots.author()
  })

  const getDateProps: PropGetter = () => ({
    className: slots.date()
  })

  const getAuthorTextProps: PropGetter = () => ({
    className: slots.authorText()
  })

  const getTagsContainerProps =
    (tagsLength: number): PropGetter =>
    () => ({
      className: slots.tagsContainer({
        tagsCount: tagsLength > 1 ? 'multiple' : 'single'
      })
    })

  const getLinkProps: PropGetter = () => ({
    className: slots.link()
  })

  const getRatingProps: PropGetter = () => ({
    className: slots.rating()
  })

  const getImageProps: PropGetter = () => ({
    className: slots.image()
  })

  return {
    getArticleProps,
    getCircleProps,
    getHeadingProps,
    getProseProps,
    getContinueMainContainerProps,
    getContinueOverlayProps,
    getWrapperProps,
    getAuthorProps,
    getDateProps,
    getAuthorTextProps,
    getTagsContainerProps,
    getLinkProps,
    getRatingProps,
    getImageProps
  }
}

export type { Props, TimelineItem, Changelog, Author, Tag, Cover }
