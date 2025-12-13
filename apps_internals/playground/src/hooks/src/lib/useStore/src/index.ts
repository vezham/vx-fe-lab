import { useLogger } from '../../useLogger/src'
import { Props } from './types'

const NAMESPACE = 'useStore'

let pretext = 'vapp'
let version = '1.0.4'

function getKey(key: string) {
  return `vezham-ls-${pretext}-${version}-${key}`
}

const init = (props: Props) => {
  if (props.pretext) {
    pretext = props.pretext
  }
  if (props.version) {
    version = props.version
  }
}

// wjdlz/NOTE: has is for keys and contains for values.
const useStore = {
  get: (key: string, initial_value?: string) => {
    try {
      const item = window.localStorage.getItem(getKey(key))
      if (item) {
        if (item !== 'undefined') {
          return item
        }
      }

      return initial_value || ''
    } catch (error) {
      useLogger.error(NAMESPACE, `key | ${getKey(key)} | err: `, error)
      return initial_value || ''
    }
  },
  has: (key: string) => {
    return useStore.get(key) ? true : false
  },
  set: (key: string, value: any) => {
    return window.localStorage.setItem(getKey(key), value)
  },
  delete: (key: string) => {
    return window.localStorage.removeItem(getKey(key))
  },
  purge: () => {
    return window.localStorage.clear()
  }
}

export { init as initStore, useStore }
