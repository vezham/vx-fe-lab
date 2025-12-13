import { Dispatch, SetStateAction, useCallback, useState } from 'react'

interface useOutput {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  clear: () => void
}

function useString(default_value?: string): useOutput {
  const [value, setValue] = useState(default_value || '')

  const clear = useCallback(() => setValue(x => ''), [])

  return { value, setValue, clear }
}

export { useString }
