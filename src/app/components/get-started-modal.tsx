"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface GetStartedModalProps {
  isOpen: boolean
  onClose: () => void
}

const calendlyLinks: Record<string, string> = {
  "personal-training": "https://calendly.com/goodwinalonzo/personal-training-consultation",
  "martial-arts": "https://calendly.com/goodwinalonzo/martial-arts-consultation",
  "investment": "https://calendly.com/goodwinalonzo/investment-consultation",
  "weapons-safety": "https://calendly.com/goodwinalonzo/weapons-safety-consultation",
  "massage": "https://calendly.com/goodwinalonzo/massage-session",
  "summer-camp": "https://calendly.com/goodwinalonzo/personal-training-consultation",
  "after-school": "https://calendly.com/goodwinalonzo/personal-training-consultation",
  "online": "https://calendly.com/goodwinalonzo/personal-training-consultation",
}

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  heard: string
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [step, setStep] = useState<"form" | "calendly">("form")
  const [formError, setFormError] = useState("")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    heard: "",
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Reset to form step when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStep("form")
      setFormError("")
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, phone, service } = formData

    if (!name || !email || !phone || !service) {
      setFormError("Please fill in all required fields.")
      return
    }

    setFormError("")
    setStep("calendly")
  }

  const calendlyUrl = (() => {
    const base = calendlyLinks[formData.service] ?? "https://calendly.com/goodwinalonzo/personal-training-consultation"
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      a1: formData.phone,
      hide_gdpr_banner: "1",
    })
    return `${base}?${params.toString()}`
  })()

  return (
    <div
      className="fixed inset-0 z-80 flex items-center justify-center bg-black/50 transition-opacity"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg w-full mx-4 overflow-hidden flex flex-col"
        style={{ maxWidth: step === "calendly" ? "900px" : "448px", height: "90vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-6 pb-4 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3">
            {step === "calendly" && (
              <button
                onClick={() => setStep("form")}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Back to form"
              >
                ← Back
              </button>
            )}
            <h2 className="font-bold text-blue-900 text-lg">
              {step === "form" ? "Get Started with UPF" : "Schedule Your Consultation"}
            </h2>
          </div>
          <button
            className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer leading-none"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-2 px-8 py-3 shrink-0">
          <div className={`flex items-center gap-2 text-sm font-medium ${step === "form" ? "text-orange-600" : "text-green-600"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${step === "form" ? "bg-orange-600" : "bg-green-600"}`}>
              {step === "calendly" ? "✓" : "1"}
            </span>
            Your Info
          </div>
          <div className="flex-1 h-px bg-gray-200 mx-1" />
          <div className={`flex items-center gap-2 text-sm font-medium ${step === "calendly" ? "text-orange-600" : "text-gray-400"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${step === "calendly" ? "bg-orange-600" : "bg-gray-300"}`}>
              2
            </span>
            Pick a Time
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto">
          {step === "form" && (
            <form id="getStartedForm" onSubmit={handleFormSubmit} className="px-8 pb-8 pt-2">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name *</label>
                <input
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email" id="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                <input
                  type="tel" id="phone" name="phone" required
                  value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service of Interest *</label>
                <select
                  id="service" name="service" required
                  value={formData.service} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                >
                  <option value="">Select a service</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="martial-arts">Martial Arts / Taekwondo</option>
                  <option value="investment">Investment Consultation</option>
                  <option value="weapons-safety">Weapons Safety</option>
                  <option value="massage">Massage Session</option>
                  <option value="summer-camp">Summer Camp</option>
                  <option value="after-school">After School Program</option>
                  <option value="online">Online School Hub</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="heard" className="block text-gray-700 font-medium mb-2">How Did You Hear About Us?</label>
                <input
                  type="text" id="heard" name="heard" placeholder="Optional"
                  value={formData.heard} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                />
              </div>
              {formError && (
                <p className="text-red-600 text-sm mb-4">{formError}</p>
              )}
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Next: Pick a Time →
              </button>
            </form>
          )}

          {step === "calendly" && (
            <iframe
              src={calendlyUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "600px" }}
              title="Schedule a consultation"
            />
          )}
        </div>
      </div>
    </div>
  )
}
