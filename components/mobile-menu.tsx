"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const productCategories = [
  { title: "Cerrahi Alet & Malzemeler", href: "/urunler/cerrahi" },
  { title: "Eczane Hizmetleri", href: "/urunler/eczane" },
  { title: "Tıbbi Cihazlar & Ekipman", href: "/urunler/tibbi-cihaz" },
  { title: "Biyomedikal Çözümler", href: "/urunler/biyomedikal" },
  { title: "Ev Sağlık Ürünleri", href: "/urunler/ev-saglik" },
  { title: "Laboratuvar Malzemeleri", href: "/urunler/laboratuvar" },
]

const aboutLinks = [
  { label: "Şirket Profili", href: "/hakkimizda/profil" },
  { label: "Yönetim", href: "/hakkimizda/yonetim" },
  { label: "Tarihçe", href: "/hakkimizda/tarihce" },
  { label: "Kalite Politikası", href: "/hakkimizda/kalite" },
  { label: "Sertifikalarımız", href: "/hakkimizda/sertifikalar" },
  { label: "Referanslarımız", href: "/hakkimizda/referanslar" },
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  if (!isOpen) return null

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="lg:hidden fixed inset-0 top-[120px] bg-background z-40 overflow-y-auto">
      <nav className="mx-auto max-w-7xl px-4 py-6">
        {/* Hakkımızda */}
        <div className="border-b border-border">
          <button
            onClick={() => toggleSection("about")}
            className="w-full flex items-center justify-between py-4 text-foreground font-medium"
          >
            Hakkımızda
            <ChevronDown
              className={`h-5 w-5 transition-transform ${expandedSection === "about" ? "rotate-180" : ""}`}
            />
          </button>
          {expandedSection === "about" && (
            <div className="pb-4 space-y-2">
              {aboutLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-2 pl-4 text-muted-foreground hover:text-accent-blue transition-colors"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Ürünler */}
        <div className="border-b border-border">
          <button
            onClick={() => toggleSection("products")}
            className="w-full flex items-center justify-between py-4 text-foreground font-medium"
          >
            Ürünler
            <ChevronDown
              className={`h-5 w-5 transition-transform ${expandedSection === "products" ? "rotate-180" : ""}`}
            />
          </button>
          {expandedSection === "products" && (
            <div className="pb-4 space-y-2">
              {productCategories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="block py-2 pl-4 text-muted-foreground hover:text-accent-blue transition-colors"
                  onClick={onClose}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Simple Links */}
        <Link
          href="/hizmetler"
          className="flex items-center justify-between py-4 text-foreground font-medium border-b border-border"
          onClick={onClose}
        >
          Hizmetler
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>

        <Link
          href="/haberler"
          className="flex items-center justify-between py-4 text-foreground font-medium border-b border-border"
          onClick={onClose}
        >
          Haberler & Duyurular
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>

        <Link
          href="/iletisim"
          className="flex items-center justify-between py-4 text-foreground font-medium border-b border-border"
          onClick={onClose}
        >
          İletişim
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>

        {/* CTA */}
        <div className="mt-6">
          <Link
            href="/siparis"
            className="block w-full text-center px-6 py-3 bg-accent-blue text-white rounded-full font-medium"
            onClick={onClose}
          >
            B2B Giriş
          </Link>
        </div>
      </nav>
    </div>
  )
}
