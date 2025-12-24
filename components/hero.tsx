"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Volume2, VolumeX } from "lucide-react"

const rollingWords = ["Güvenilir", "Yenilikçi", "Kaliteli", "Profesyonel"]

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rollingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay loop muted={isMuted} playsInline className="w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Futuristic_Medical_Device_Background_Video-ml1syWCrFRIkwEdjLA1HtU2WqUC0ME.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/70 to-[#1a365d]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
              Sağlıkta
              <br />
              <span className="relative block h-[1.3em] overflow-hidden">
                {rollingWords.map((word, index) => (
                  <span
                    key={word}
                    className={`absolute left-0 text-[#5ba3d9] font-extrabold transition-all duration-500 ease-out ${
                      index === currentWordIndex
                        ? "translate-y-0 opacity-100"
                        : index === (currentWordIndex - 1 + rollingWords.length) % rollingWords.length
                          ? "-translate-y-full opacity-0"
                          : "translate-y-full opacity-0"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </span>
              Çözüm Ortağınız
            </h1>

            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg leading-relaxed font-medium">
              50 yılı aşkın deneyimimizle medikal sektörüne yenilikçi ve kaliteli ürünler sunuyoruz.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a365d] rounded text-sm font-bold uppercase tracking-wide hover:bg-[#5ba3d9] hover:text-white transition-all shadow-lg hover:shadow-xl"
              >
                Bizi Keşfedin
              </Link>
              <Link
                href="/urunler"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-[#1a365d] transition-all"
              >
                Ürünlerimiz
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sound control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 left-8 flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
        aria-label={isMuted ? "Sesi aç" : "Sesi kapat"}
      >
        <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </div>
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-wider uppercase font-medium">Keşfet</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
