"use client"

import PageHero from "../components/page-hero"
import FAQAccordion from "../components/faq-accordion"
import GetStartedModal from "../components/get-started-modal"
import { useState } from "react"

export default function FAQsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGetStartedClick = () => {
    setIsModalOpen(true)
  }

  const faqItems = [
    {
      question: "What age groups do your programs serve?",
      answer:
        "We offer programs for all ages, from Little Tigers (ages 4-6) through Adult Masters (ages 14+). We also have specialized programs for families and various fitness levels.",
    },
    {
      question: "Do you offer trial classes?",
      answer:
        "Yes! We encourage new members to try one free trial class. This gives you a chance to meet our instructors, see our facility, and experience the UPF community.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee if you're not satisfied with our programs. If you have questions about our policy, please contact us directly.",
    },
    {
      question: "Can I pause my membership?",
      answer:
        "Life happens. You can pause your membership for up to 3 months without any penalties. Contact our staff to set this up.",
    },
    {
      question: "Do you offer group discounts?",
      answer:
        "Yes! We offer family packages and group discounts for 3 or more people. Ask about our bundle deals when you get started.",
    },
    {
      question: "Are your instructors certified?",
      answer:
        "All of our instructors are certified in their respective disciplines and maintain current CPR/First Aid certifications. Your safety is our priority.",
    },
  ]

  return (
    <main>
      <PageHero title="Frequently Asked Questions" subtitle="We're here to help!" />

      <FAQAccordion items={faqItems} />

      <section className="bg-blue-50 py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Still Have Questions?</h2>
          <p className="text-gray-700 text-lg mb-8">Don&apos;t hesitate to reach out! Our team is here to answer any questions you might have.</p>
          <button
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
      </section>
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
