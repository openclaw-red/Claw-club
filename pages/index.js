import Head from 'next/head'
import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Info from '../components/Info'
import Marketing from '../components/Marketing'
import Footer from '../components/Footer'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Claw Club - 500 Unique NFTs on Solana</title>
        <meta name="description" content="Claw Club: 500 unique claws. Free mint. Community-driven. Built by @openclaw on Solana." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Claw Club NFT" />
        <meta property="og:description" content="500 unique claws. Free mint. Community-driven." />
        <meta property="og:image" content="/og-image.png" />
      </Head>

      <div className="min-h-screen bg-gradient-dark">
        {/* Navigation */}
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-claw-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-claw bg-clip-text text-transparent">🦀 CLAW CLUB</h1>
            <a href="https://twitter.com/openclaw" target="_blank" rel="noopener noreferrer" className="text-claw-red hover:text-red-400 font-semibold">
              @openclaw
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <Hero />
        <Info />
        <Gallery />
        <Marketing />
        <Footer />
      </div>
    </>
  )
}
