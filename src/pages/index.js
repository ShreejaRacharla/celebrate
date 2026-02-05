import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Heart, 
  Sparkles, 
  Gift, 
  Mail, 
  Star, 
  Music, 
  Camera, 
  MessageCircleHeart,
  ArrowRight
} from 'lucide-react'
import AnimatedHeart from '@/components/AnimatedHeart'
import LoveCard from '@/components/LoveCard'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      title: "Love Letter",
      description: "Write a heartfelt message to your special someone",
      icon: Mail,
    },
    {
      title: "Sweet Memories",
      description: "Relive your beautiful moments together",
      icon: Camera,
    },
    {
      title: "Special Surprise",
      description: "A magical proposal awaits you",
      icon: Gift,
    },
    {
      title: "Countdown",
      description: "Count every second until Valentine's Day",
      icon: Star,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 animate-float">
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <Star className="w-6 h-6 text-valentine-pink fill-valentine-pink" />
          </div>
          <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '0.5s' }}>
            <Music className="w-7 h-7 text-valentine-rose" />
          </div>

          {/* Main Content */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-6">
              <AnimatedHeart size="xl" />
            </div>

            <h1 className="font-romantic text-6xl md:text-8xl text-valentine-rose mb-4">
              Happy Valentine's Day
            </h1>
            <h2 className="text-2xl md:text-4xl text-valentine-pink font-light mb-8">
              A Special Day for Special Love 💕
            </h2>

            <p className="text-lg text-valentine-rose/70 max-w-2xl mx-auto mb-10">
              Every love story is beautiful, but ours is my favorite. 
              Let's celebrate this special day together with all our hearts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/love-letter"
                className="group flex items-center space-x-2 bg-gradient-valentine text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircleHeart className="w-5 h-5" />
                <span>Read My Love Letter</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/proposal"
                className="group flex items-center space-x-2 bg-white text-valentine-pink px-8 py-4 rounded-full font-medium border-2 border-valentine-pink hover:bg-valentine-pink hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-5 h-5 fill-current text-black" />
                <span className='text-black'>Will You Be Mine?</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Background Hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          {[...Array(6)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-valentine-pink/10 fill-valentine-pink/10"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                width: `${40 + i * 10}px`,
                height: `${40 + i * 10}px`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Love Quote Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block">
            <span className="font-romantic text-8xl text-valentine-pink/20 absolute -top-8 -left-6">"</span>
            <p className="font-romantic text-3xl md:text-5xl text-valentine-rose leading-relaxed">
              You are my today and all of my tomorrows
            </p>
            <span className="font-romantic text-8xl text-valentine-pink/20 absolute -bottom-12 -right-6">"</span>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-5 h-5 text-valentine-pink fill-valentine-pink animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-romantic text-5xl text-valentine-rose text-center mb-4">
            Explore Our Love
          </h2>
          <p className="text-valentine-rose/60 text-center mb-12">
            Discover all the beautiful surprises I've prepared for you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <LoveCard
                key={feature.title}
                {...feature}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-valentine rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute fill-white"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${20 + Math.random() * 30}px`,
                    height: `${20 + Math.random() * 30}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <Sparkles className="w-12 h-12 mx-auto mb-4 animate-spin-slow" />
              <h2 className="font-romantic text-4xl md:text-5xl mb-4">
                You Mean Everything to Me
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Every moment with you is a treasure. Thank you for being my everything.
                This Valentine's Day, let's make more beautiful memories together.
              </p>
              <Link
                href="/memories"
                className="inline-flex items-center space-x-2 bg-white text-valentine-pink px-8 py-4 rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Camera className="w-5 h-5 text-black" />
                <span className='text-black'>See Our Memories</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}