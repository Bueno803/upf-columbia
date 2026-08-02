"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto pt-20">
      {items.map((item, index) => (
        <div key={index} className="bg-gray-50 mb-4 rounded-lg overflow-hidden">
          <button
            className={`w-full px-6 py-4 text-left font-semibold flex justify-between items-center border-2 rounded-lg transition-all ${
              openIndex === index ? "bg-gray-100 border-orange-600" : "bg-white border-gray-200 hover:border-orange-600"
            } text-blue-900`}
            onClick={() => toggleFAQ(index)}
          >
            <span>{item.question}</span>
            <span className={`font-bold transition-transform ${openIndex === index ? "rotate-45" : ""}`}>+</span>
          </button>
          {openIndex === index && <div className="px-6 py-4 bg-white text-gray-700">{item.answer}</div>}
        </div>
      ))}
    </div>
  )
}
