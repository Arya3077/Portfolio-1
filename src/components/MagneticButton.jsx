import React, { useRef, useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * MagneticButton provides subtle pointer-following behavior on desktop devices
 * with fine pointers, while safely falling back to standard behavior on touch
 * devices and when prefers-reduced-motion is enabled.
 */
const MagneticButton = ({ children, className = '', strength = 0.18, maxOffset = 8, ...props }) => {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const prefersReduced = useReducedMotion()
  const [canHover, setCanHover] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
      setCanHover(mediaQuery.matches)
      const handler = (e) => setCanHover(e.matches)
      mediaQuery.addEventListener?.('change', handler)
      return () => mediaQuery.removeEventListener?.('change', handler)
    }
  }, [])

  const handleMouseMove = (e) => {
    if (prefersReduced || !canHover || !ref.current) return
    const { clientX, clientY } = e
    const rect = ref.current.getBoundingClientRect()
    const middleX = clientX - (rect.left + rect.width / 2)
    const middleY = clientY - (rect.top + rect.height / 2)

    // Bound offset to prevent unpredictable hit targets
    const rawX = middleX * strength
    const rawY = middleY * strength
    const boundedX = Math.max(-maxOffset, Math.min(maxOffset, rawX))
    const boundedY = Math.max(-maxOffset, Math.min(maxOffset, rawY))

    setPosition({ x: boundedX, y: boundedY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 280, damping: 20, mass: 0.15 }}
      className="inline-block"
    >
      <motion.div
        whileTap={prefersReduced ? undefined : { scale: 0.96 }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default MagneticButton
