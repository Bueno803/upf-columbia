"use client"

interface CtaBandProps {
  title: string
  buttonText: string
  onButtonClick: () => void
}

export default function CtaBand({ title, buttonText, onButtonClick }: CtaBandProps) {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <button
        className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </section>
  )
}
