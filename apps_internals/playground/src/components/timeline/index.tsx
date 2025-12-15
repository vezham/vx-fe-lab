import { useEffect, useRef, useState } from 'react'

import { forwardRef } from '@vezham/react-utils'

import { useStore } from '../../hooks'
import { DesktopLayout } from './desktop-layout'
import { MobileLayout } from './mobile-layout'
import { TimelineTabs } from './tabs'
import { Props, useProps } from './types'

const Timeline = forwardRef<'div', Props>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getContainerProps,
    changelogs,
    timeline = [],
    selectedChangelogId,
    storeKey = 'changelogid',
    changelogsLoading,
    timelineLoading,
    error,
    emptyContent,
    device = 'desktop'
  } = useProps({
    ...props,
    ref
  })

  // Store hooks
  const { get: getStore, set: setStore } = useStore

  // State management
  const initialId =
    selectedChangelogId || getStore(storeKey) || changelogs?.[0]?.id
  const [currentId, setCurrentId] = useState<string>(initialId || '')
  const [expandedArticles, setExpandedArticles] = useState<Set<string>>(
    new Set()
  )
  const [activeArticleIndex, setActiveArticleIndex] = useState<number>(0)
  const [trackLineHeight, setTrackLineHeight] = useState<number>(0)

  // Refs
  const articlesRef = useRef<(HTMLDivElement | null)[]>([])
  const timelineContainerRef = useRef<HTMLDivElement>(null)
  const trackLineRef = useRef<HTMLDivElement>(null)
  const circlesRef = useRef<(HTMLDivElement | null)[]>([])

  // Effects
  useEffect(() => {
    if (selectedChangelogId) {
      setCurrentId(selectedChangelogId)
    }
  }, [selectedChangelogId])

  useEffect(() => {
    if (!timeline?.length || !circlesRef.current.length) return

    const lastCircle = circlesRef.current[timeline.length - 1]
    if (lastCircle && timelineContainerRef.current) {
      const circleRect = lastCircle.getBoundingClientRect()
      const containerRect = timelineContainerRef.current.getBoundingClientRect()
      const circleCenterY =
        circleRect.top - containerRect.top + circleRect.height / 2
      setTrackLineHeight(circleCenterY)
    }
  }, [timeline, activeArticleIndex])

  useEffect(() => {
    const handleScroll = () => {
      if (!articlesRef.current.length || !timelineContainerRef.current) return

      const containerTop =
        timelineContainerRef.current.getBoundingClientRect().top
      const viewportCenter = window.innerHeight / 2
      let closestIndex = 0
      let minDistance = Infinity

      articlesRef.current.forEach((article, index) => {
        if (!article) return

        const articleTop = article.getBoundingClientRect().top
        const articleCenter = articleTop + article.offsetHeight / 2
        const distance = Math.abs(viewportCenter - articleCenter)

        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })

      if (closestIndex !== activeArticleIndex) {
        setActiveArticleIndex(closestIndex)
      }

      if (trackLineRef.current && circlesRef.current[closestIndex]) {
        const activeCircle = circlesRef.current[closestIndex]
        if (activeCircle && timelineContainerRef.current) {
          const circleRect = activeCircle.getBoundingClientRect()
          const containerRect =
            timelineContainerRef.current.getBoundingClientRect()
          const circleCenterY =
            circleRect.top - containerRect.top + circleRect.height / 2
          const highlightHeight = 40
          const highlightPosition = circleCenterY - highlightHeight / 2

          trackLineRef.current.style.setProperty(
            '--highlight-position',
            `${highlightPosition}px`
          )
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeArticleIndex, timeline?.length])

  // Handlers
  const handleSelection = (key: React.Key) => {
    const keyString = String(key)
    setCurrentId(keyString)
    setStore(storeKey, keyString)
    props.onTabChange?.(keyString)
  }

  const handleContinueReading = (index: number, id: string) => {
    props.onContinueReading?.(index, id)
    setExpandedArticles(prev => new Set(prev).add(id))
  }

  // Format date function
  const formatDate = (input: string | number) => {
    const date = new Date(input)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  // Loading state
  if (changelogsLoading || timelineLoading) {
    return (
      <Component {...getBaseProps()}>
        <div className="flex items-center justify-center p-8">
          <div className="text-default-500">Loading timeline...</div>
        </div>
      </Component>
    )
  }

  // Error state
  if (error) {
    return (
      <Component {...getBaseProps()}>
        <div className="flex items-center justify-center p-8">
          <div className="text-danger-500">Failed to load timeline</div>
        </div>
      </Component>
    )
  }

  // Empty state
  if ((!changelogs || changelogs.length === 0) && emptyContent) {
    return <Component {...getBaseProps()}>{emptyContent}</Component>
  }

  if (!changelogs || changelogs.length === 0) {
    return (
      <Component {...getBaseProps()}>
        <div className="flex items-center justify-center p-8">
          <div className="text-default-500">No changelogs available</div>
        </div>
      </Component>
    )
  }

  return (
    <Component {...getBaseProps()}>
      <TimelineTabs
        changelogs={changelogs}
        currentId={currentId}
        onSelectionChange={handleSelection}
      />

      <div
        className="relative md:max-w-3xl lg:max-w-6xl"
        ref={timelineContainerRef}>
        <div className="relative">
          {/* Track Line */}
          <div
            className="absolute top-0 hidden w-px -translate-x-1/2 items-center md:block lg:left-1/3"
            ref={trackLineRef}
            style={{
              height: trackLineHeight > 0 ? `${trackLineHeight}px` : 'auto',
              background: `linear-gradient(
                to bottom,
                #d4d4d8 0%,
                #d4d4d8 calc(var(--highlight-position, 0px) - 20px),
                #0070f3 calc(var(--highlight-position, 0px) - 20px),
                #0070f3 calc(var(--highlight-position, 0px) + 20px),
                #d4d4d8 calc(var(--highlight-position, 0px) + 20px),
                #d4d4d8 100%
              )`
            }}>
            <div
              className="bg-primary absolute right-0 left-0 transition-all duration-300"
              style={{
                top: `calc(var(--highlight-position, 0px) - 0px)`,
                opacity: 0.8,
                display: activeArticleIndex >= 0 ? 'block' : 'none'
              }}
            />
          </div>

          {/* Responsive Layouts */}
          <MobileLayout
            timeline={timeline}
            formatDate={props.formatDate || formatDate}
            customFormatDate={props.formatDate}
            continueReadingText={
              props.continueReadingText || 'Continue Reading'
            }
            showReadMore={props.showReadMore}
            readMoreText={props.readMoreText || 'Read More'}
            showRating={props.showRating}
            expandedArticles={expandedArticles}
            onContinueReading={handleContinueReading}
          />

          <DesktopLayout
            timeline={timeline}
            formatDate={props.formatDate || formatDate}
            customFormatDate={props.formatDate}
            continueReadingText={
              props.continueReadingText || 'Continue Reading'
            }
            showReadMore={props.showReadMore}
            readMoreText={props.readMoreText || 'Read More'}
            showRating={props.showRating}
            expandedArticles={expandedArticles}
            activeArticleIndex={activeArticleIndex}
            onContinueReading={handleContinueReading}
            articlesRef={articlesRef}
            circlesRef={circlesRef}
            device={device}
          />
        </div>
      </div>
    </Component>
  )
})

Timeline.displayName = 'Timeline'

export { Timeline }
