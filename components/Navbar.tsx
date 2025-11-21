'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-gray-200' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 text-2xl font-bold text-gray-900"
        >
          <span className="relative h-8 w-8 md:h-9 md:w-9">
            <Image
              src="/logo-n8n.png"
              alt="Jago n8n"
              fill
              sizes="36px"
              className="object-contain"
            />
          </span>

          <span className="-ml-1">
            Jago<span className="text-green-600">n8n</span>
          </span>
        </Link>


        {/* Menu simple */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <Link
            href="/#products"
            className="hidden sm:inline-block hover:text-green-600 transition"
          >
            Workflow
          </Link>
          <Link
            href="/#pricing"
            className="px-4 py-1.5 rounded-full border border-gray-300 text-sm hover:border-green-500 hover:text-green-700 transition"
          >
            Beli Paket
          </Link>
        </div>
      </div>
    </nav>
  )
}
