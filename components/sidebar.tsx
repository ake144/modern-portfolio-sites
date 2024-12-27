"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Twitter,Instagram, Twitch} from 'lucide-react'
import { Home, User, FileText, FolderOpen, Settings, Mail, ChevronDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Resume", href: "/resume", icon: FileText },
  { name: "Portfolio", href: "/portfolio", icon: FolderOpen },
  { name: "Services", href: "/services", icon: Settings },
  { name: "Contact", href: "/contact", icon: Mail },
]



const socialMedia = [
    
    {name:Twitter, username:'akeanji'}, {name:Github, username:'akeanji'}, {name:Linkedin,username:'akeanji'}, {name:Instagram,username:'akeanji'}
]

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-950 text-white">
      <div className="flex h-full flex-col">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4 p-6">
          <Avatar className="h-24 w-24 ring-2 ring-blue-500">
            <AvatarImage src="/placeholder.svg" alt="Alex Smith" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold">Aklilu Tamirat</h2>
          
          {/* Social Links */}
          <div className="flex space-x-3">
            {socialMedia.map((social,index) => (
              <Link
                key={index}
                href={`https://${social.name}.com/${social.username}`}
                className="rounded-full bg-gray-300/25  p-2 hover:bg-blue-500 transition-colors"
              >
                <social.name className="h-4 w-4 text-white" />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-4 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-blue-500" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

