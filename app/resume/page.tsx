'use client'



import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const education = [
  {
    degree: "web Design",
    school: "Coursera",
    year: "2010-2012",
    description: "Specialized in digital design and interactive media. Graduated with distinction.",
  },
  {
    degree: "Bachelor in Computer Scient",
    school: "AAU College of computitional science",
    year: "2021-2027",
    description: "Focused on graphic design and visual communication. First class honors.",
  },
]

const experience = [
  {
    role: "Senior UI/UX Designer",
    company: "Creative Studio",
    year: "2018-Present",
    description: "Lead designer for major client projects. Managed team of 5 designers. Increased client satisfaction by 40%.",
    skills: ["UI Design", "UX Research", "Team Leadership"],
  },
  {
    role: "Product Designer",
    company: "Tech Innovations",
    year: "2014-2018",
    description: "Designed user interfaces for mobile applications. Collaborated with development team on 20+ projects.",
    skills: ["Product Design", "Prototyping", "User Testing"],
  },
  {
    role: "Visual Designer",
    company: "Digital Agency",
    year: "2012-2014",
    description: "Created visual designs for websites and marketing materials. Worked with diverse client portfolio.",
    skills: ["Visual Design", "Branding", "Web Design"],
  },
]

export default function Resume() {
  return (
    <div className="pl-64 min-h-screen bg-gray-950 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">Education</h2>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl text-gray-50 font-semibold">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.school}</p>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:text-blue-400  hover:bg-blue-500/10">
                      {edu.year}
                    </Badge>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">Experience</h2>
          <div className="grid gap-6">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl text-gray-50 font-semibold">{exp.role}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:text-blue-400  hover:bg-blue-500/10">
                      {exp.year}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-gray-700 text-gray-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}

