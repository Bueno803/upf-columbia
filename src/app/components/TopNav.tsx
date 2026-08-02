"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {GoogleIcon, FacebookIcon, InstagramIcon} from "./SocialIcons"
// import { GoogleIcon, FacebookIcon } from "./SocialIcons"
import GetStartedModal from "./get-started-modal"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* <Image src={"/upf-logo.jpg"} alt="UPF" width={100} height={120} /> */}
        <Image src={`${basePath}/upf-logo.jpg`} alt="UPF" width={100} height={120} />

        
        {/* <Link href="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
          UPF
        </Link> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link href="/" className="text-gray-900 font-medium hover:text-orange-600 transition-colors">
            Home
          </Link>
          <div
            className="relative"
            ref={dropdownRef}
          >
            <button
              className="text-gray-900 font-medium hover:text-orange-600 transition-colors flex items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Services <span className={`text-xs transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}>&#9660;</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-52 bg-white shadow-lg rounded-lg border border-gray-100 overflow-hidden">
                  <Link
                    href="/taekwondo"
                    className="block px-6 py-3 text-gray-900 hover:bg-gray-100 hover:text-orange-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Taekwondo
                  </Link>
                  <Link
                    href="/personal-training"
                    className="block px-6 py-3 text-gray-900 hover:bg-gray-100 hover:text-orange-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Personal Training
                  </Link>
                  <Link
                    href="/summer-camp"
                    className="block px-6 py-3 text-gray-900 hover:bg-gray-100 hover:text-orange-600 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Summer Camp / After School / Online
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/about" className="text-gray-900 font-medium hover:text-orange-600 transition-colors">
            About
          </Link>
          <Link href="/faqs" className="text-gray-900 font-medium hover:text-orange-600 transition-colors">
            FAQs
          </Link>
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
          </button>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex gap-6 ml-8">
          <FacebookIcon />
          {/* <a href="#" title="Facebook" className="text-gray-900 hover:text-orange-600 transition-colors text-lg">
            f
          </a> */}
          <InstagramIcon />
          {/* <a href="#" title="Instagram" className="text-gray-900 hover:text-orange-600 transition-colors text-lg">
            📷
          </a> */}
          <GoogleIcon />
          {/* <a href="#" title="YouTube" className="text-gray-900 hover:text-orange-600 transition-colors text-lg">
            ▶
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-gray-900" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 py-6 bg-gray-50 border-t border-gray-200">
          <Link href="/" className="text-gray-900 font-medium py-2 hover:text-orange-600" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link
            href="/taekwondo"
            className="text-gray-900 font-medium py-2 hover:text-orange-600"
            onClick={closeMobileMenu}
          >
            Taekwondo
          </Link>
          <Link
            href="/personal-training"
            className="text-gray-900 font-medium py-2 hover:text-orange-600"
            onClick={closeMobileMenu}
          >
            Personal Training
          </Link>
          <Link
            href="/summer-camp"
            className="text-gray-900 font-medium py-2 hover:text-orange-600"
            onClick={closeMobileMenu}
          >
            Summer Camp / After School
          </Link>
          <Link
            href="/about"
            className="text-gray-900 font-medium py-2 hover:text-orange-600"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link href="/faqs" className="text-gray-900 font-medium py-2 hover:text-orange-600" onClick={closeMobileMenu}>
            FAQs
          </Link>
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            onClick={() => {
              setIsModalOpen(true)
              closeMobileMenu()
            }}
          >
            Get Started
          </button>
        </nav>
      )}

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}
