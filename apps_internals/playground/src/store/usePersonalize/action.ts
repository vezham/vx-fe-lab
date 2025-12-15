import { personalizationsData } from './data'
import { Personalize } from './types'
import { RQPersonalize } from './types'

const Personal = {
  list: async (rq: RQPersonalize): Promise<Personalize> => {
    return Promise.resolve(personalizationsData[0])
  }
}

export { Personal }
