"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search, Menu, X } from "lucide-react"
import { MegaMenu } from "./mega-menu"
import { MobileMenu } from "./mobile-menu"

const navItems = [
  {
    label: "Hakkımızda",
    hasSubmenu: true,
    submenuType: "about",
  },
  {
    label: "Ürünler",
    hasSubmenu: true,
    submenuType: "products",
  },
  {
    label: "Hizmetler",
    href: "/hizmetler",
  },
  {
    label: "Haberler & Duyurular",
    href: "/haberler",
  },
]

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (submenuType: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveMenu(submenuType)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top Bar - McKesson style minimal */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-end gap-6 py-2 text-sm">
            <Link href="/iletisim" className="text-muted-foreground hover:text-foreground transition-colors">
              İletişim
            </Link>
            <Link
              href="/kariyer"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              Kariyer
              <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.5 3C3.5 2.72386 3.72386 2.5 4 2.5H9C9.27614 2.5 9.5 2.72386 9.5 3V8C9.5 8.27614 9.27614 8.5 9 8.5C8.72386 8.5 8.5 8.27614 8.5 8V4.20711L3.35355 9.35355C3.15829 9.54882 2.84171 9.54882 2.64645 9.35355C2.45118 9.15829 2.45118 8.84171 2.64645 8.64645L7.79289 3.5H4C3.72386 3.5 3.5 3.27614 3.5 3Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                Kurumsal
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - McKesson style */}
      <div className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/atilla-kimya-logo-yeni-20-281-29.png"
                alt="Atilla Kimya"
                width={200}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasSubmenu && handleMouseEnter(item.submenuType || "")}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.hasSubmenu ? (
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-all rounded-sm ${
                        activeMenu === item.submenuType
                          ? "text-foreground border-b-2 border-foreground"
                          : "text-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${activeMenu === item.submenuType ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions - McKesson style */}
            <div className="flex items-center gap-3">
              <Link
                href="/siparis"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-accent-blue/10 text-accent-blue rounded-full text-sm font-medium hover:bg-accent-blue/20 transition-colors border border-accent-blue/20"
              >
                B2B Giriş
                <ChevronDown className="h-4 w-4" />
              </Link>
              <button
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Ara"
              >
                <Search className="h-5 w-5 text-foreground" />
              </button>
              <button
                className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menü"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu - positioned directly below nav */}
        <MegaMenu activeMenu={activeMenu} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
