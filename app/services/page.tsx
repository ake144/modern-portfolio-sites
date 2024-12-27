'use client'




import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Palette, Smartphone, Globe, Layers, Users, Megaphone } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.",
    features: ["Wireframing", "Prototyping", "User Testing", "Interface Design"],
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "Designing responsive and native mobile applications for iOS and Android platforms.",
    features: ["App Design", "Responsive Design", "Native UI", "Mobile UX"],
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Developing modern and responsive websites that deliver exceptional user experiences.",
    features: ["Website Design", "Landing Pages", "E-commerce", "Web Apps"],
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Creating cohesive brand identities that communicate your values and connect with your audience.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Providing expert advice on design strategy, user experience, and digital transformation.",
    features: ["Design Strategy", "UX Audit", "Design Systems", "Workshop"],
  },
  {
    icon: Megaphone,
    title: "Marketing Design",
    description: "Designing effective marketing materials that drive engagement and conversions.",
    features: ["Social Media", "Email Design", "Ad Campaigns", "Marketing Materials"],
  },
]

export default function Services() {
  return (
    <div className="pl-64 min-h-screen bg-gray-950 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-800 h-full">
                  <CardContent className="p-6 space-y-4">
                    <service.icon className="h-12 w-12 text-blue-400" />
                    <h3 className="text-xl text-gray-50 font-semibold">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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

