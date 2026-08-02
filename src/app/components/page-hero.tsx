interface PageHeroProps {
  title: string
  subtitle: string
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 text-center min-h-80 flex items-center justify-center">
      <div className="max-w-3xl px-6">
        <h1 className="text-5xl font-bold mb-2">{title}</h1>
        <p className="text-xl text-blue-100">{subtitle}</p>
      </div>
    </section>
  )
}
