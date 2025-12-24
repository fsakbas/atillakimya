import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a365d] via-[#234876] to-[#2d5a8c] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="mx-auto max-w-7xl px-4 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white mb-6">
            Projeleriniz İçin Yanınızdayız
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Medikal ürün ihtiyaçlarınız için uzman ekibimizle iletişime geçin. Size en uygun çözümleri sunmak için
            hazırız.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1a365d] rounded-full text-sm font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl group"
            >
              İletişime Geçin
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+902125344430"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full text-sm font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
            >
              <Phone className="h-4 w-4" />
              (0212) 534 44 30
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
