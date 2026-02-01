import { useState, useEffect } from 'react'
import { Heart, Feather, Sparkles, Send, BookHeart } from 'lucide-react'

export default function LoveLetter() {
  const [isRevealed, setIsRevealed] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)

  const letterLines = [
    "My Dearest Love,",
    "",
    "From the moment I met you, my life changed forever.",
    "You brought colors to my black and white world,",
    "And music to the silence of my heart.",
    "",
    "Every day with you feels like a beautiful dream,",
    "A dream I never want to wake up from.",
    "Your smile lights up my darkest days,",
    "And your love gives me strength to face anything.",
    "",
    "You are my best friend, my soulmate, my everything.",
    "Thank you for choosing me, for loving me,",
    "For being the most amazing person in my life.",
    "",
    "This Valentine's Day and every day,",
    "I promise to love you more than yesterday,",
    "But less than tomorrow.",
    "",
    "Forever and Always Yours,",
    "With All My Love 💕"
  ]

  useEffect(() => {
    if (isRevealed && currentLine < letterLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [isRevealed, currentLine])

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookHeart className="w-16 h-16 text-valentine-pink animate-float" />
          </div>
          <h1 className="font-romantic text-5xl md:text-7xl text-valentine-rose mb-4">
            A Letter For You
          </h1>
          <p className="text-valentine-rose/60">
            Words from the bottom of my heart 💕
          </p>
        </div>

        {/* Letter */}
        <div className="relative">
          {/* Envelope */}
          {!isRevealed && (
            <div 
              onClick={() => setIsRevealed(true)}
              className="bg-gradient-valentine rounded-3xl p-12 cursor-pointer hover:scale-105 transition-transform duration-500 shadow-2xl"
            >
              <div className="bg-white/20 rounded-2xl p-8 text-center">
                <Heart className="w-20 h-20 text-white mx-auto mb-6 animate-heartbeat" />
                <h2 className="font-romantic text-4xl text-white mb-4">
                  Click to Open Your Love Letter
                </h2>
                <p className="text-white/80">
                  A special message awaits inside...
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <Sparkles 
                      key={i}
                      className="w-6 h-6 text-yellow-300 animate-sparkle"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Letter Content */}
          {isRevealed && (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
              {/* Letter Header */}
              <div className="bg-valentine-light p-6 border-b border-valentine-pink/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-8 h-8 text-valentine-pink fill-valentine-pink animate-pulse" />
                    <span className="font-romantic text-2xl text-valentine-rose">
                      My Love Letter
                    </span>
                  </div>
                  <Feather className="w-6 h-6 text-valentine-rose animate-wiggle" />
                </div>
              </div>

              {/* Letter Body */}
              <div className="p-8 md:p-12 min-h-[500px] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cline%20x1%3D%220%22%20y1%3D%2230%22%20x2%3D%22100%22%20y2%3D%2230%22%20stroke%3D%22%23FFE4EC%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')] bg-repeat">
                <div className=" text-black font-romantic text-xl md:text-2xl text-valentine-dark leading-loose">
                  {letterLines.slice(0, currentLine).map((line, index) => (
                    <p 
                      key={index}
                      className="animate-fade-in min-h-[2em]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {line || '\u00A0'}
                    </p>
                  ))}
                  {currentLine < letterLines.length && (
                    <span className="inline-block w-0.5 h-6 bg-valentine-pink animate-pulse ml-1" />
                  )}
                </div>
              </div>

              {/* Letter Footer */}
              {currentLine >= letterLines.length && (
                <div className="p-6 bg-valentine-light/50 border-t border-valentine-pink/20 animate-fade-in">
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={() => {
                        setIsRevealed(false)
                        setCurrentLine(0)
                      }}
                      className="flex items-center space-x-2 bg-valentine-pink text-white px-6 py-3 rounded-full hover:bg-valentine-rose transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      <span>Read Again</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 animate-float">
            <Heart className="w-12 h-12 text-valentine-pink fill-valentine-pink opacity-50" />
          </div>
          <div className="absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: '1s' }}>
            <Heart className="w-8 h-8 text-valentine-rose fill-valentine-rose opacity-50" />
          </div>
        </div>

        {/* Additional Love Notes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
          {[
            { emoji: "💕", text: "You make my heart skip a beat" },
            { emoji: "🌹", text: "You're my forever Valentine" },
            { emoji: "✨", text: "Every moment with you is magic" },
          ].map((note, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="text-4xl mb-3 block">{note.emoji}</span>
              <p className="font-romantic text-xl text-valentine-rose">{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}