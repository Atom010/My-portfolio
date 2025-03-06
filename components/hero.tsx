"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Three.js setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const count = 2000

    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
      colors[i] = Math.random()
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      alphaMap: new THREE.TextureLoader().load("/particle.png"),
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    camera.position.z = 3

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      particles.rotation.x += 0.0005
      particles.rotation.y += 0.0005

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      scene.remove(particles)
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Creative Developer & Designer
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I build exceptional digital experiences that live at the intersection of design and technology.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

