'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"; 
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-950 min-h-screen">
     
      
      {/* Main Content */}
      <main className="pl-64">
        <div className="relative h-screen">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))"
            }}
          />
          
          {/* Hero Content */}
          <div className="relative flex items-center justify-center h-full px-8">
            <div className="text-center text-white space-y-6">
              <motion.h1 
                className="text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Aklilu Tamirat
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center space-x-2 text-2xl text-gray-200"
              >
                <span>I&apos;m a</span>
                <span className="text-blue-400 font-semibold">Developer</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-8"
              >
                <Link href='/portfolio'>
                <Button 
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 rounded-full"
                >
                  View My Work
                </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}



