import {useState} from 'react'
import {useScrollPosition} from '@n8tb1t/use-scroll-position'

const useScrollBasedOpacity = ({
  maxOpacity = 1,
  minOpacity = 0,
  sensitivity = 2,
  duration = 1,
} = {}) => {
  const [opacity, setOpacity] = useState(maxOpacity)

  useScrollPosition(({prevPos, currPos}) => {
    const scrollBasedOpacity = (
      1 -
      Math.min(
        ((Math.abs(currPos.y) * sensitivity) / window.innerHeight) * duration,
        1,
      )
    ).toFixed(2)
    if (scrollBasedOpacity > maxOpacity) {
      setOpacity(maxOpacity)
    } else if (scrollBasedOpacity < minOpacity) {
      setOpacity(minOpacity)
    } else {
      setOpacity(scrollBasedOpacity)
    }
  })
  return opacity
}

export default useScrollBasedOpacity
