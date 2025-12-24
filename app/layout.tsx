import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Atilla Kimya - Medikal Ürünler ve Sağlık Ekipmanları",
  description:
    "Atilla Kimya San. ve Tic. Ltd. Şti. - Cerrahi aletler, tıbbi cihazlar, ev sağlık ürünleri ve tıbbi sarf malzemeleri tedarikçisi.",
  generator: "v0.app",
  keywords: ["medikal ürünler", "cerrahi aletler", "tıbbi cihazlar", "sağlık ekipmanları", "istanbul"],
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
