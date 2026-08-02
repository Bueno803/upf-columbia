interface Testimonial {
  text: string
  author: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-secondary">
            <p className="text-lg italic text-gray-900 mb-4">"{testimonial.text}"</p>
            <p className="text-secondary font-semibold">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
