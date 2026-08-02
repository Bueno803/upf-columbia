"use client"

// import Hero from "./components/hero"
// import ServiceCards from "./components/service-cards"
// import Testimonials from "./components/testimonials"
import Hero from "./components/Hero"
import ServiceCards from "./components/service-card"
import Testimonials from "./components/Testimonials"
import CtaBand from "./components/cta-band"
import GetStartedModal from "./components/get-started-modal"
import Link from "next/link"
import { useState } from "react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGetStartedClick = () => {
    setIsModalOpen(true)
  }

  const services = [
    {
      icon: "🥋",
      title: "Taekwondo",
      description:
        "Build confidence, discipline, and strength through our comprehensive martial arts programs for all ages. Learn proper technique, self-defense skills, and develop mental resilience.",
      link: "/taekwondo",
      image: `${basePath}/ICO_Coach.jpg`,
    },
    {
      icon: "💪",
      title: "Personal Training",
      description:
        "Achieve your fitness goals with expert one-on-one guidance tailored to your needs. Get customized workouts, nutrition advice, and accountability from certified trainers.",
      link: "/personal-training",
      image: `${basePath}/ICO_Coach.jpg`,
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Programs & Camp",
      description:
        "Summer camps, after-school programs, and online learning designed to keep families moving and connected. Fun activities for kids while building healthy habits.",
      link: "/summer-camp",
      image: `${basePath}/ICO_Coach.jpg`,
    },
  ]

  const testimonials = [
    {
      text: "My son went from shy to confident. The Taekwondo program changed his life!",
      author: "Sarah M., Parent",
    },
    {
      text: "Best personal trainer ever. I achieved my goals in 3 months!",
      author: "John D., Client",
    },
    {
      text: "Our kids love the summer camp. Great instructors and so much fun!",
      author: "Emma L., Parent",
    },
  ]

  return (
    <main>
      <Hero
        primaryCta={{
          text: "Get Started",
          onClick: handleGetStartedClick,
        }}
        secondaryCta={{
          text: "Explore Our Services",
          href: "#services",
        }}
      />

      <ServiceCards services={services} />

      <section className="bg-blue-50 py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg mb-8">
            Ultimate Personal Fitness is more than a gym—we&apos;re a family dedicated to helping people of all ages
            discover their potential. Since our founding, we&apos;ve been committed to creating a welcoming, supportive
            community where everyone can grow stronger, healthier, and more confident.
          </p>
          <Link href="/about" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all">
            Learn More About Us
          </Link>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />

      <CtaBand
        title="Ready to Start Your Journey?"
        buttonText="Get Started Today"
        onButtonClick={handleGetStartedClick}
      />
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
