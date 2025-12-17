import { Icon } from '@iconify/react'
import { useRouter } from '@tanstack/react-router'

import { forwardRef } from '@vezham/react-utils'
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from '@vezham/react/v2'

import { Text } from '../../../components/text'
import { Heading } from '../text-heading'
import { Props, useProps } from './types'

const CardPostTrending = forwardRef<'div', Props>((props, ref) => {
  const {
    getBaseProps,
    read_time,
    title,
    authors,
    published_at,
    pinned,
    getLeftWrapperProps,
    getRightWrapperProps,
    getRightFooterProps,
    getContentProps,
    getHeadingProps,
    url
  } = useProps({
    ...props,
    ref
  })

  const router = useRouter()

  const formatDate = (input: string | number) => {
    const date = new Date(input)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const toEstimateTime = (input: string | number) => {
    const time = Number(input)
    const min = Math.floor(time / 60)

    return `${min} ${min === 1 ? 'min' : 'mins'}`
  }

  return (
    <Card
      {...getBaseProps()}
      shadow="none"
      onPress={() => router.navigate({ to: url })}>
      <div {...getLeftWrapperProps()}>
        <Heading {...getHeadingProps()} />
        {pinned ? (
          <Icon
            icon="mdi:star"
            width={24}
            height={24}
            className="text-warning"
          />
        ) : null}
      </div>
      <div {...getRightWrapperProps()}>
        <CardHeader className="flex gap-2 p-0">
          {authors && authors.length > 0 && (
            <>
              <Avatar
                className="text-tiny h-6 w-6"
                src={authors[0].avatar.url}
              />
              <Text
                content={authors[0].name}
                variant="paragraph"
                vc="secondary"
              />
            </>
          )}
        </CardHeader>
        <CardBody className="p-0">
          <Text
            {...getContentProps()}
            content={title}
            variant="title"
            color="default"
          />
        </CardBody>
        <CardFooter {...getRightFooterProps()}>
          <Text
            content={formatDate(published_at)}
            variant="paragraph"
            vc="secondary"
            size="sm"
          />
          <Text content={'.'} variant="title" vc="secondary" />
          <Text
            content={`${toEstimateTime(read_time)} read`}
            variant="paragraph"
            vc="secondary"
            size="sm"
          />
        </CardFooter>
      </div>
    </Card>
  )
})

CardPostTrending.displayName = 'CardPostTrending'

export { CardPostTrending }
