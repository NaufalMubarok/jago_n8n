'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const pathname = usePathname();
  if (!pathname) return null;
  const disableButton = ["/checkout", "/projects/"];
  const showButton = !disableButton.some((prefix) => pathname.startsWith(prefix));

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

        {/* Menu */}
        {showButton && <div className="flex items-center gap-3 sm:gap-6 text-gray-700 font-medium text-sm sm:text-base">
          <button
            type="button"
            onClick={() => scrollToId('products')}
            className="hidden sm:inline-block hover:text-green-600 transition"
          >
            Produk
          </button>           
          <button
            type="button"
            onClick={() => scrollToId('pricing')}
            className="px-3 sm:px-4 py-1.5 rounded-full border border-gray-300 text-xs sm:text-sm hover:border-green-500 hover:text-green-700 transition"
          >
            Lihat Daftar Paket
          </button>
        </div>}
      </div>
    </nav>
  )
}
