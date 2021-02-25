import { useState, useCallback, useLayoutEffect, useEffect } from 'react'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

function getSize(el) {
  if (!el) {
    return {
      width: 0,
      height: 0
    }
  }
  return {
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}

function useIsomorphicComponentSize(ref) {
  const [ComponentSize, setComponentSize] = useState(getSize(ref ? ref.current : {}))
  const handleResize = useCallback(
    function handleResize() {
      if (ref?.current) {
        setComponentSize(getSize(ref.current))
      }
    },
    [ref]
  )

  useIsomorphicLayoutEffect(
    function() {
      if (!ref?.current || ref?.current.retry) {
        return
      }

      handleResize()

      if (typeof ResizeObserver === 'function' && ref?.current && !ref?.current.retry) {
        let resizeObserver = new ResizeObserver(function() {
          handleResize()
        })
        resizeObserver.observe(ref?.current)
        return function() {
          resizeObserver.disconnect(ref?.current)
          resizeObserver = null
        }
      } else if (ref?.current && !ref?.current.retry) {
        window.addEventListener('resize', handleResize)
        return function() {
          window.removeEventListener('resize', handleResize)
        }
      }
    },
    [ref?.current]
  )

  return ComponentSize
}

export default useIsomorphicComponentSize
