import { useEffect, useState } from 'react'

// Credits: https://usehooks.com/useWindowSize/
// License: https://github.com/gragland/usehooks/blob/master/LICENSE
export function useWindowSize() {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

export function useToggle(initial, whenSetToTrueCb, whenSetToFalseCb) {
  whenSetToTrueCb = whenSetToTrueCb || null
  if (whenSetToTrueCb !== null && typeof whenSetToTrueCb !== 'function') {
    throw new Error('whenSetToTrueCb not a function')
  }

  whenSetToFalseCb = whenSetToFalseCb || null
  if (whenSetToFalseCb !== null && typeof whenSetToFalseCb !== 'function') {
    throw new Error('whenSetToFalseCb not a function')
  }

  if (typeof initial !== 'boolean') {
    throw new Error('Non-boolean supplied for useToggle initial value')
  }
  const [bool, setBool] = useState(initial)

  const toggle = (e) => {
    if (bool === true) {
      setBool(false)
      if (whenSetToFalseCb !== null) {
        whenSetToFalseCb(e)
      }
    } else {
      setBool(true)
      if (whenSetToTrueCb !== null) {
        whenSetToTrueCb(e)
      }
    }
  }

  return [bool, toggle]
}
