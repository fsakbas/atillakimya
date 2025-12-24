"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-[2.75rem] font-serif italic text-foreground mb-8 leading-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Sağlığın Her Alanına Dokunuyoruz
        </h2>
        <p
          className={`text-muted-foreground leading-relaxed text-base md:text-lg transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Çeşitlendirilmiş sağlık hizmetleri lideri olarak, hastalara dönüştürücü tedavilere erişim sağlıyoruz, bakım
          sağlayıcılarını destekliyoruz, araştırmaları ilerletmek için üreticilerle ortaklık kuruyoruz ve bakım
          ortamlarını en son teknolojilerle donatıyoruz. Sağlık alanında — ürünleri, ortakları ve insanları bir araya
          getirerek daha iyi sonuçları destekliyoruz.
        </p>
      </div>
    </section>
  )
}
