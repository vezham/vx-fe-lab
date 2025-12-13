import { cn } from '@vezham/react-utils'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Link
} from '@vezham/react/v2'

import { FeedbackRating } from '../feedback-rating'
import { useMobileLayoutProps } from './types'
import { TimelineItem } from './types'
import { tva } from './variant'

interface MobileLayoutProps {
  timeline: TimelineItem[]
  formatDate: (input: string | number) => string
  customFormatDate?: (input: string | number) => string
  continueReadingText: string
  showReadMore?: boolean
  readMoreText: string
  showRating?: boolean
  expandedArticles: Set<string>
  onContinueReading: (index: number, id: string) => void
}

export const MobileLayout = ({
  timeline,
  formatDate,
  customFormatDate,
  continueReadingText,
  showReadMore,
  readMoreText,
  showRating,
  expandedArticles,
  onContinueReading
}: MobileLayoutProps) => {
  const {
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
  } = useMobileLayoutProps({
    variant: 'default',
    device: 'mobile'
  })

  if (!timeline || timeline.length === 0) return null

  return (
    <div className="block md:hidden">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {timeline.map((item, index) => {
          const isExpanded = expandedArticles.has(item.id)
          const tagsLength = item.tags?.length || 0

          return (
            <Card key={item.id} {...getCardProps()}>
              <CardHeader {...getCardHeaderProps()}>
                <time
                  dateTime={item.published_at}
                  className="text-default-foreground text-sm font-medium">
                  {customFormatDate
                    ? customFormatDate(item.published_at)
                    : formatDate(item.published_at)}
                </time>
                {item.authors?.length > 0 && (
                  <span className="text-default-400 text-xs">
                    by {item.authors[0]?.name}
                  </span>
                )}
              </CardHeader>

              <CardBody {...getCardBodyProps()}>
                <h3 {...getTitleProps()}>{item.title}</h3>

                {item.tags && item.tags.length > 0 && (
                  <div
                    {...getTagsContainerProps(tagsLength)}
                    className={cn(
                      getTagsContainerProps(tagsLength).className,
                      'mb-3 flex flex-wrap gap-1'
                    )}>
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        variant="flat"
                        color="primary"
                        size="sm"
                        className="text-xs">
                        {tag?.name}
                      </Chip>
                    ))}
                    {item.tags.length > 3 && (
                      <Chip variant="flat" size="sm" className="text-xs">
                        +{item.tags.length - 3}
                      </Chip>
                    )}
                  </div>
                )}

                <div className="relative">
                  <div
                    {...getContentProps()}
                    className={cn(
                      getContentProps().className,
                      item.continue_reading && !isExpanded
                        ? 'line-clamp-4 overflow-hidden'
                        : ''
                    )}
                    dangerouslySetInnerHTML={{
                      __html:
                        item.blocks?.map(content => content.text).join('') || ''
                    }}
                  />

                  {item.continue_reading && !isExpanded && (
                    <div className="mt-4 flex items-center justify-center">
                      <Button
                        variant="flat"
                        size="sm"
                        className="text-xs shadow-sm"
                        onPress={() => onContinueReading(index, item.id)}
                        {...getContinueButtonProps()}>
                        {continueReadingText}
                      </Button>
                    </div>
                  )}
                </div>

                {item.cover && (
                  <Image
                    alt={item.cover?.alt_text || item.title}
                    src={item.cover?.url}
                    className="mt-3 rounded-lg"
                    {...getImageProps()}
                  />
                )}
              </CardBody>

              <CardFooter {...getCardFooterProps()}>
                {showReadMore && item.url && (
                  <Link
                    showAnchorIcon
                    size="lg"
                    href={item.url}
                    className="text-xs"
                    {...getReadMoreProps()}>
                    {readMoreText}
                  </Link>
                )}

                {showRating && (
                  <div className="mt-2 gap-1" {...getRatingProps()}>
                    <FeedbackRating type="star" scale={5} size="sm" />
                  </div>
                )}
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
