"use client"

import PageHero from "../components/page-hero"
import CtaBand from "../components/cta-band"
import GetStartedModal from "../components/get-started-modal"
import { useState } from "react"

export default function TaekwondoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGetStartedClick = () => {
    setIsModalOpen(true)
  }

  const classes = [
    {
      name: "Little Tigers",
      ageGroup: "Ages 4-6",
      description: "Introduction to martial arts fundamentals",
      schedule: "Mon & Wed, 4:00 PM",
    },
    {
      name: "Young Warriors",
      ageGroup: "Ages 7-9",
      description: "Building technique and discipline",
      schedule: "Tue & Thu, 4:30 PM",
    },
    {
      name: "Teen Achievers",
      ageGroup: "Ages 10-13",
      description: "Advanced techniques and belt progression",
      schedule: "Mon & Wed, 5:30 PM",
    },
    {
      name: "Adult Masters",
      ageGroup: "Ages 14+",
      description: "Competitive training and advanced forms",
      schedule: "Tue & Thu, 6:30 PM",
    },
  ]

  return (
    <main>
      <PageHero title="Taekwondo Programs for All Levels" subtitle="Build confidence, discipline, and strength" />

      <section className="bg-gray-50 py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Philosophy</h2>
          <p className="text-gray-700 text-lg mb-8">
            At UPF, we believe Taekwondo is more than just martial arts—it&apos;s a path to personal growth. Our
            family-oriented approach ensures every student develops the discipline, respect, and confidence to succeed
            both on and off the mat.
          </p>
          <button
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all"
            onClick={handleGetStartedClick}
          >
            Join the Family
          </button>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Classes</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((cls, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border-t-4 border-orange-600 shadow-md">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">{cls.name}</h3>
              <p className="text-gray-700 font-medium mb-2">{cls.ageGroup}</p>
              <p className="text-gray-600 mb-4">{cls.description}</p>
              <p className="text-orange-600 font-semibold mb-4">{cls.schedule}</p>
              <button
                className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                onClick={handleGetStartedClick}
              >
                Sign Up
              </button>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Ready to Join? Get Started" buttonText="Join Now" onButtonClick={handleGetStartedClick} />
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
