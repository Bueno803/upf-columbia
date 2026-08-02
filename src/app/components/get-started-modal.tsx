"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface GetStartedModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [formMessage, setFormMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

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

  if (!isOpen) return null

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    if (name && email && phone) {
      setFormMessage("Thank you! We'll be in touch soon.")
      setMessageType("success")
      form.reset()

      setTimeout(() => {
        onClose()
        setFormMessage("")
        setMessageType("")
      }, 2000)
    } else {
      setFormMessage("Please fill in all required fields.")
      setMessageType("error")
    }
  }

  return (
    <div
      className="fixed inset-0 z-80 flex items-center justify-center bg-black/50 transition-opacity"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg p-8 w-full max-w-sm mx-4 h-5/6 overflow-auto">
        <button
          className="float-right text-2xl text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-1xl font-bold text-blue-900 mb-6">Get Started with UPF</h2>
        <form id="getStartedForm" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
              Service of Interest *
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
            >
              <option value="">Select a service</option>
              <option value="taekwondo">Taekwondo</option>
              <option value="personal-training">Personal Training</option>
              <option value="summer-camp">Summer Camp</option>
              <option value="after-school">After School Program</option>
              <option value="online">Online School Hub</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="heard" className="block text-gray-700 font-medium mb-2">
              How Did You Hear About Us?
            </label>
            <input
              type="text"
              id="heard"
              name="heard"
              placeholder="Optional"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Submit
          </button>
        </form>
        {formMessage && (
          <div
            className={`mt-4 p-4 rounded-lg text-center font-medium ${
              messageType === "success"
                ? "bg-green-100 text-green-700"
                : messageType === "error"
                  ? "bg-red-100 text-red-700"
                  : ""
            }`}
            id="formMessage"
          >
            {formMessage}
          </div>
        )}
      </div>
    </div>
  )
}
