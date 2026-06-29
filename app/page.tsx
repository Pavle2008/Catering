'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import EstimatorSection from '@/components/EstimatorSection'
import MetricsRibbon from '@/components/MetricsRibbon'
import NewsSection from '@/components/NewsSection'
import FooterCTA from '@/components/FooterCTA'
import InquiryDrawer from '@/components/InquiryDrawer'

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <HeroSection onOpenDrawer={() => setDrawerOpen(true)} />
      <EstimatorSection />
      <MetricsRibbon />
      <NewsSection />
      <FooterCTA />
      <InquiryDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
    </main>
  )
}
