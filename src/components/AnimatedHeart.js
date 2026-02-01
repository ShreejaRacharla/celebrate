import { Heart } from 'lucide-react'

export default function AnimatedHeart({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  }

  return (
    <div className={`relative ${className}`}>
      <Heart
        className={`${sizes[size]} text-valentine-pink fill-valentine-pink animate-heartbeat heart-shadow`}
      />
      <Heart
        className={`${sizes[size]} text-valentine-rose fill-valentine-rose absolute top-0 left-0 animate-ping opacity-30`}
      />
    </div>
  )
}