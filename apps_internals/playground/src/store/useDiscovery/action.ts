import { trendingData } from './data'
import { RQDiscovery, TopTrends } from './types'

const trends = {
  list: async (_rq: RQDiscovery): Promise<TopTrends> => {
    return Promise.resolve(trendingData)
  }
}

export { trends }
