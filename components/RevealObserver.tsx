'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Stagger children
            entry.target.querySelectorAll('.process-step, .formula-feat').forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * 0.1}s`
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
