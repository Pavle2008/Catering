import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TeamSection from '@/components/TeamSection'
import EstimatorSection from '@/components/EstimatorSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import NewsSection from '@/components/NewsSection'
import FooterBanner from '@/components/FooterBanner'
import ContactDrawer from '@/components/ContactDrawer'

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-canvas text-charcoal">
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <main>
        <Hero onOpenDrawer={() => setDrawerOpen(true)} />
        <TeamSection />
        <EstimatorSection />
        <PricingSection onOpenDrawer={() => setDrawerOpen(true)} />
        <TestimonialsSection />
        <FAQSection />
        <NewsSection selectedNewsId={selectedNewsId} onSelectNews={setSelectedNewsId} />
        <FooterBanner onOpenDrawer={() => setDrawerOpen(true)} />
      </main>
      <ContactDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
    </div>
  )
}
