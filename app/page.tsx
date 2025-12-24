import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedReport } from "@/components/featured-report"
import { ProductCategories } from "@/components/product-categories"
import { PartnersSection } from "@/components/partners-section"
import { NewsSection } from "@/components/news-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsSection />
      <AboutSection />
      <FeaturedReport />
      <ProductCategories />
      <PartnersSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
