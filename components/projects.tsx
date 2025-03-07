"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import img1 from '@/public/placeholder-user.jpg'
import img2 from '@/public/placeholder-logo.png'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Immersive 3D Portfolio",
      description: "A portfolio website with interactive 3D elements and animations built with Three.js and React.",
      image: img1,
      tags: ["React", "Three.js", "Framer Motion", "GSAP"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for e-commerce businesses with real-time analytics and inventory management.",
      image: img1,
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "AI Content Generator",
      description: "A tool that uses AI to generate marketing content and social media posts for businesses.",
      image: img1,
      tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-black/50 border border-gray-800 overflow-hidden cyberpunk-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    <CardContent className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-gray-300 mb-6">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button variant="outline" className="border-primary/50 hover:bg-primary/20">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </Button>
                        <Button className="bg-primary hover:bg-primary/80">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

