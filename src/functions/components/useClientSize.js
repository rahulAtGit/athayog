import { useState, useEffect } from "react"

function useClientSize() {
  const isClient = typeof window === "object"

  const getSize = () => {
    return {
      cWidth: isClient ? window.outerWidth : undefined,
      cHeight: isClient ? window.outerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    setWindowSize(getSize())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}
export default useClientSize
