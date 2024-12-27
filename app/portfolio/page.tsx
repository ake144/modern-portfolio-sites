'use client'


import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Redesign",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "Modern banking application design with focus on security and ease of use.",
    link: "#",
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    image: "/placeholder.svg?height=600&width=800",
    description: "Comprehensive brand identity system for a tech startup.",
    link: "#",
  },
  {
    title: "Social Media Platform",
    category: "Web & Mobile Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "Cross-platform social media application with real-time features.",
    link: "#",
  },
]

export default function Portfolio() {
  return (
    <div className="pl-64 min-h-screen bg-gray-950 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">My Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group bg-gray-900 border-gray-800 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                    </div>
                    <div className="p-6 space-y-4">
                      <Badge className="bg-blue-500/10 text-blue-400">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl text-gray-50 font-semibold">{project.title}</h3>
                      <p className="text-gray-400">{project.description}</p>
                      <Link
                        href={project.link}
                        className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Project →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}

