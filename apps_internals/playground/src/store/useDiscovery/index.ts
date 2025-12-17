import { useQuery } from '@tanstack/react-query'

import { trends } from './action'
import { RQDiscovery } from './types'

const CK_TRENDS = 'trends'

const useDiscovery = {
  list: (rq: RQDiscovery) => {
    return useQuery({
      queryKey: [CK_TRENDS, rq],
      queryFn: () => trends.list(rq)
    })
  }
}

export { useDiscovery }
