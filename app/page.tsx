'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ONameSection from '@/components/ONameSection'
import DeliverySection from '@/components/DeliverySection'
import EstimatorSection from '@/components/EstimatorSection'
import NewsSection from '@/components/NewsSection'
import NewsModal from '@/components/NewsModal'
import FAQSection from '@/components/FAQSection'
import CTABanner from '@/components/CTABanner'
import InquiryDrawer from '@/components/InquiryDrawer'

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null)

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FDFBF7', color: '#2B2927' }}>
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <ONameSection />
      <DeliverySection />
      <EstimatorSection />
      <NewsSection onSelectNews={setSelectedNewsId} />
      <FAQSection />
      <CTABanner onOpenDrawer={() => setDrawerOpen(true)} />
      <InquiryDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
      <NewsModal newsId={selectedNewsId} onClose={() => setSelectedNewsId(null)} />
    </main>
  )
}
