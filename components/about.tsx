"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import aboutImg from '@/public/placeholder.jpg'

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Three.js",
    "Framer Motion",
    "Tailwind CSS",
    "Node.js",
    "UI/UX Design",
    "Figma",
  ]

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary">About</span> Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 cyberpunk-border rounded-lg overflow-hidden">
                <Image
                  src={aboutImg}
                  fill
                  alt="Profile"
                  
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Creative Developer with a passion for building immersive digital experiences
              </h3>

              <p className="text-gray-300 mb-6">
                I'm a developer and designer specializing in building exceptional digital experiences. With a focus on
                interactive web applications, I combine technical expertise with creative design to create memorable
                user experiences.
              </p>

              <p className="text-gray-300 mb-8">
                My approach to development is centered around creating clean, efficient code that delivers seamless
                interactions and engaging visuals. I'm constantly exploring new technologies and techniques to push the
                boundaries of what's possible on the web.
              </p>

              <div>
                <h4 className="text-lg font-semibold mb-3">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-secondary/20 text-primary-foreground border-primary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

