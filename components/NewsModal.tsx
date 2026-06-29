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
      <DialogContent className="max-w-2xl rounded-xl border border-[#E8E4DF] bg-white p-0 overflow-hidden">
        {item && (
          <>
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-cover"
            />
            <div className="flex flex-col gap-5 p-8">
              <DialogHeader>
                <div className="flex items-center gap-3 mb-1">
                  <span className="rounded-full bg-[#F0EDE9] px-2.5 py-1 text-xs font-medium text-[#78716C]">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#A8A29E]">{item.date}</span>
                </div>
                <DialogTitle className="font-heading text-2xl font-bold text-[#1C1917] leading-snug">
                  {item.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-[#78716C] leading-relaxed mt-1">
                  {item.excerpt}
                </DialogDescription>
              </DialogHeader>
              <div className="border-t border-[#E8E4DF] pt-5">
                <p className="text-base leading-relaxed text-[#1C1917]">
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
