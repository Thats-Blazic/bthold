"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/company" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                BT
              </span>
              <span className="text-gray-700 text-lg font-light ml-1">
                HOLDING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#836b55] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:contact@BTholding.com" className="flex items-center text-gray-600 hover:text-[#836b55] transition-colors">
              <Mail size={16} className="mr-2" />
              <span className="text-sm">contact@BTholding.com</span>
            </a>
            <Button 
              className="bg-[#836b55] hover:bg-[#6d5a4a] text-white px-6 py-2 rounded-lg font-medium transition-colors"
              onClick={() => router.push('/contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-[#836b55] hover:bg-gray-50 px-4 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <a href="mailto:contact@BTholding.com" className="flex items-center py-3 px-4 text-gray-700 hover:text-[#836b55] transition-colors">
                <Mail size={16} className="mr-2" />
                <span>contact@BTholding.com</span>
              </a>
              <Button 
                className="w-full bg-[#836b55] hover:bg-[#6d5a4a] text-white py-3 rounded-lg font-medium transition-colors mt-2"
                onClick={() => {
                  router.push('/contact')
                  setIsMenuOpen(false)
                }}
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}