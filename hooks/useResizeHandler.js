import { useState, useEffect } from "react"

export default function useResizeHandler() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 992 && width <= 1600) {
        setScale(0.9)
      } else if (width >= 700 && width <= 767) {
        setScale(0.8)
      } else if (width >= 600 && width < 700) {
        setScale(0.75)
      } else if (width <= 600) {
        setScale(0.5)
      } else {
        setScale(1)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Call once to set initial state

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return scale
}

