import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  products: [
    { label: "Cerrahi Aletler", href: "/urunler/cerrahi-aletler" },
    { label: "Ev Sağlık Ürünleri", href: "/urunler/ev-saglik" },
    { label: "Tıbbi Cihazlar", href: "/urunler/tibbi-cihaz" },
    { label: "Tıbbi Sarf Ürünleri", href: "/urunler/tibbi-sarf" },
  ],
  company: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Tarihçe", href: "/hakkimizda/tarihce" },
    { label: "Kalite Politikası", href: "/hakkimizda/kalite" },
    { label: "Kariyer", href: "/kariyer" },
  ],
  support: [
    { label: "İletişim", href: "/iletisim" },
    { label: "Sıkça Sorulan Sorular", href: "/sss" },
    { label: "Sipariş Takibi", href: "/siparis-takibi" },
    { label: "Katalog", href: "/katalog" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1a365d] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/atilla-kimya-logo-yeni-20-281-29.png"
                alt="Atilla Kimya"
                width={180}
                height={45}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-sm">
              Atilla Kimya San. ve Tic. Ltd. Şti. olarak, sağlık sektörüne yönelik kaliteli medikal ürünler sunmaktayız.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-blue shrink-0 mt-0.5" />
                <span className="text-white/70">Molla Gürani Cd. Nakibül Eşref Sk. No:41 Fındıkzade, İstanbul</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-blue shrink-0" />
                <a href="tel:02125344430" className="text-white/70 hover:text-white transition-colors">
                  (0212) 534 44 30
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-blue shrink-0" />
                <a href="mailto:bilgi@atillakimya.com" className="text-white/70 hover:text-white transition-colors">
                  bilgi@atillakimya.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent-blue shrink-0" />
                <span className="text-white/70">Pzt - Cum: 08:30 - 18:30</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-5">Ürünler</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-5">Kurumsal</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-5">Destek</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">© 2025 Atilla Kimya San. ve Tic. Ltd. Şti. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
