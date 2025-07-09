'use client'
import { useState, useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { info } from '@/data/information'

export default function HomeSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const sectionElement = sectionRef.current
    if (sectionElement) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting)
        },
        { threshold: 0.2 }
      )
      observer.observe(sectionElement)

      return () => {
        observer.unobserve(sectionElement)
      }
    }
  }, [])

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      const header = document.querySelector('header')
      const headerHeight = header ? header.clientHeight : 0
      const y =
        aboutSection.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        40
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-br from-gray-500/30 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {info.name}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                🚀 {info.title}
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {info.description}{' '}
              <span className="italic text-blue-400">{info.location}</span>
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleScrollDown}
          className="text-blue-400 hover:bg-blue-50 hover:text-blue-400 rounded-full"
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </div>
    </section>
  )
}
