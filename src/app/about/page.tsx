import PageHero from "../components/page-hero"

export default function AboutPage() {
  return (
    <main>
      <PageHero title="Our Story" subtitle="Building a Stronger Community, One Person at a Time" />

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Journey</h2>
          <p className="text-gray-700 mb-6 text-lg">
            University Personal Fitness was founded on a simple mission: to create a welcoming space where people of all
            ages and abilities could grow stronger, healthier, and more confident. What started as a small martial arts
            studio has evolved into a comprehensive fitness center serving hundreds of families in our community.
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-6 mt-12">Our Values</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-4 border-l-4 border-orange-600 rounded-lg">
              <strong className="text-blue-900">Family-First Approach:</strong>
              <span className="text-gray-700"> We treat every member as part of the UPF family.</span>
            </li>
            <li className="bg-gray-50 p-4 border-l-4 border-orange-600 rounded-lg">
              <strong className="text-blue-900">Excellence:</strong>
              <span className="text-gray-700">
                {" "}
                Our certified instructors are dedicated to delivering world-class training.
              </span>
            </li>
            <li className="bg-gray-50 p-4 border-l-4 border-orange-600 rounded-lg">
              <strong className="text-blue-900">Inclusivity:</strong>
              <span className="text-gray-700"> Programs for every age, ability, and fitness level.</span>
            </li>
            <li className="bg-gray-50 p-4 border-l-4 border-orange-600 rounded-lg">
              <strong className="text-blue-900">Community:</strong>
              <span className="text-gray-700"> We believe in building strong connections through shared goals.</span>
            </li>
          </ul>

          <h2 className="text-4xl font-bold text-blue-900 mb-6 mt-12">Our Commitment</h2>
          <p className="text-gray-700 text-lg">
            We&apos;re committed to providing exceptional programs that empower our members to achieve their goals.
            Whether it&apos;s learning self-defense, building muscle, or gaining confidence, UPF is the place where
            transformations happen.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Community Impact</h2>
        <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
          We believe in giving back to the community that supports us. Through local partnerships and outreach programs,
          we&apos;re making a positive impact one person at a time.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-orange-600 mb-2">35+</div>
            <div className="text-gray-700">Years of </div>
          </div>
          {/* <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-700">Classes Per Week</div>
          </div> */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-orange-600 mb-2">35+</div>
            <div className="text-gray-700">Years of Excellence</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-gray-700">Community Programs</div>
          </div>
        </div>
      </section>
    </main>
  )
}
