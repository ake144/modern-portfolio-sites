'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

const skills = [
  { name: "Web Design", progress: 95 },
  { name: "UI/UX Design", progress: 88 },
  { name: "Content Creation", progress: 85 },
  { name: "Graphic Design", progress: 90 },
  { name: "Web Development", progress: 92 },
]

const facts = [
  { number: "50+", label: "Projects Completed" },
  { number: "5+", label: "Years Experience" },
  { number: "5+", label: "Happy Clients" },
  { number: "2", label: "Awards Won" },
]

export default function About() {
  return (
    <div className="pl-64 min-h-screen bg-gray-950 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* About Me */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Hello! I'm Alex Smith, a passionate designer with over 15 years of experience in creating beautiful and functional digital experiences. Based in London, I specialize in UI/UX design, web development, and brand identity.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My approach combines creativity with user-centered design principles to deliver solutions that not only look great but also provide exceptional user experiences.
              </p>
            </div>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-400">Name:</h4>
                    <p className="text-gray-50">Alex Smith</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400">Location:</h4>
                    <p className="text-gray-50"> London, UK</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400">Email:</h4>
                    <p className="text-gray-50">alex@example.com</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400">Available:</h4>
                    <p className="text-green-400">For Freelance and  Job</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">My Skills</h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-green-400">{skill.progress}%</span>
                </div>
                <Progress value={skill.progress} className="h-2 bg-green-800" />
              </div>
            ))}
          </div>
        </section>

        {/* Facts */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">Fun Facts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <h3 className="text-3xl font-bold text-blue-400 mb-2">{fact.number}</h3>
                  <p className="text-gray-400">{fact.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}

