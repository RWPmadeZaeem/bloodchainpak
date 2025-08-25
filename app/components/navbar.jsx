"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

function Navbar() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const links = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact" },
    { href: "/about-us", label: "About Us" },
  ]

  return (
    <div className="sticky top-0 z-[20] bg-white">
      <nav className="flex bg-white w-full justify-between items-center px-4 sm:px-8 lg:px-20 py-4 border-b border-gray-200 shadow-sm">
        <div>
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h2 className="text-xl font-semibold text-gray-900">Blood Chain</h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-gray-700 hover:text-gray-900 hover:font-semibold transition-all duration-200 group ${isActive ? "font-semibold text-gray-900" : ""}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#EC1D23] transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:flex">
          <button className="bg-[#EC1D23] text-white px-6 py-2.5 rounded-full hover:bg-red-700 hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Donate Now
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0  bg-opacity-50 z-[15] lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <div className="fixed top-[73px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[25] lg:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="px-6 py-6">
              <ul className="flex flex-col gap-4">
                {links.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 px-3 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors ${
                          isActive ? "font-semibold text-gray-900 bg-gray-50" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#EC1D23] text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar

