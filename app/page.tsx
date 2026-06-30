'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import EstimatorSection from '@/components/EstimatorSection'
import MetricsRibbon from '@/components/MetricsRibbon'
import NewsSection from '@/components/NewsSection'
import NewsModal from '@/components/NewsModal'
import Footer from '@/components/Footer'
import InquiryDrawer from '@/components/InquiryDrawer'

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <EstimatorSection />
      <MetricsRibbon />
      <NewsSection onSelectNews={setSelectedNewsId} />
      <Footer />
      <InquiryDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
      <NewsModal newsId={selectedNewsId} onClose={() => setSelectedNewsId(null)} />
    </main>
  )
}
