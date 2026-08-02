"use client"

import PageHero from "../components/page-hero"
import CtaBand from "../components/cta-band"
import GetStartedModal from "../components/get-started-modal"
import { useState } from "react"

export default function SummerCampPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGetStartedClick = () => {
    setIsModalOpen(true)
  }

  return (
    <main>
      <PageHero title="UPF School Hub" subtitle="Building Confidence Beyond the Classroom" />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Summer Camp Program */}
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Summer Camp</h2>
            <p className="text-gray-700 mb-6">
              Keep your kids active, engaged, and having fun all summer long! Our comprehensive camp includes martial
              arts, fitness games, team-building activities, and more.
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li>📅 June - August | Full & Half Days Available</li>
              <li>🎯 Ages 5-15</li>
              <li>🥋 Martial Arts Training</li>
              <li>💪 Fitness Activities</li>
              <li>🎨 Creative Workshops</li>
            </ul>
            <button
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              onClick={handleGetStartedClick}
            >
              Enroll Now
            </button>
          </div>

          {/* After School Program */}
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">After School Program</h2>
            <p className="text-gray-700 mb-6">
              A safe, supportive environment where kids can stay active while developing leadership and teamwork skills.
              Perfect for working parents!
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li>📅 Monday - Friday | School Dismissal - 6:00 PM</li>
              <li>🎯 Ages 5-13</li>
              <li>🥋 Martial Arts Classes</li>
              <li>📚 Homework Help Available</li>
              <li>🚌 School Pickup</li>
            </ul>
            <button
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              onClick={handleGetStartedClick}
            >
              Join Our After School Family
            </button>
          </div>

          {/* Online School Hub */}
          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Online School Hub</h2>
            <p className="text-gray-700 mb-6">
              We will support your child in there online classes, provide assistance and tutoring with all school subjects.
                Plus, access to our exclusive online fitness and martial arts classes to keep them active and healthy.
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li>📅 Flexible Scheduling</li>
              <li>🎯 All Ages Welcome</li>
              <li>🏫 Tutoring</li>
              {/* <li>📱 Accessible on Any Device</li> */}
              {/* <li>🏆 Track Your Progress</li> */}
            </ul>
            <button
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              onClick={handleGetStartedClick}
            >
              Get Started Online
            </button>
          </div>

          {/* CTA Box */}
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Not sure which program is right for you?</h3>
            <p className="text-gray-700 mb-6">Let&apos;s find the perfect fit for your child!</p>
            <button
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <CtaBand title="Invest in Your Child's Future" buttonText="Enroll Today" onButtonClick={handleGetStartedClick} />
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
