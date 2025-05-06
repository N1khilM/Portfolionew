"use client"

import { useEffect, useRef } from "react"

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Create geometric shapes
    const shapes: any[] = []
    const shapeCount = 15

    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 100 + 50,
        opacity: Math.random() * 0.15 + 0.05,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.001,
        type: Math.floor(Math.random() * 3), // 0: triangle, 1: rectangle, 2: polygon
      })
    }

    const drawTriangle = (x: number, y: number, size: number, rotation: number) => {
      ctx.beginPath()
      ctx.moveTo(x + Math.cos(rotation) * size, y + Math.sin(rotation) * size)
      ctx.lineTo(x + Math.cos(rotation + (2 * Math.PI) / 3) * size, y + Math.sin(rotation + (2 * Math.PI) / 3) * size)
      ctx.lineTo(x + Math.cos(rotation + (4 * Math.PI) / 3) * size, y + Math.sin(rotation + (4 * Math.PI) / 3) * size)
      ctx.closePath()
    }

    const drawRectangle = (x: number, y: number, size: number, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.rect(-size / 2, -size / 2, size, size)
      ctx.restore()
    }

    const drawPolygon = (x: number, y: number, size: number, rotation: number, sides = 5) => {
      ctx.beginPath()
      for (let i = 0; i < sides; i++) {
        const angle = rotation + (i * 2 * Math.PI) / sides
        const pointX = x + Math.cos(angle) * size
        const pointY = y + Math.sin(angle) * size

        if (i === 0) {
          ctx.moveTo(pointX, pointY)
        } else {
          ctx.lineTo(pointX, pointY)
        }
      }
      ctx.closePath()
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      shapes.forEach((shape) => {
        ctx.fillStyle = `rgba(128, 90, 213, ${shape.opacity})`
        ctx.strokeStyle = `rgba(128, 90, 213, ${shape.opacity + 0.1})`
        ctx.lineWidth = 1

        shape.rotation += shape.rotationSpeed

        if (shape.type === 0) {
          drawTriangle(shape.x, shape.y, shape.size, shape.rotation)
        } else if (shape.type === 1) {
          drawRectangle(shape.x, shape.y, shape.size, shape.rotation)
        } else {
          drawPolygon(shape.x, shape.y, shape.size, shape.rotation)
        }

        ctx.fill()
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

