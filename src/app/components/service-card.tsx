import Link from "next/link";
import Image from "next/image"

interface ServiceCard {
  icon: string
  title: string
  description: string
  link: string
  image: string
}

interface ServiceCardsProps {
  services: ServiceCard[]
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function ServiceCards({ services }: ServiceCardsProps) {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
        {services.map((service, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col items-center md:items-start md:w-1/2">
                <div
                className="bg-white w-3/4 justify-center p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
                >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={service.link} className="text-orange-600 font-semibold hover:text-orange-700">
                    Learn More →
                </Link>
                </div>
            </div>
            <div className="w-1/2 justify-center flex">
                <Image className=" h-64 w-96 object-contain" src={service.image} alt={service.title} width={400} height={300} />
            </div>
        </div>
        ))}
      </div>
    </section>
  )
}
