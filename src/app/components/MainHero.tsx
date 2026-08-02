"use client"

import Link from "next/link"
import { useRef } from "react"

interface HeroProps {
  title: string
  subtitle: string
  primaryCta?: {
    text: string
    onClick?: () => void
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

export default function MainHero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToSlide = (slideIndex: number) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const slideWidth = carousel.offsetWidth
    carousel.scrollTo({
      left: slideWidth * slideIndex,
      behavior: "smooth",
    })
  }

  const slides = [
    {
      content: (
        <section
          className="w-full bg-[url('/hero-image1.jpg')] bg-cover bg-center bg-no-repeat opacity-0 animate-pulse text-white py-24 text-center min-h-[500px] flex items-center justify-center relative "
          style={{ animation: "fadeIn 1.5s ease-out 0.5s forwards" }}
        >
          <div className="max-w-3xl px-6">
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl mb-8 text-blue-100">{subtitle}</p>
            {(primaryCta || secondaryCta) && (
              <div className="flex gap-4 justify-center flex-wrap">
                {primaryCta && (
                  <button
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    onClick={primaryCta.onClick}
                  >
                    {primaryCta.text}
                  </button>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-hover transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {secondaryCta.text}
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>
      ),
    },
    {
      content: (
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          className="w-full"
          alt="Slide 2"
        />
      ),
    },
    {
      content: (
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full"
          alt="Slide 3"
        />
      ),
    },
    {
      content: (
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full"
          alt="Slide 4"
        />
      ),
    },
  ]

  return (
    <div className="pt-20 relative">
      {/* Carousel container — no snap, overflow hidden */}
      <div
        ref={carouselRef}
        className="flex w-full overflow-x-hidden scroll-smooth"
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-item relative min-w-full">
            {slide.content}

            {/* Navigation buttons per slide */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
              <button
                className="btn btn-circle"
                onClick={() => scrollToSlide((index - 1 + slides.length) % slides.length)}
              >
                ❮
              </button>
              <button
                className="btn btn-circle"
                onClick={() => scrollToSlide((index + 1) % slides.length)}
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}