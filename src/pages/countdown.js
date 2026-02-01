import { useState, useEffect } from 'react'
import { Heart, Clock, Calendar, Sparkles, Gift, Star } from 'lucide-react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isValentinesDay, setIsValentinesDay] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      let valentinesDay = new Date(currentYear, 1, 14) // February 14

      // If Valentine's Day has passed, set for next year
      if (now > valentinesDay) {
        valentinesDay = new Date(currentYear + 1, 1, 14)
      }

      const difference = valentinesDay - now

      if (difference <= 0) {
        setIsValentinesDay(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeCard = ({ value, label, icon: Icon }) => (
    <div className="group">
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <Icon className="w-8 h-8 text-valentine-pink mx-auto mb-4 group-hover:animate-bounce" />
        <div className="font-bold text-5xl md:text-7xl text-valentine-dark mb-2 font-mono">
          {String(value).padStart(2, '0')}
        </div>
        <div className="text-valentine-rose/60 text-sm md:text-base uppercase tracking-wider">
          {label}
        </div>
      </div>
    </div>
  )

  const loveMessages = [
    "Every second with you is precious",
    "Counting moments until I hold you",
    "My heart beats only for you",
    "Love grows stronger each day",
    "You're worth every wait",
    "Soon we'll celebrate our love",
  ]

  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loveMessages.length)
    }, 5000)
    return () => clearInterval(messageInterval)
  }, [])

  if (isValentinesDay) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="relative inline-block mb-8">
            <Heart className="w-32 h-32 text-valentine-pink fill-valentine-pink animate-heartbeat" />
            <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-yellow-400 animate-spin-slow" />
          </div>
          <h1 className="font-romantic text-6xl md:text-8xl text-valentine-rose mb-6">
            Happy Valentine's Day!
          </h1>
          <p className="text-2xl text-valentine-rose/70 mb-8">
            Today is the day of love! 💕
          </p>
          <div className="flex justify-center space-x-4 text-6xl">
            {['💕', '🌹', '💖', '✨', '🥰'].map((emoji, i) => (
              <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Clock className="w-16 h-16 text-valentine-pink animate-pulse" />
              <Heart className="absolute -bottom-1 -right-1 w-6 h-6 text-valentine-rose fill-valentine-rose" />
            </div>
          </div>
          <h1 className="font-romantic text-5xl md:text-7xl text-valentine-rose mb-4">
            Countdown to Love
          </h1>
          <p className="text-valentine-rose/60">
            Every moment brings us closer to Valentine's Day 💕
          </p>
        </div>

        {/* Countdown Cards */}
        <div className="text-black grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <TimeCard value={timeLeft.days} label="Days" icon={Calendar} />
          <TimeCard value={timeLeft.hours} label="Hours" icon={Clock} />
          <TimeCard value={timeLeft.minutes} label="Minutes" icon={Star} />
          <TimeCard value={timeLeft.seconds} label="Seconds" icon={Heart} />
        </div>

        {/* Animated Message */}
        <div className="text-center mb-12">
          <div className="bg-gradient-valentine text-white rounded-full px-8 py-4 inline-block shadow-lg">
            <p className="font-romantic text-2xl animate-fade-in" key={currentMessage}>
              {loveMessages[currentMessage]} 💕
            </p>
          </div>
        </div>

        {/* Love Statistics */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-12 text-black ">
          <h2 className="font-romantic text-3xl text-valentine-rose text-center mb-8">
            Our Love in Numbers 💕
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "∞", label: "Reasons I Love You" },
              { number: "24/7", label: "Thinking of You" },
              { number: "100%", label: "Committed to You" },
              { number: "1", label: "True Love" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-2xl bg-valentine-light hover:scale-105 transition-transform"
              >
                <div className="font-bold text-3xl text-valentine-pink mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-valentine-rose/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wish List */}
        <div className="bg-gradient-valentine rounded-3xl p-8 text-white text-center">
          <Gift className="w-12 h-12 mx-auto mb-4 animate-bounce" />
          <h2 className="font-romantic text-3xl mb-4">What I'm Planning For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "💐 Beautiful Flowers",
              "🍫 Sweet Chocolates",
              "💌 Love Letters",
              "🌹 Romantic Dinner",
              "🎁 Special Surprise",
              "💕 Endless Hugs",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Floating Hearts Animation */}
        <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-valentine-pink/30 fill-valentine-pink/30 animate-float"
              style={{
                left: `${i * 10 + 5}%`,
                bottom: `${Math.random() * 50}px`,
                width: `${20 + Math.random() * 20}px`,
                height: `${20 + Math.random() * 20}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}