import { useEffect, useRef } from "react"

export const useAnimiationFrame = (cb: (delta: number) => void) => {
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current
        cb(deltaTime)
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    }
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current!)
  }, [])
}
