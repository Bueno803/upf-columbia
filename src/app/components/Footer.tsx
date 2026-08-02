import Link from "next/link"

export default function Footer() {
  

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div className="text-2xl font-bold text-orange-500 mb-3">UPF</div>
          <p className="text-gray-300">Building stronger, more confident families since day one.</p>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p className="text-gray-300 mb-2">📍 123 Fitness Avenue, City, State 12345</p>
          <p className="text-gray-300 mb-2">📞 (555) 123-4567</p>
          <p className="text-gray-300">📧 info@upf.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/taekwondo" className="text-gray-300 hover:text-orange-500 transition-colors">
                Taekwondo
              </Link>
            </li>
            <li>
              <Link href="/personal-training" className="text-gray-300 hover:text-orange-500 transition-colors">
                Personal Training
              </Link>
            </li>
            <li>
              <Link href="/summer-camp" className="text-gray-300 hover:text-orange-500 transition-colors">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="text-gray-300 hover:text-orange-500 transition-colors">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="text-gray-300 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-gray-300 hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 px-6 py-6 text-center text-gray-400">
        <p>&copy; 2025 University of Personal Fitness. All rights reserved.</p>
      </div>
    </footer>
  )
}
