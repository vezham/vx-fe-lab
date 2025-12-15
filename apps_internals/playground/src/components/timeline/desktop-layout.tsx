import { MutableRefObject } from 'react'

import { cn } from '@vezham/react-utils'
import { Button, Chip, Image, Link } from '@vezham/react/v2'

import { FeedbackRating } from '../feedback-rating'
import { useDesktopLayoutProps } from './types'
import { TimelineItem } from './types'

interface DesktopLayoutProps {
  timeline: TimelineItem[]
  formatDate: (input: string | number) => string
  customFormatDate?: (input: string | number) => string
  continueReadingText: string
  showReadMore?: boolean
  readMoreText: string
  showRating?: boolean
  expandedArticles: Set<string>
  activeArticleIndex: number
  onContinueReading: (index: number, id: string) => void
  articlesRef: MutableRefObject<(HTMLDivElement | null)[]>
  circlesRef: MutableRefObject<(HTMLDivElement | null)[]>
  device?: 'desktop' | 'tablet'
}

export const DesktopLayout = ({
  timeline,
  formatDate,
  customFormatDate,
  continueReadingText,
  showReadMore,
  readMoreText,
  showRating,
  expandedArticles,
  activeArticleIndex,
  onContinueReading,
  articlesRef,
  circlesRef,
  device = 'desktop'
}: DesktopLayoutProps) => {
  const {
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
  } = useDesktopLayoutProps({
    variant: 'default',
    device,
    direction: 'ltr'
  })

  if (!timeline || timeline.length === 0) return null

  const timelineLast = timeline.length - 1

  return (
    <div className="hidden space-y-8 md:block">
      {timeline.map((item, index) => {
        const isLast = index === timelineLast
        const tagsLength = item.tags?.length || 0
        const isExpanded = expandedArticles.has(item.id)
        const isActive = activeArticleIndex === index

        return (
          <article
            key={item.id}
            ref={el => {
              articlesRef.current[index] = el
            }}
            {...getArticleProps()}
            className={cn(
              getArticleProps().className,
              'group relative lg:grid lg:grid-cols-12 lg:gap-8'
            )}>
            <div className="md:pl-5 lg:col-span-4 lg:pl-0 lg:text-right">
              <div {...getWrapperProps()}>
                <div
                  {...getAuthorProps()}
                  className={cn(
                    getAuthorProps().className,
                    'mb-4 flex flex-col justify-between md:flex-row lg:flex-col lg:items-end lg:justify-end'
                  )}>
                  <div>
                    <dd className="text-default-foreground text-sm leading-6 whitespace-nowrap">
                      <time dateTime={item.published_at} {...getDateProps()}>
                        {customFormatDate
                          ? customFormatDate(item.published_at)
                          : formatDate(item.published_at)}
                      </time>
                    </dd>

                    {item.authors?.map((author, authorIndex) => (
                      <div
                        key={authorIndex}
                        {...getAuthorTextProps()}
                        className="text-default-400 text-sm">
                        by{' '}
                        <span className="text-default-400">{author?.name}</span>
                      </div>
                    ))}
                  </div>

                  {item.tags && item.tags.length > 0 && (
                    <div
                      {...getTagsContainerProps(tagsLength)}
                      className={cn(
                        getTagsContainerProps(tagsLength).className,
                        'mt-3 flex flex-nowrap gap-2 overflow-x-auto lg:justify-end lg:overflow-visible'
                      )}>
                      {item.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          variant="flat"
                          color="primary"
                          size="sm"
                          className="flex-shrink-0">
                          {tag?.name}
                        </Chip>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className="absolute top-0 hidden -translate-x-1/2 md:block lg:left-1/3"
              ref={el => {
                circlesRef.current[index] = el
              }}>
              <div
                {...getCircleProps(isActive)}
                className={cn(
                  getCircleProps(isActive).className,
                  'h-3 w-3 rounded-full border-2 transition-all duration-300',
                  isActive
                    ? 'border-primary bg-primary shadow-primary/50 scale-125 shadow-lg'
                    : 'border-zinc-300 bg-white dark:border-zinc-700 dark:bg-black'
                )}
              />
            </div>

            <div className="hover:bg-default-50 rounded-xl lg:col-span-7 lg:mt-0 lg:px-5">
              <div className="md:pl-5 lg:pl-0">
                <h3
                  {...getHeadingProps()}
                  className={cn(
                    getHeadingProps().className,
                    'text-default-foreground text-xl font-semibold'
                  )}>
                  {item.title}
                </h3>

                <div
                  {...getContinueMainContainerProps(
                    item.continue_reading && !isExpanded
                  )}
                  className={cn(
                    getContinueMainContainerProps(
                      item.continue_reading && !isExpanded
                    ).className,
                    'relative text-base',
                    item.continue_reading && !isExpanded ? 'min-h-40' : ''
                  )}>
                  <div
                    {...getProseProps()}
                    className={cn(
                      getProseProps().className,
                      'prose prose-slate text-default-500 max-w-none text-justify',
                      item.continue_reading && !isExpanded
                        ? 'line-clamp-5 overflow-hidden'
                        : ''
                    )}
                    dangerouslySetInnerHTML={{
                      __html:
                        item.blocks?.map(content => content.text).join('') || ''
                    }}
                  />

                  {item.continue_reading && !isExpanded && (
                    <div {...getContinueOverlayProps()}>
                      <Button
                        variant="flat"
                        size="sm"
                        className="z-10 mb-2 shadow-md"
                        onPress={() => onContinueReading(index, item.id)}>
                        {continueReadingText}
                      </Button>
                    </div>
                  )}
                </div>

                {item.cover && (
                  <Image
                    isZoomed
                    width={300}
                    alt={item.cover?.alt_text || item.title}
                    src={item.cover?.url}
                    className="mt-4"
                    {...getImageProps()}
                  />
                )}

                <div className="mt-4 grid gap-2">
                  {showReadMore && item.url && (
                    <Link
                      showAnchorIcon
                      size="lg"
                      href={item.url}
                      {...getLinkProps()}>
                      {readMoreText}
                    </Link>
                  )}

                  {showRating && (
                    <div {...getRatingProps()}>
                      <FeedbackRating type="star" scale={5} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        )
      })}

      {(!timeline || timeline.length === 0) && (
        <div className="flex items-center justify-center p-8">
          <div className="text-default-500">No timeline items available</div>
        </div>
      )}
    </div>
  )
}
