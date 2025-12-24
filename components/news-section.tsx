"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const newsItems = [
  {
    title: "Atilla Kimya 2025 Yılı Stratejik Hedeflerini Açıkladı",
    image: "/news-corporate-meeting-business-announcement.jpg",
    href: "/haberler/1",
  },
  {
    title: "Yeni Nesil Cerrahi Alet Serisi Tanıtıldı",
    image: "/news-surgical-instruments-product-launch.jpg",
    href: "/haberler/2",
  },
  {
    title: "Sağlık Sektöründe Kalite Standartları Yükseliyor",
    image: "/news-quality-healthcare-standards.jpg",
    href: "/haberler/3",
  },
  {
    title: "İstanbul Medikal Fuarı'nda Yerimizi Aldık",
    image: "/news-medical-fair-exhibition.jpg",
    href: "/haberler/4",
  },
]

export function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, newsItems.length - 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, newsItems.length - 3)) % Math.max(1, newsItems.length - 3))
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column - Title - McKesson style */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-3">
              HABERLER & DUYURULAR
            </p>
            <div className="w-8 h-1 bg-accent-orange mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif italic text-foreground leading-tight">
              Haberlerimizi
              <br />
              Keşfedin.
            </h2>
          </div>

          {/* Right Column - News Cards */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {newsItems.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-accent-blue/10">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm text-foreground font-medium mb-4 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                      {item.title}
                    </h3>
                    <span className="text-accent-blue text-sm font-medium group-hover:underline">Devamını Oku</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation - McKesson style */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-muted hover:border-muted-foreground transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="w-40 h-1 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-blue rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / Math.max(1, newsItems.length - 3)) * 100}%` }}
                />
              </div>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
