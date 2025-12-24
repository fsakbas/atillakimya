import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function FeaturedReport() {
  return (
    <section className="py-16 md:py-20 bg-[#f8f9fa]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-[#e8f4f8] rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-[4/3] md:aspect-auto">
              <img
                src="/medical-product-catalog-report-healthcare.jpg"
                alt="2025 Ürün Kataloğu"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-semibold tracking-widest text-foreground/70 uppercase">
                  MEDİKAL ÜRÜNLER
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4 leading-tight">
                2025 Ürün Kataloğumuzu İnceleyin
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sağlık sektörüne yönelik geniş ürün yelpazemizi keşfedin. Cerrahi aletlerden tıbbi sarf malzemelerine,
                ev sağlık ürünlerinden laboratuvar ekipmanlarına kadar tüm ihtiyaçlarınız için kaliteli çözümler
                sunuyoruz.
              </p>
              <Link
                href="/katalog"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-foreground text-foreground rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors w-fit"
              >
                Kataloğu İndir
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
