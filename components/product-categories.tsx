"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const categories = [
  {
    title: "Cerrahi Aletler ve Malzemeler",
    description: "Yüksek kaliteli paslanmaz çelik cerrahi aletler",
    image: "/surgical-instruments-medical-tools-stainless-steel.jpg",
    href: "/urunler/cerrahi-aletler",
  },
  {
    title: "Eczane Hizmetleri",
    description: "Kapsamlı eczane ürün ve hizmetleri",
    image: "/pharmacy-services-pharmacist-healthcare.jpg",
    href: "/urunler/eczane",
  },
  {
    title: "Tıbbi Cihaz ve Ekipmanları",
    description: "Modern tanı ve tedavi ekipmanları",
    image: "/medical-devices-equipment-hospital-diagnostic.jpg",
    href: "/urunler/tibbi-cihaz",
  },
]

export function ProductCategories() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.2 },
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa]">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-3">
            ÜRÜN KATEGORİLERİ
          </p>
          <div className="w-8 h-1 bg-accent-orange mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif italic text-foreground mb-5">Odak Alanlarımız</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            İşletmelerimiz, tüm sağlık ekosistemini desteklemek için öncü teknolojileri, yenilikçi çözümleri ve
            uygulamalı uzmanlığı bir araya getiriyor.
          </p>
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-foreground text-foreground rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            Daha Fazla
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 border-t-2 border-accent-blue">
                <h3 className="text-accent-blue font-semibold text-lg flex items-center gap-1 group-hover:gap-3 transition-all mb-2">
                  {category.title}
                  <ChevronRight className="h-5 w-5" />
                </h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
