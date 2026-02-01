import Navbar from './Navbar'
import FloatingHearts from './FloatingHearts'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <footer className="relative z-10 text-center py-6 text-valentine-rose">
        <p className="font-romantic text-2xl">Made with 💕 for you</p>
      </footer>
    </div>
  )
}