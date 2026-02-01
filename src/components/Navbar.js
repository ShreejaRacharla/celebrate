import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Heart, Mail, Image, HelpCircle, Clock, Menu, X } from 'lucide-react'

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home', icon: Heart },
    { href: '/love-letter', label: 'Love Letter', icon: Mail },
    { href: '/memories', label: 'Memories', icon: Image },
    { href: '/proposal', label: 'Be Mine?', icon: HelpCircle },
    { href: '/countdown', label: 'Countdown', icon: Clock },
  ]

  return (
    <nav className="sticky top-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <Heart 
              className="w-8 h-8 text-valentine-pink fill-valentine-pink animate-heartbeat" 
            />
            <span className="font-romantic text-3xl text-valentine-rose">
              Valentine's
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = router.pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-valentine-pink text-white'
                      : 'text-valentine-rose hover:bg-valentine-light'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'animate-bounce-slow' : ''}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-valentine-rose hover:bg-valentine-light rounded-full transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = router.pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl mb-1 transition-all duration-300 ${
                    isActive
                      ? 'bg-valentine-pink text-white'
                      : 'text-valentine-rose hover:bg-valentine-light'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}