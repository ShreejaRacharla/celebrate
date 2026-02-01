import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now()
      const heart = {
        id,
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 3 + 4,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.3,
      }
      setHearts((prev) => [...prev, heart])

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id))
      }, (heart.duration + heart.delay) * 1000)
    }

    const interval = setInterval(createHeart, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            animation: `floatUp ${heart.duration}s ease-out ${heart.delay}s forwards`,
            opacity: heart.opacity,
          }}
        >
          <Heart
            className="text-valentine-pink fill-valentine-pink"
            style={{ width: heart.size, height: heart.size }}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: ${0.5};
          }
          90% {
            opacity: ${0.5};
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}