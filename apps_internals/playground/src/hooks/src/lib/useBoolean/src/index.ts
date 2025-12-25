import { Dispatch, SetStateAction, useCallback, useState } from 'react'

interface useOutput {
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}

function useBoolean(default_value = false): useOutput {
  const [value, setValue] = useState(default_value)

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue(x => !x), [])

  return { value, setValue, setTrue, setFalse, toggle }
}

export { useBoolean }
