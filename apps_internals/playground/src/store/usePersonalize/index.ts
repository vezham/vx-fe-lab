import { useQuery } from '@tanstack/react-query'

import { Personal } from './action'
import { RQPersonalize } from './types'

const CK_PERSONAL = 'personal'

const usePersonalize = {
  list: (rq: RQPersonalize) => {
    console.log(Personal.list(rq))
    return useQuery({
      queryKey: [CK_PERSONAL, rq],
      queryFn: () => Personal.list(rq)
    })
  }
}

export { usePersonalize }
