"use client"

import PageHero from "../components/page-hero"
import CtaBand from "../components/cta-band"
import GetStartedModal from "../components/get-started-modal"
import { useState } from "react"

export default function PersonalTrainingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGetStartedClick = () => {
    setIsModalOpen(true)
  }

  const programs = [
    {
      icon: "⚖️",
      title: "Weight Loss",
      description: "Personalized nutrition and training plans to help you reach your ideal weight.",
    },
    {
      icon: "🏅",
      title: "Athlete Training",
      description: "Sport-specific conditioning to improve performance and prevent injuries.",
    },
    {
      icon: "🩺",
      title: "Physical Therapy",
      description: "Rehabilitation programs designed to support recovery and mobility.",
    },
    {
      icon: "👥",
      title: "Group Classes",
      description: "High-energy group sessions for motivation and community support.",
    },
    {
      icon: "🏠",
      title: "At-Home Visits",
      description: "Convenient training sessions in the comfort of your home.",
    },
  ]

  return (
    <main>
      <PageHero title="Personal Training" subtitle="Do It For Yourself" />

      <section className="bg-gray-50 py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Transform Your Body, Transform Your Life</h2>
          <p className="text-gray-700 text-lg">
            We are dedicated to helping you achieve your fitness goals. Whether you&apos;re
            starting your fitness journey or looking to take it to the next level, we have a program tailored just for
            you.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Program Options</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <button
                className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                onClick={handleGetStartedClick}
              >
                Schedule Consultation
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Calendly Scheduling */}
      <section className="bg-white py-16 px-6 text-center" id="book">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Book a Consultation</h2>
          <p className="text-gray-700 text-lg mb-8">
            See available times below and schedule a free consultation directly on our calendar.
          </p>
          <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
            {/* Calendly Scheduling Embed */}
            <iframe
              src="https://calendly.com/goodwinalonzo/personal-training-consultation"
              style={{ border: 0 }}
              width="100%"
              height="700"
              title="Book a consultation"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Can&apos;t find a time that works?{" "}
            <button
              className="text-orange-600 underline hover:text-orange-700"
              onClick={handleGetStartedClick}
            >
              Contact us directly
            </button>
          </p>
        </div>
      </section>

      <CtaBand title="Take Action Today" buttonText="Get Started" onButtonClick={handleGetStartedClick} />
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
