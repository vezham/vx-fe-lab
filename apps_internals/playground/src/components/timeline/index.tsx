// import { useEffect, useRef, useState } from 'react'
// import { forwardRef } from '@vezham/react-utils'
// import {
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader
// } from '@vezham/react/v2'
// import { Chip } from '@vezham/react/v2'
// import { Image } from '@vezham/react/v2'
// import { Link } from '@vezham/react/v2'
// import { Tab, Tabs } from '@vezham/react/v2'
// import { useStore, useString } from '../../hooks'
// import { FeedbackRating } from '../feedback-rating'
// import { Props, useProps } from './types'
// const Timeline = forwardRef<'div', Props>((props, ref) => {
//   const formatDate = (input: string | number) => {
//     const date = new Date(input)
//     return date.toLocaleDateString('en-US', {
//       month: 'long',
//       day: 'numeric',
//       year: 'numeric'
//     })
//   }
//   const {
//     Component,
//     getBaseProps,
//     getContainerProps,
//     getRightWrapperProps,
//     getTabsProps,
//     getArticleProps,
//     getTrackProps,
//     getCircleProps,
//     getHeadingProps,
//     getProseProps,
//     getContinueMainContainerProps,
//     getContinueOverlayProps,
//     getWrapperProps,
//     getAuthorProps,
//     getDateProps,
//     getAuthorTextProps,
//     getTagsContainerProps,
//     getLinkProps,
//     getRatingProps,
//     tabs: customTabs,
//     formatDate: customFormatDate,
//     showRating,
//     showReadMore,
//     readMoreText,
//     continueReadingText,
//     onTabChange,
//     onContinueReading,
//     device,
//     direction,
//     changelogs = [],
//     timeline = [],
//     selectedChangelogId,
//     storeKey = 'changelogid',
//     changelogsLoading,
//     timelineLoading,
//     error,
//     emptyContent
//   } = useProps({
//     ...props,
//     ref
//   })
//   // Use store hooks if no data is provided via props
//   const { get: getStore, set: setStore } = useStore
//   const initialId =
//     selectedChangelogId || getStore(storeKey) || changelogs?.[0]?.id
//   const [currentId, setCurrentId] = useState<string>(initialId || '')
//   useEffect(() => {
//     if (selectedChangelogId) {
//       setCurrentId(selectedChangelogId)
//     }
//   }, [selectedChangelogId])
//   // Determine which data to use
//   const displayChangelogs = changelogs
//   const displayTimeline = timeline
//   // State for expanded content
//   const [expandedArticles, setExpandedArticles] = useState<Set<string>>(
//     new Set()
//   )
//   // State for active article during scroll
//   const [activeArticleIndex, setActiveArticleIndex] = useState<number>(0)
//   const [trackLineHeight, setTrackLineHeight] = useState<number>(0)
//   const articlesRef = useRef<(HTMLDivElement | null)[]>([])
//   const timelineContainerRef = useRef<HTMLDivElement>(null)
//   const trackLineRef = useRef<HTMLDivElement>(null)
//   const circlesRef = useRef<(HTMLDivElement | null)[]>([])
//   const handleSelection = (key: React.Key) => {
//     const keyString = String(key)
//     setCurrentId(keyString)
//     setStore(storeKey, keyString)
//     if (onTabChange) {
//       onTabChange(keyString)
//     }
//   }
//   const handleContinueReading = (index: number, id: string) => {
//     if (onContinueReading) {
//       onContinueReading(index, id)
//     }
//     // Add to expanded articles
//     setExpandedArticles(prev => new Set(prev).add(id))
//   }
//   // Calculate track line height based on last circle position
//   useEffect(() => {
//     if (!displayTimeline?.length || !circlesRef.current.length) return
//     const lastCircle = circlesRef.current[displayTimeline.length - 1]
//     if (lastCircle && timelineContainerRef.current) {
//       const circleRect = lastCircle.getBoundingClientRect()
//       const containerRect = timelineContainerRef.current.getBoundingClientRect()
//       // Calculate position relative to container
//       const circleCenterY =
//         circleRect.top - containerRect.top + circleRect.height / 2
//       setTrackLineHeight(circleCenterY)
//     }
//   }, [displayTimeline, activeArticleIndex])
//   // Scroll tracking to update active article and highlight position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!articlesRef.current.length || !timelineContainerRef.current) return
//       const containerTop =
//         timelineContainerRef.current.getBoundingClientRect().top
//       const viewportCenter = window.innerHeight / 2
//       // Find which article is closest to the center of the viewport
//       let closestIndex = 0
//       let minDistance = Infinity
//       articlesRef.current.forEach((article, index) => {
//         if (!article) return
//         const articleTop = article.getBoundingClientRect().top
//         const articleCenter = articleTop + article.offsetHeight / 2
//         const distance = Math.abs(viewportCenter - articleCenter)
//         if (distance < minDistance) {
//           minDistance = distance
//           closestIndex = index
//         }
//       })
//       if (closestIndex !== activeArticleIndex) {
//         setActiveArticleIndex(closestIndex)
//       }
//       // Update track line highlight position based on active circle
//       if (trackLineRef.current && circlesRef.current[closestIndex]) {
//         const activeCircle = circlesRef.current[closestIndex]
//         if (activeCircle && timelineContainerRef.current) {
//           const circleRect = activeCircle.getBoundingClientRect()
//           const containerRect =
//             timelineContainerRef.current.getBoundingClientRect()
//           // Calculate position relative to container
//           const circleCenterY =
//             circleRect.top - containerRect.top + circleRect.height / 2
//           const highlightHeight = 40 // Height of the primary color section
//           const highlightPosition = circleCenterY - highlightHeight / 2
//           trackLineRef.current.style.setProperty(
//             '--highlight-position',
//             `${highlightPosition}px`
//           )
//         }
//       }
//     }
//     window.addEventListener('scroll', handleScroll)
//     handleScroll() // Initial check
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [activeArticleIndex, displayTimeline?.length])
//   const timelineLast = displayTimeline ? displayTimeline.length - 1 : -1
//   // Render loading state
//   if (changelogsLoading || timelineLoading) {
//     return (
//       <Component {...getBaseProps()}>
//         <div className="flex items-center justify-center p-8">
//           <div className="text-default-500">Loading timeline...</div>
//         </div>
//       </Component>
//     )
//   }
//   // Render error state
//   if (error) {
//     return (
//       <Component {...getBaseProps()}>
//         <div className="flex items-center justify-center p-8">
//           <div className="text-danger-500">Failed to load timeline</div>
//         </div>
//       </Component>
//     )
//   }
//   // Render empty state
//   if ((!displayChangelogs || displayChangelogs.length === 0) && emptyContent) {
//     return <Component {...getBaseProps()}>{emptyContent}</Component>
//   }
//   if (!displayChangelogs || displayChangelogs.length === 0) {
//     return (
//       <Component {...getBaseProps()}>
//         <div className="flex items-center justify-center p-8">
//           <div className="text-default-500">No changelogs available</div>
//         </div>
//       </Component>
//     )
//   }
//   return (
//     <Component {...getBaseProps()}>
//       {displayChangelogs && displayChangelogs.length > 0 ? (
//         <div>
//               <Tabs
//         aria-label="Timeline tabs"
//         variant="light"
//         color="primary"
//         selectedKey={currentId} // ✅ controlled
//         onSelectionChange={handleSelection}
//         className="flex w-full justify-center py-8">
//         {changelogs.map(({ id, name }) => (
//           <Tab key={id} title={name} />
//         ))}
//       </Tabs>
//         </div>
//       ) : null}
//       {/* Timeline Content */}
//       <div
//         className="relative md:max-w-3xl lg:max-w-6xl"
//         ref={timelineContainerRef}>
//         <div className="relative">
//           <div
//             className="absolute top-0 hidden w-px -translate-x-1/2 items-center md:block lg:left-1/3"
//             ref={trackLineRef}
//             style={{
//               height: trackLineHeight > 0 ? `${trackLineHeight}px` : 'auto',
//               background: `linear-gradient(
//                 to bottom,
//                 #d4d4d8 0%,
//                 #d4d4d8 calc(var(--highlight-position, 0px) - 20px),
//                 #0070f3 calc(var(--highlight-position, 0px) - 20px),
//                 #0070f3 calc(var(--highlight-position, 0px) + 20px),
//                 #d4d4d8 calc(var(--highlight-position, 0px) + 20px),
//                 #d4d4d8 100%
//               )`
//             }}>
//             {/* Animated primary section that moves to active circle */}
//             <div
//               className="bg-primary absolute right-0 left-0 transition-all duration-300"
//               style={{
//                 top: `calc(var(--highlight-position, 0px) - 0px)`,
//                 opacity: 0.8,
//                 display: activeArticleIndex >= 0 ? 'block' : 'none'
//               }}
//             />
//           </div>
//           {/* Mobile Cards Layout (below md) */}
//           <div className="block md:hidden">
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//               {displayTimeline &&
//                 displayTimeline.map(
//                   (
//                     {
//                       id,
//                       title,
//                       blocks,
//                       published_at,
//                       cover,
//                       authors,
//                       tags,
//                       continue_reading = false,
//                       url
//                     },
//                     index
//                   ) => {
//                     const isExpanded = expandedArticles.has(id)
//                     return (
//                       <Card
//                         key={id}
//                         className="rounded-2xl p-2 shadow-sm transition-shadow duration-300 hover:shadow-md">
//                         {/* Card Header */}
//                         <CardHeader className="flex items-center justify-between">
//                           <time
//                             dateTime={published_at}
//                             className="text-default-foreground text-sm font-medium">
//                             {customFormatDate
//                               ? customFormatDate(published_at)
//                               : formatDate(published_at)}
//                           </time>
//                           {authors?.length > 0 && (
//                             <span className="text-default-400 text-xs">
//                               by {authors[0]?.name}
//                             </span>
//                           )}
//                         </CardHeader>
//                         <CardBody>
//                           {/* Title */}
//                           <h3 className="text-default-foreground mb-2 line-clamp-2 text-base font-semibold">
//                             {title}
//                           </h3>
//                           {/* Tags */}
//                           {tags && tags.length > 0 && (
//                             <div className="mb-3 flex flex-wrap gap-1">
//                               {tags.slice(0, 3).map((tag, tagIndex) => (
//                                 <Chip
//                                   key={tagIndex}
//                                   variant="flat"
//                                   color="primary"
//                                   size="sm"
//                                   className="text-xs">
//                                   {tag?.name}
//                                 </Chip>
//                               ))}
//                               {tags.length > 3 && (
//                                 <Chip
//                                   variant="flat"
//                                   size="sm"
//                                   className="text-xs">
//                                   +{tags.length - 3}
//                                 </Chip>
//                               )}
//                             </div>
//                           )}
//                           {/* Content with continue reading */}
//                           <div className="relative">
//                             <div
//                               className={`prose prose-slate text-default-500 max-w-none text-sm ${
//                                 continue_reading && !isExpanded
//                                   ? 'line-clamp-4 overflow-hidden'
//                                   : ''
//                               }`}
//                               dangerouslySetInnerHTML={{
//                                 __html:
//                                   blocks
//                                     ?.map(content => content.text)
//                                     .join('') || ''
//                               }}
//                             />
//                             {/* Continue Reading Button */}
//                             {continue_reading && !isExpanded && (
//                               <div className="mt-4 flex items-center justify-center">
//                                 <Button
//                                   variant="flat"
//                                   size="sm"
//                                   className="text-xs shadow-sm"
//                                   onPress={() =>
//                                     handleContinueReading(index, id)
//                                   }>
//                                   {continueReadingText}
//                                 </Button>
//                               </div>
//                             )}
//                           </div>
//                           {/* Cover Image */}
//                           {cover && (
//                             <Image
//                               alt={cover?.alt_text || title}
//                               src={cover?.url}
//                               className="mt-3 rounded-lg"
//                             />
//                           )}
//                         </CardBody>
//                         {/* Footer Links - Always visible, inside the card */}
//                         <CardFooter className="border-default-200 flex flex-col items-start justify-start border-t pt-4">
//                           {/* Read More Link */}
//                           {showReadMore && url && (
//                             <Link
//                               showAnchorIcon
//                               size='lg'
//                               href={url}
//                               className="text-xs">
//                               {readMoreText}
//                             </Link>
//                           )}
//                           {/* Rating */}
//                           {showRating && (
//                             <div className="mt-2 gap-1">
//                               <FeedbackRating type="star" scale={5} size="sm" />
//                             </div>
//                           )}
//                         </CardFooter>
//                       </Card>
//                     )
//                   }
//                 )}
//             </div>
//           </div>
//           {/* Desktop Timeline Layout (md and above) */}
//           <div className="hidden space-y-8 md:block">
//             {displayTimeline &&
//               displayTimeline.map(
//                 (
//                   {
//                     id,
//                     title,
//                     blocks,
//                     published_at,
//                     cover,
//                     authors,
//                     tags,
//                     continue_reading = false,
//                     url
//                   },
//                   index
//                 ) => {
//                   const isLast = index === timelineLast
//                   const tagsLength = tags?.length || 0
//                   const isExpanded = expandedArticles.has(id)
//                   const isActive = activeArticleIndex === index
//                   return (
//                     <article
//                       key={id}
//                       ref={el => {
//                         articlesRef.current[index] = el
//                       }}
//                       {...getArticleProps()}
//                       className="group relative lg:grid lg:grid-cols-12 lg:gap-8">
//                       {/* Left Column - Date, Author & Tags */}
//                       <div className="md:pl-5 lg:col-span-4 lg:pl-0 lg:text-right">
//                         <div {...getWrapperProps()}>
//                           <div
//                             {...getAuthorProps()}
//                             className="mb-4 flex flex-col justify-between md:flex-row lg:flex-col lg:items-end lg:justify-end">
//                             {/* Date */}
//                             <div>
//                               <dd className="text-default-foreground text-sm leading-6 whitespace-nowrap">
//                                 <time
//                                   dateTime={published_at}
//                                   {...getDateProps()}>
//                                   {customFormatDate
//                                     ? customFormatDate(published_at)
//                                     : formatDate(published_at)}
//                                 </time>
//                               </dd>
//                               {/* Author */}
//                               {authors?.map((author, authorIndex) => (
//                                 <div
//                                   key={authorIndex}
//                                   {...getAuthorTextProps()}
//                                   className="text-default-400 text-sm">
//                                   by{' '}
//                                   <span className="text-default-400">
//                                     {author?.name}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                             {/* Tags - single line, no wrap */}
//                             {tags && tags.length > 0 && (
//                               <div
//                                 {...getTagsContainerProps(tagsLength)}
//                                 className="mt-3 flex flex-nowrap gap-2 overflow-x-auto lg:justify-end lg:overflow-visible">
//                                 {tags.map((tag, tagIndex) => (
//                                   <Chip
//                                     key={tagIndex}
//                                     variant="flat"
//                                     color="primary"
//                                     size="sm"
//                                     className="flex-shrink-0">
//                                     {tag?.name}
//                                   </Chip>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                       {/* Center - Timeline circle */}
//                       <div
//                         className="absolute top-0 hidden -translate-x-1/2 md:block lg:left-1/3"
//                         ref={el => {
//                           circlesRef.current[index] = el
//                         }}>
//                         <div
//                           className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
//                             isActive
//                               ? 'border-primary bg-primary shadow-primary/50 scale-125 shadow-lg'
//                               : 'border-zinc-300 bg-white dark:border-zinc-700 dark:bg-black'
//                           }`}
//                         />
//                       </div>
//                       <div className="hover:bg-default-50 rounded-xl lg:col-span-7 lg:mt-0 lg:px-5">
//                         <div className="md:pl-5 lg:pl-0">
//                           {/* Title */}
//                           <h3
//                             {...getHeadingProps()}
//                             className="text-default-foreground text-xl font-semibold">
//                             {title}
//                           </h3>
//                           {/* Content with continue reading */}
//                           <div
//                             className={`relative text-base ${
//                               continue_reading && !isExpanded ? 'min-h-40' : ''
//                             }`}>
//                             <div
//                               {...getProseProps()}
//                               className={`prose prose-slate text-default-500 max-w-none text-justify ${
//                                 continue_reading && !isExpanded
//                                   ? 'line-clamp-5 overflow-hidden'
//                                   : ''
//                               }`}
//                               dangerouslySetInnerHTML={{
//                                 __html:
//                                   blocks
//                                     ?.map(content => content.text)
//                                     .join('') || ''
//                               }}
//                             />
//                             {/* Continue Reading Overlay with blur effect */}
//                             {continue_reading && !isExpanded && (
//                               <div className="absolute inset-x-0 bottom-0 flex h-32 items-end justify-center bg-gradient-to-t from-white via-white/90 to-transparent dark:from-black dark:via-black/90">
//                                 <Button
//                                   variant="flat"
//                                   size="sm"
//                                   className="z-10 mb-2 shadow-md"
//                                   onPress={() =>
//                                     handleContinueReading(index, id)
//                                   }>
//                                   {continueReadingText}
//                                 </Button>
//                               </div>
//                             )}
//                           </div>
//                           {/* Cover Image */}
//                           {cover && (
//                             <Image
//                               isZoomed
//                               width={300}
//                               alt={cover?.alt_text || title}
//                               src={cover?.url}
//                               className="mt-4"
//                             />
//                           )}
//                           {/* Read More Link and Rating side by side */}
//                           <div className="mt-4 grid gap-2">
//                             {/* Read More Link */}
//                             {showReadMore && url && (
//                               <Link
//                                 showAnchorIcon
//                                 size='lg'
//                                 href={url}
//                                 {...getLinkProps()}
//                                >
//                                 {readMoreText}
//                               </Link>
//                             )}
//                             {/* Rating - aligned to right */}
//                             {showRating && (
//                               <div
//                                 {...getRatingProps()}
//                                 className="flex items-center gap-2">
//                                 <FeedbackRating
//                                   type="star"
//                                   scale={5}
//                                 />
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </article>
//                   )
//                 }
//               )}
//             {/* Empty timeline state */}
//             {(!displayTimeline || displayTimeline.length === 0) &&
//             emptyContent ? (
//               emptyContent
//             ) : !displayTimeline || displayTimeline.length === 0 ? (
//               <div className="flex items-center justify-center p-8">
//                 <div className="text-default-500">
//                   No timeline items available
//                 </div>
//               </div>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </Component>
//   )
// })
// Timeline.displayName = 'Timeline'
// export { Timeline }
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
