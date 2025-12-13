import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useString } from '../src'

describe('useString', () => {
  it('should initialize', () => {
    const { result } = renderHook(() => useString())

    expect(result.current.value).not.toBeTruthy()
  })
})
