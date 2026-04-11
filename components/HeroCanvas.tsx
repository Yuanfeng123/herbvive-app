'use client'

import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const sage = '74,124,89'
    const nodeCount = 60
    const dist = 128
    const speed = 0.3
    let animId: number

    let nodes: {
      x: number; y: number; vx: number; vy: number
      r: number; p: number; ps: number; star: boolean
    }[] = []

    let width = 0, height = 0

    function resize() {
      width = canvas!.width = canvas!.offsetWidth
      height = canvas!.height = canvas!.offsetHeight
    }

    function makeNode() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: Math.random() * 2.2 + 1,
        p: Math.random() * Math.PI * 2,
        ps: 0.007 + Math.random() * 0.014,
        star: Math.random() > 0.8,
      }
    }

    function init() {
      resize()
      nodes = Array.from({ length: nodeCount }, makeNode)
    }

    function frame() {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.hypot(dx, dy)
          if (d < dist) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${sage},${(1 - d / dist) * 0.32})`
            ctx.lineWidth = 0.55
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
      nodes.forEach((n) => {
        n.p += n.ps
        const glow = Math.sin(n.p) * 0.5 + 0.5
        if (n.star) {
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r + 5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${sage},${glow * 0.07})`
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + (n.star ? glow * 1.5 : 0), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${sage},${n.star ? 0.55 + glow * 0.4 : 0.22 + glow * 0.1})`
        ctx.fill()
        n.x += n.vx
        n.y += n.vy
        if (n.x < -20) n.x = width + 20
        if (n.x > width + 20) n.x = -20
        if (n.y < -20) n.y = height + 20
        if (n.y > height + 20) n.y = -20
      })
      animId = requestAnimationFrame(frame)
    }

    init()
    frame()

    const handleResize = () => resize()
    window.addEventListener('resize', handleResize)

    // Mouse repulsion on hero panels
    const hoverArea = document.querySelector('.hero-panels')
    const handleMouseMove = (e: Event) => {
      const me = e as MouseEvent
      const rect = canvas.getBoundingClientRect()
      const mx = me.clientX - rect.left
      const my = me.clientY - rect.top
      nodes.forEach((n) => {
        const dx = n.x - mx
        const dy = n.y - my
        const d = Math.hypot(dx, dy)
        if (d > 0 && d < 90) {
          n.vx += (dx / d) * 0.09
          n.vy += (dy / d) * 0.09
          const s = Math.hypot(n.vx, n.vy)
          if (s > 1.4) { n.vx = (n.vx / s) * 1.4; n.vy = (n.vy / s) * 1.4 }
        }
      })
    }
    hoverArea?.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      hoverArea?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  )
}
