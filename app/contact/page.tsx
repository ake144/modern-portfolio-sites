"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+44 123 456 7890",
    subdetails: "Mon-Fri 9am-6pm",
  },
  {
    icon: Mail,
    title: "Email",
    details: "alex@example.com",
    subdetails: "Online support",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "London, UK",
    subdetails: "Visit by appointment",
  },
]

export default function Contact() {
  return (
    <div className="pl-64 min-h-screen bg-gray-950 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Contact Info */}
        <section className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <info.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl text-gray-50 font-semibold">{info.title}</h3>
                <p className="text-blue-400">{info.details}</p>
                <p className="text-gray-400">{info.subdetails}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Contact Form */}
        <section className="max-w-2xl mx-auto">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-2xl text-gray-50 font-bold text-center">Send Message</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Your Name</label>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Your Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Subject</label>
                  <Input 
                    placeholder="Project Inquiry" 
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Message</label>
                  <Textarea 
                    placeholder="Your message here..." 
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </motion.div>
    </div>
  )
}

