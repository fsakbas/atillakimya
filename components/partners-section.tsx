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
  { name: "Siemens Healthineers", Logo: SiemensHealthineers },
  { name: "GE Healthcare", Logo: GEHealthcare },
  { name: "Philips", Logo: Philips },
  { name: "Medtronic", Logo: Medtronic },
  { name: "Johnson & Johnson", Logo: JohnsonJohnson },
  { name: "Abbott", Logo: Abbott },
  { name: "Boston Scientific", Logo: BostonScientific },
  { name: "Stryker", Logo: Stryker },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 mb-10">
        <p className="text-center text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase">
          Güvenilir Markalarla Çalışıyoruz
        </p>
      </div>

      {/* Infinite scroll container with CSS animation */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex-shrink-0 mx-10 w-[160px] h-[50px] flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 text-foreground"
            >
              <partner.Logo className="w-auto h-[28px] max-w-full" />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner) => (
            <div
              key={`${partner.name}-dup`}
              className="flex-shrink-0 mx-10 w-[160px] h-[50px] flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 text-foreground"
            >
              <partner.Logo className="w-auto h-[28px] max-w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
