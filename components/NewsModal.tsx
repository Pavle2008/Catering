'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { newsItems } from '@/components/NewsSection'

interface NewsModalProps {
  newsId: number | null
  onClose: () => void
}

export default function NewsModal({ newsId, onClose }: NewsModalProps) {
  const item = newsItems.find((n) => n.id === newsId) ?? null

  return (
    <Dialog open={newsId !== null} onOpenChange={(open) => { if (!open) onClose() }}>
      <DialogContent className="max-w-2xl rounded-2xl p-0 overflow-hidden border animate-in fade-in zoom-in-95 duration-300" style={{ borderColor: '#DFE3DC', backgroundColor: 'white' }}>
        {item && (
          <>
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-x-0 bottom-0 h-24"
                style={{ background: 'linear-gradient(to top, rgba(43,41,39,0.6), transparent)' }}
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-6">
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: '#D48C70', color: 'white' }}
                >
                  {item.category}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-8">
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs" style={{ color: '#A5A89F' }}>{item.date}</span>
                </div>
                <DialogTitle className="font-heading text-2xl font-bold leading-snug" style={{ color: '#2B2927' }}>
                  {item.title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed mt-1" style={{ color: '#6B7066' }}>
                  {item.excerpt}
                </DialogDescription>
              </DialogHeader>
              <div className="border-t pt-5" style={{ borderColor: '#DFE3DC' }}>
                <p className="text-base leading-relaxed" style={{ color: '#2B2927' }}>
                  {item.fullContent}
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
