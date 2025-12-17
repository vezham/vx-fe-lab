type avatar = {
  __type: string
  url?: string
}

type Authors = {
  id: string
  name: string
  avatar: avatar
}

type Trends = {
  id: string
  url: string
  title: string
  description: string
  authors: Authors[]
  published_at: string
  pinned: boolean
  read_time?: number
}

type TopTrends = Trends[]

type RQDiscovery = object

export type { RQDiscovery, TopTrends }
