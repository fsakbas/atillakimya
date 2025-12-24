"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface MegaMenuProps {
  activeMenu: string | null
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const productCategories = [
  {
    title: "Cerrahi Alet & Malzemeler",
    description: "Hastaneler ve klinikler için yüksek kaliteli cerrahi ekipmanlar dağıtıyoruz.",
    items: [
      { label: "Cerrahi Aletler", href: "/urunler/cerrahi-aletler" },
      { label: "Tıbbi Sarf Malzemeleri", href: "/urunler/tibbi-sarf" },
    ],
    href: "/urunler/cerrahi",
  },
  {
    title: "Eczane Hizmetleri",
    description: "Eczanelerin ve sağlık sistemlerinin finansal refahını destekliyoruz.",
    href: "/urunler/eczane",
  },
  {
    title: "Tıbbi Cihazlar & Ekipman",
    description: "Kanser ve özel bakım alanlarındaki zorlukları çözmek için araştırma, teknoloji ve destek sağlıyoruz.",
    href: "/urunler/tibbi-cihaz",
  },
  {
    title: "Biyomedikal Çözümler",
    description: "İlaç erişimi, ekonomiklik ve uyum zorluklarını ele alan çözümler sunuyoruz.",
    href: "/urunler/biyomedikal",
  },
  {
    title: "Ev Sağlık Ürünleri",
    description: "İşverenler, ödeme kuruluşları ve devlet kurumları için düşük maliyetli seçenekler sunuyoruz.",
    href: "/urunler/ev-saglik",
  },
  {
    title: "Laboratuvar Malzemeleri",
    description: "Eczanelerin ve sağlık sistemlerinin sürdürülebilir çalışma ortamını destekliyoruz.",
    href: "/urunler/laboratuvar",
  },
]

const aboutLinks = [
  { label: "Şirket Profili", href: "/hakkimizda/profil" },
  { label: "Yönetim", href: "/hakkimizda/yonetim" },
  { label: "Tarihçe", href: "/hakkimizda/tarihce" },
  { label: "Kalite Politikası", href: "/hakkimizda/kalite", hasArrow: true },
  { label: "Sertifikalarımız", href: "/hakkimizda/sertifikalar" },
  { label: "Referanslarımız", href: "/hakkimizda/referanslar" },
  { label: "Haberler", href: "/haberler", hasArrow: true },
]

export function MegaMenu({ activeMenu, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  if (!activeMenu) return null

  return (
    <div
      className="absolute left-0 right-0 bg-background border-b border-border shadow-lg z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-4 py-10">
        {activeMenu === "products" && (
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column - Title & Description */}
            <div className="col-span-3 pr-6">
              <h2 className="text-4xl font-serif italic text-foreground mb-4 leading-tight">
                Ürün
                <br />
                Kategorileri
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                İşletmelerimiz, tüm sağlık ekosistemini desteklemek için öncü teknolojileri, yenilikçi çözümleri ve
                uygulamalı uzmanlığı bir araya getiriyor.
              </p>
              <Link
                href="/urunler"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-foreground text-foreground rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Keşfet
              </Link>

              <div className="mt-10 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-2">Tüm Ürün Listesi</h3>
                <p className="text-muted-foreground text-sm mb-3">Ürün kataloğumuzu inceleyin.</p>
                <Link
                  href="/urunler"
                  className="inline-flex items-center gap-1 text-accent-blue text-sm font-medium hover:underline"
                >
                  Ürünlerimiz <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Columns - Categories in 2 columns */}
            <div className="col-span-9 grid grid-cols-2 gap-x-12 gap-y-8">
              {productCategories.map((category, index) => (
                <div key={category.title} className={`${index < 4 ? "pb-6 border-b border-border" : ""}`}>
                  <Link href={category.href} className="group">
                    <h3 className="text-accent-blue font-semibold mb-2 group-hover:underline text-base">
                      {category.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{category.description}</p>
                  {category.items && (
                    <ul className="space-y-1">
                      {category.items.map((item) => (
                        <li key={item.label}>
                          <Link href={item.href} className="text-accent-blue text-sm hover:underline">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeMenu === "about" && (
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column - Title & Description */}
            <div className="col-span-4 pr-8">
              <h2 className="text-4xl font-serif italic text-foreground mb-4 leading-tight">Hakkımızda</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Değerlerimiz doğrultusunda, her ortamda bakımı iyileştiren, etki odaklı bir kuruluşuz – tek bir ürün,
                tek bir partner, tek bir hasta için.
              </p>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-foreground text-foreground rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Keşfet
              </Link>
            </div>

            {/* Right Column - Links */}
            <div className="col-span-8 pl-8 border-l border-border">
              <ul className="space-y-1">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between py-3 text-foreground hover:text-accent-blue transition-colors group"
                    >
                      <span className="text-base">{link.label}</span>
                      {link.hasArrow && (
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent-blue transition-colors" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
