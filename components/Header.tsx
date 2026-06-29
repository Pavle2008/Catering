import { Button } from '@/components/ui/button'

interface HeaderProps {
  onOpenDrawer: () => void
}

export default function Header({ onOpenDrawer }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">Catering #1</div>
        </div>
        <Button
          onClick={onOpenDrawer}
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Zahtevaj Ponudu
        </Button>
      </div>
    </header>
  )
}
