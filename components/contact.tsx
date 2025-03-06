"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "Atom",
    email: "loneyasir55@gmail.com",
    message: "Contact me For any Business related Information",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your backend
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
              <p className="text-gray-300 mb-8">
                Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing
                new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-300">hello@example.com</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 cyberpunk-border p-6 rounded-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="bg-gray-800 border-gray-700"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/80">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

