"use client"

import {
  SiemensHealthineers,
  GEHealthcare,
  Philips,
  Medtronic,
  JohnsonJohnson,
  Abbott,
  BostonScientific,
  Stryker
} from "./partner-logos"

const partners = [
  { name: "Siemens Healthineers", Logo: SiemensHealthineers, variant: "wide" },
  { name: "GE Healthcare", Logo: GEHealthcare, variant: "square" },
  { name: "Philips", Logo: Philips, variant: "wide" },
  { name: "Medtronic", Logo: Medtronic, variant: "wide" },
  { name: "Johnson & Johnson", Logo: JohnsonJohnson, variant: "wide" },
  { name: "Abbott", Logo: Abbott, variant: "square" },
  { name: "Boston Scientific", Logo: BostonScientific, variant: "medium" },
  { name: "Stryker", Logo: Stryker, variant: "medium" },
]

const heightMap: Record<string, string> = {
  wide: "h-[22px]",
  medium: "h-[32px]",
  square: "h-[45px]",
}

export function PartnersSection() {
  return (
    <section className="py-16 bg-muted/20 border-y border-border/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 mb-12">
        <p className="text-center text-[10px] font-bold tracking-[0.3em] text-muted-foreground/80 uppercase">
          Güvenilir Markalarla Çalışıyoruz
        </p>
      </div>

      {/* Infinite scroll container with CSS animation */}
      <div className="relative">
        {/* Shadow overlays for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set */}
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex-shrink-0 mx-8 w-[180px] h-[60px] flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out text-foreground/80 hover:text-foreground"
            >
              <partner.Logo className={`w-auto ${heightMap[partner.variant]} max-w-[150px] transition-transform duration-300 hover:scale-105`} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner) => (
            <div
              key={`${partner.name}-dup`}
              className="flex-shrink-0 mx-8 w-[180px] h-[60px] flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out text-foreground/80 hover:text-foreground"
            >
              <partner.Logo className={`w-auto ${heightMap[partner.variant]} max-w-[150px] transition-transform duration-300 hover:scale-105`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
