"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-8 top-0 bottom-0 z-40 flex items-center pointer-events-none">
      <div className="h-[50vh] w-[1px] bg-muted relative">
        <motion.div
          className="absolute top-0 w-[3px] bg-primary rounded-full"
          style={{
            height: `${scrollProgress * 100}%`,
            left: "-1px",
          }}
        />
        <div className="absolute -left-[3px] top-0 w-2 h-2 rounded-full bg-primary" />

        <div className="absolute -rotate-90 origin-left -left-2 -top-8 text-xs uppercase tracking-widest text-primary">
          Scroll
        </div>
      </div>
    </div>
  )
}

