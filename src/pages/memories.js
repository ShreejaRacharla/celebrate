import { useState } from 'react'
import { Heart, Camera, Star, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Memories() {
  const [selectedImage, setSelectedImage] = useState(null)

  const memories = [
    {
      id: 1,
      title: "Our First Date",
      date: "Forever in my heart",
      emoji: "☕",
      color: "from-pink-400 to-rose-500",
      description: "The day everything changed"
    },
    {
      id: 2,
      title: "Beach Sunset",
      date: "Summer of Love",
      emoji: "🌅",
      color: "from-orange-400 to-pink-500",
      description: "Watching the sunset together"
    },
    {
      id: 3,
      title: "Movie Nights",
      date: "Every Weekend",
      emoji: "🎬",
      color: "from-purple-400 to-pink-500",
      description: "Cuddling on the couch"
    },
    {
      id: 4,
      title: "Dancing Together",
      date: "Magical Moments",
      emoji: "💃",
      color: "from-blue-400 to-purple-500",
      description: "Lost in our own world"
    },
    {
      id: 5,
      title: "Cooking Together",
      date: "Sweet Memories",
      emoji: "👨‍🍳",
      color: "from-green-400 to-teal-500",
      description: "Creating delicious memories"
    },
    {
      id: 6,
      title: "Stargazing",
      date: "Endless Nights",
      emoji: "⭐",
      color: "from-indigo-400 to-purple-500",
      description: "Counting stars with you"
    },
    {
      id: 7,
      title: "Road Trips",
      date: "Adventures Await",
      emoji: "🚗",
      color: "from-yellow-400 to-orange-500",
      description: "Every journey is better with you"
    },
    {
      id: 8,
      title: "Rainy Days",
      date: "Cozy Moments",
      emoji: "🌧️",
      color: "from-gray-400 to-blue-500",
      description: "Dancing in the rain"
    },
    {
      id: 9,
      title: "Our Future",
      date: "Forever & Always",
      emoji: "💍",
      color: "from-rose-400 to-red-500",
      description: "Building dreams together"
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Camera className="w-16 h-16 text-valentine-pink" />
              <Heart className="absolute -bottom-1 -right-1 w-6 h-6 text-valentine-rose fill-valentine-rose animate-pulse" />
            </div>
          </div>
          <h1 className="font-romantic text-5xl md:text-7xl text-valentine-rose mb-4">
            Our Sweet Memories
          </h1>
          <p className="text-valentine-rose/60 max-w-xl mx-auto">
            Every moment with you is a treasure I'll cherish forever 💕
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-12 flex items-center justify-center space-x-4">
          <div className="h-px bg-valentine-pink/30 flex-1 max-w-[100px]" />
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-4 h-4 text-valentine-pink fill-valentine-pink animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="h-px bg-valentine-pink/30 flex-1 max-w-[100px]" />
        </div>

        {/* Memory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              onClick={() => setSelectedImage(memory)}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image Placeholder with Gradient */}
                <div className={`aspect-square bg-gradient-to-br ${memory.color} flex items-center justify-center`}>
                  <span className="text-8xl group-hover:scale-125 transition-transform duration-500">
                    {memory.emoji}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-romantic text-2xl mb-1">{memory.title}</h3>
                    <p className="text-sm opacity-80">{memory.description}</p>
                  </div>
                </div>

                {/* Heart Badge */}
                <div className="absolute top-4 right-4">
                  <Heart className="w-8 h-8 text-white fill-white/50 group-hover:fill-valentine-pink group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* Sparkle Effect */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-6 h-6 text-yellow-300 animate-spin-slow" />
                </div>
              </div>

              {/* Title Below */}
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-valentine-dark">{memory.title}</h3>
                <p className="text-sm text-valentine-rose/60">{memory.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-valentine-dark" />
              </button>

              <div className={`aspect-video bg-gradient-to-br ${selectedImage.color} flex items-center justify-center`}>
                <span className="text-9xl animate-bounce-slow">{selectedImage.emoji}</span>
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-black text-sm text-valentine-rose/60">{selectedImage.date}</span>
                </div>
                <h2 className="text-black font-romantic text-4xl text-valentine-rose mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-black text-valentine-rose/70 mb-6">
                  {selectedImage.description}
                </p>
                <div className="text-black flex items-center space-x-4">
                  <button className="text-black flex items-center space-x-2 bg-valentine-pink text-white px-6 py-3 rounded-full hover:bg-valentine-rose transition-colors">
                    <Heart className="w-5 h-5 text-black " />
                    <span className='text-black '>Love This Memory</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg">
            <p className="text-black font-romantic text-2xl text-valentine-rose">
              "The best is yet to come" 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}