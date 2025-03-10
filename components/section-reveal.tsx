"use client"

import { type ReactNode, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  immediate?: boolean
}

export default function SectionReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  immediate = false,
}: SectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isInitiallyVisible, setIsInitiallyVisible] = useState(false)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
      setIsInitiallyVisible(isVisible || immediate)
    }
  }, [immediate])

  const getInitialValues = () => {
    if (isInitiallyVisible) {
      return { opacity: 1, y: 0, x: 0 }
    }

    switch (direction) {
      case "up":
        return { opacity: 0, y: 50, x: 0 }
      case "down":
        return { opacity: 0, y: -50, x: 0 }
      case "left":
        return { opacity: 0, y: 0, x: 50 }
      case "right":
        return { opacity: 0, y: 0, x: -50 }
      default:
        return { opacity: 0, y: 50, x: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialValues()}
      animate={isInView || isInitiallyVisible ? { opacity: 1, y: 0, x: 0 } : getInitialValues()}
      transition={{ duration: 0.6, delay: isInitiallyVisible ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

