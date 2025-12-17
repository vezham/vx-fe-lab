import { Icon } from '@iconify/react'

import { ScrollShadow } from '@vezham/react/v2'

import { CardPostTrending } from '../../components-store/v-atoms/card-post-trending'
import { useDiscovery } from '../../store/useDiscovery'
import { Text } from '../text'
import { Variants } from './variant'

const Trending = () => {
  const slots = Variants()
  const { data: trends } = useDiscovery.list({})

  return (
    <div className={slots.base()}>
      <div className="flex items-center gap-2">
        <Icon
          icon="mdi:trending-up"
          width={24}
          height={24}
          className="text-default-400"
        />

        <Text content="Top Trending" variant="title" vc="secondary" />
      </div>
      <ScrollShadow
        orientation="horizontal"
        show_track={false}
        className={slots.wrapper()}>
        {trends &&
          trends?.map((trend, index) => (
            <CardPostTrending key={index} {...trend} trend_no={index + 1} />
          ))}
      </ScrollShadow>
    </div>
  )
}

export { Trending }
