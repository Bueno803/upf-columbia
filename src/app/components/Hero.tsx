"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"

interface Slide {
  title: string
  subtitle: string
  bgClass: string
  bgImage?: string
}

interface HeroProps {
  slides?: Slide[]
  primaryCta?: {
    text: string
    onClick?: () => void
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const defaultSlides: Slide[] = [
  {
    title: "Join Our Champion Team",
    subtitle: "Programs for all ages and goals",
    bgClass: `bg-cover bg-center bg-no-repeat w-full min-h-[400px] sm:min-h-[500px] flex justify-center transition-colors duration-700`,
    bgImage: `${basePath}/IMG_5233_wide.jpg`,
  },
  {
    title: "Summer Camp 2026",
    subtitle: "Taekwondo classes for kids and adults",
    bgClass: `bg-contain bg-center bg-no-repeat w-full min-h-[400px] sm:min-h-[500px] flex justify-center transition-colors duration-700`,
    bgImage: `${basePath}/Summercamp-flyer.png`,
  },
  {
    title: "Family Support Expert Training",
    subtitle: "Expert personal training tailored to you",
    bgClass: `bg-cover bg-top bg-no-repeat w-full min-h-[400px] sm:min-h-[500px] flex justify-center transition-colors duration-700`,
    bgImage: `${basePath}/hero-image1.jpg`,
  },
]

export default function Hero({ slides = defaultSlides, primaryCta, secondaryCta }: HeroProps) {
  const [current, setCurrent] = useState(0)

  const goToPrev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [slides.length])

  const goToNext = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  useEffect(() => {
    const interval = setInterval(goToNext, 10000)
    return () => clearInterval(interval)
  }, [goToNext])

  const slide = slides[current]

  return (
    <section className="pt-20 relative w-full overflow-hidden">
      <div
        className={slide.bgClass}
        style={{ backgroundPosition: 'center -100px', backgroundImage: `url('${slide.bgImage}')` }}
      >
        {/* Left arrow */}
        <button
          onClick={goToPrev}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors cursor-pointer shrink-0"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Center content */}
        <div className="flex flex-col items-center justify-center text-center text-white px-16 sm:px-24 py-16 sm:py-24 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance " 
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), -1px -1px 4px rgba(0,0,0,0.9)' }}
          >{slide.title}</h1>
          {/* <p className="text-base sm:text-lg md:text-xl mb-8 text-blue-100 text-shadow-lg/50 text-shadow-[0_0_3px_#000]">{slide.subtitle}</p> */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="w-full sm:w-auto text-center bg-blue-800 border border-white/30 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all"
                >
                  {secondaryCta.text}
                </Link>
              )}
              {primaryCta && (
                <button
                  className="w-full sm:w-auto bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all cursor-pointer"
                  onClick={primaryCta.onClick}
                >
                  {primaryCta.text}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Right arrow */}
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors cursor-pointer shrink-0"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              i === current ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
