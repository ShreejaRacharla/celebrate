import { useState, useEffect } from 'react'
import { Heart, Sparkles, PartyPopper, X, Check, Stars } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Proposal() {
  const [answer, setAnswer] = useState(null)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [showConfetti, setShowConfetti] = useState(false)
  const [hoverCount, setHoverCount] = useState(0)

  const noButtonMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't do this to me!",
    "I'm gonna cry...",
    "Please say yes!",
    "Pretty please?",
  ]

  const handleNoHover = () => {
    const maxX = window.innerWidth - 150
    const maxY = window.innerHeight - 100
    setNoButtonPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    })
    setHoverCount((prev) => Math.min(prev + 1, noButtonMessages.length - 1))
  }

  const handleYes = () => {
    setAnswer('yes')
    setShowConfetti(true)
    
    // Fire confetti
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FF6B9D', '#C44569', '#FFE4EC', '#ff69b4', '#ff1493']
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FF6B9D', '#C44569', '#FFE4EC', '#ff69b4', '#ff1493']
      })
    }, 250)
  }

  // Simple confetti alternative if package not installed
  useEffect(() => {
    if (showConfetti && typeof confetti !== 'function') {
      console.log('Confetti celebration! 🎉')
    }
  }, [showConfetti])

  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {answer === null ? (
          <div className="text-center animate-fade-in">
            {/* Animated Hearts */}
            <div className="relative mb-8">
              <div className="flex justify-center items-center space-x-4">
                <Heart className="w-16 h-16 text-valentine-pink fill-valentine-pink animate-bounce" style={{ animationDelay: '0s' }} />
                <Heart className="w-24 h-24 text-valentine-rose fill-valentine-rose animate-heartbeat" />
                <Heart className="w-16 h-16 text-valentine-pink fill-valentine-pink animate-bounce" style={{ animationDelay: '0.5s' }} />
              </div>
              <Sparkles className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-8 h-8 text-yellow-400 animate-spin-slow" />
            </div>

            {/* Question */}
            <h1 className="font-romantic text-5xl md:text-8xl text-valentine-rose mb-6 animate-pulse">
              Will You Be My Valentine?
            </h1>

            <p className="text-xl text-valentine-rose/70 mb-12 max-w-xl mx-auto">
              I've been waiting for this moment to ask you something special... 
              <span className="inline-block animate-bounce">💕</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={handleYes}
                className="group relative flex items-center space-x-3 bg-gradient-valentine text-white px-12 py-5 rounded-full text-xl font-semibold hover:shadow-2xl hover:scale-110 transition-all duration-300"
              >
                <Check className="w-6 h-6" />
                <span>Yes, I'd Love To!</span>
                <Heart className="w-6 h-6 fill-white group-hover:animate-heartbeat" />
              </button>

              <button
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
                className="flex items-center space-x-2 bg-gray-200 text-gray-600 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-gray-300"
                style={
                  hoverCount > 0
                    ? {
                        position: 'fixed',
                        left: noButtonPosition.x,
                        top: noButtonPosition.y,
                        zIndex: 50,
                      }
                    : {}
                }
              >
                <X className="w-5 h-5" />
                <span>{noButtonMessages[hoverCount]}</span>
              </button>
            </div>

            {/* Hint Text */}
            {hoverCount > 3 && (
              <p className="mt-8 text-valentine-pink animate-bounce font-romantic text-xl">
                Just say yes already! 😊
              </p>
            )}
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            {/* Celebration */}
            <div className="relative mb-8">
              <PartyPopper className="w-24 h-24 text-valentine-pink mx-auto animate-bounce" />
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(12)].map((_, i) => (
                  <Heart
                    key={i}
                    className="absolute w-8 h-8 text-valentine-pink fill-valentine-pink animate-ping"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-80px)`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <h1 className="text-white font-romantic text-6xl md:text-8xl text-valentine-rose mb-6">
              Yay! 🎉
            </h1>

            <div className="text-black bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto mb-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Heart className="w-20 h-20 text-valentine-pink fill-valentine-pink animate-heartbeat" />
                  <Stars className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-spin-slow" />
                </div>
              </div>
              
              <h2 className="font-romantic text-4xl text-valentine-rose mb-4">
                You Made Me So Happy!
              </h2>
              
              <p className="text-valentine-rose/70 text-lg mb-6">
                This is the best day ever! I promise to make this the most 
                special Valentine's Day you've ever had. Thank you for saying yes! 
                I love you more than words can express! 💕
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-4xl">
                {['💕', '🌹', '💖', '✨', '🥰', '💝', '💗', '💓'].map((emoji, i) => (
                  <span 
                    key={i} 
                    className="animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setAnswer(null)
                setHoverCount(0)
                setShowConfetti(false)
              }}
              className="text-valentine-pink hover:text-valentine-rose transition-colors font-medium"
            >
              Ask me again? 💕
            </button>
          </div>
        )}
      </div>
    </div>
  )
}